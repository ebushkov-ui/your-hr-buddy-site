import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

// Emails a prospect their diagnostic result. Public endpoint, so it only sends
// after a server-side reCAPTCHA pass, and it recomputes the tier from the raw
// answers rather than trusting anything the browser says about the result.

const RESEND_GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend/emails';
const REPLY_TO = 'elaine@elaineadamson.com';
const BOOKING_URL = 'https://cal.com/elaine-adamson';
const SITE_URL = 'https://elaineadamson.com';
const RECAPTCHA_ACTION = 'diagnostic_email';

type Choice = { label: string; value: 0 | 1 | 2 };
type Question = { id: string; area: string; prompt: string; choices: Choice[] };
type Tier = 'green' | 'yellow' | 'red';

const QUESTIONS: Question[] = [
  { id: "staffing", area: "HR Staffing", prompt: "How is HR staffed right now?", choices: [
    { label: "We have a dedicated HR leader or team with real capacity.", value: 2 },
    { label: "We have someone handling HR, but it's not their only job.", value: 1 },
    { label: "HR tasks fall to the founder, COO, or office manager.", value: 0 },
  ]},
  { id: "people-data", area: "People Data", prompt: "How confident are you in your people data?", choices: [
    { label: "Our headcount, org structure, and comp data are accurate and in one place.", value: 2 },
    { label: "We have the data but it's spread across multiple systems and hard to pull.", value: 1 },
    { label: "We're not confident the numbers are right and we know it.", value: 0 },
  ]},
  { id: "compliance-audit", area: "Compliance", prompt: "When did you last audit your HR compliance posture?", choices: [
    { label: "Within the last 12 months.", value: 2 },
    { label: "We've never done a formal audit but we're probably fine.", value: 1 },
    { label: "We don't know what we don't know.", value: 0 },
  ]},
  { id: "international", area: "Global", prompt: "Are you hiring or managing employees outside the US?", choices: [
    { label: "No international hiring yet.", value: 2 },
    { label: "We have international employees and we've built or are building local entities.", value: 1 },
    { label: "We use an EOR like Deel to handle it.", value: 0 },
  ]},
  { id: "bus-factor", area: "Resilience", prompt: "What happens to your HR operations if the person running them leaves?", choices: [
    { label: "Someone else could pick it up. It's documented and not a one-person show.", value: 2 },
    { label: "It would be painful but we'd figure it out.", value: 1 },
    { label: "It would break. That person is the process.", value: 0 },
  ]},
  { id: "onboarding", area: "People Ops", prompt: "How does onboarding work at your company?", choices: [
    { label: "We have a documented, repeatable process that actually gets followed.", value: 2 },
    { label: "We have something, but it depends on who's doing the hiring.", value: 1 },
    { label: "Every new hire gets a different experience.", value: 0 },
  ]},
  { id: "manager-enablement", area: "Manager Enablement", prompt: "How are your managers handling day-to-day people decisions?", choices: [
    { label: "They have frameworks and know when to escalate.", value: 2 },
    { label: "They figure it out but we see inconsistency across the org.", value: 1 },
    { label: "They come to HR (or the founder) for everything.", value: 0 },
  ]},
  { id: "strategic-seat", area: "Strategic Role", prompt: "When does HR get involved in business decisions?", choices: [
    { label: "Before decisions are made. We're in the room.", value: 2 },
    { label: "After decisions are made, to figure out the people logistics.", value: 1 },
    { label: "HR isn't part of strategic conversations.", value: 0 },
  ]},
  { id: "state-of-hr", area: "Overall", prompt: "How would you describe the state of your HR right now?", choices: [
    { label: "Functional and scaling with the business.", value: 2 },
    { label: "Functional but held together with duct tape.", value: 1 },
    { label: "Behind where we need to be and we know it.", value: 0 },
  ]},
];

// Mirrors scoreToTier in src/components/diagnostic/questions.ts.
function tierFor(values: number[]): Tier {
  const reds = values.filter((v) => v === 0).length;
  const greens = values.filter((v) => v === 2).length;
  if (reds >= 2) return 'red';
  if (greens >= Math.ceil(values.length * 0.6) && reds <= 1) return 'green';
  return 'yellow';
}

// Mirrors TIER_COPY in src/components/diagnostic/questions.ts.
const TIER_COPY: Record<Tier, { label: string; headline: string; body: string; color: string }> = {
  green: {
    label: 'Green: Healthy',
    headline: 'Your HR is healthy.',
    body: "You've built a solid foundation. The work now is staying ahead of the next scaling stage. If you want a second set of eyes on where things could break, let's talk.",
    color: '#047857',
  },
  yellow: {
    label: 'Yellow: Manageable Gaps',
    headline: 'You have manageable gaps.',
    body: "Some things are working, others aren't, and it's not always obvious which is which. A diagnostic would show you where to focus first so you're not spending time or money on the wrong fix.",
    color: '#b45309',
  },
  red: {
    label: 'Red: Real Risk',
    headline: "There's real risk here.",
    body: 'This is the reality for a lot of companies scaling faster than their people function. The risk compounds quietly until something breaks publicly. Let\'s get on a call.',
    color: '#be123c',
  },
};

const RATING: Record<number, { label: string; color: string }> = {
  2: { label: 'Green', color: '#047857' },
  1: { label: 'Yellow', color: '#b45309' },
  0: { label: 'Red', color: '#be123c' },
};

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function escapeHtml(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v);
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function recaptchaPassed(token: string): Promise<boolean> {
  const secret = Deno.env.get('RECAPTCHA_SECRET_KEY');
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }).toString(),
  });
  const data = await res.json();
  return data.success === true &&
    typeof data.score === 'number' &&
    data.score >= 0.5 &&
    data.action === RECAPTCHA_ACTION;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { token, email, answers } = (await req.json()) ?? {};

    if (typeof token !== 'string' || !token) return json({ error: 'missing token' }, 400);
    if (typeof email !== 'string' || email.length > 255 || !EMAIL_RE.test(email.trim())) {
      return json({ error: 'invalid email' }, 400);
    }
    const answerMap = (answers ?? {}) as Record<string, unknown>;
    const values = QUESTIONS.map((q) => answerMap[q.id]);
    if (!values.every((v) => v === 0 || v === 1 || v === 2)) {
      return json({ error: 'incomplete answers' }, 400);
    }

    if (!(await recaptchaPassed(token))) return json({ error: 'verification failed' }, 403);

    const tier = tierFor(values as number[]);
    const copy = TIER_COPY[tier];

    const rows = QUESTIONS.map((q, i) => {
      const r = RATING[values[i] as number];
      return `<tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;">${escapeHtml(q.area)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;color:${r.color};font-weight:bold;">${r.label}</td>
      </tr>`;
    }).join('');

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;line-height:1.5;">
        <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666;margin-bottom:8px;">HR Operations Health Check</p>
        <p style="display:inline-block;margin:0 0 12px;padding:4px 12px;border-radius:999px;border:2px solid ${copy.color};color:${copy.color};font-weight:bold;font-size:14px;">${copy.label}</p>
        <h1 style="font-size:28px;margin:0 0 12px;">${escapeHtml(copy.headline)}</h1>
        <p style="font-size:16px;margin:0 0 24px;">${escapeHtml(copy.body)}</p>
        <h2 style="font-size:16px;margin:0 0 8px;">How each area scored</h2>
        <table style="border-collapse:collapse;width:100%;margin-bottom:28px;font-size:15px;">${rows}</table>
        <p style="margin:0 0 24px;">
          <a href="${BOOKING_URL}" style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:bold;">Book a 30-min call</a>
        </p>
        <p style="font-size:15px;margin:0 0 24px;">Or just reply to this email. It comes straight to me.</p>
        <p style="font-size:15px;margin:0;">Elaine Adamson<br/>
          <a href="${SITE_URL}" style="color:#666;">Elaine Adamson Consulting</a></p>
      </div>
    `;

    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    const resendKey = Deno.env.get('RESEND_API_KEY');
    // Resend's shared test sender only delivers to the account owner, so prospect
    // emails need a sender on a verified domain (e.g. elaine@elaineadamson.com).
    const fromAddress = Deno.env.get('RESULT_EMAIL_FROM') || Deno.env.get('LEAD_NOTIFY_FROM');
    if (!lovableApiKey || !resendKey || !fromAddress) {
      console.error('LOVABLE_API_KEY, RESEND_API_KEY, or RESULT_EMAIL_FROM/LEAD_NOTIFY_FROM not configured');
      return json({ error: 'email not configured' }, 500);
    }

    const res = await fetch(RESEND_GATEWAY_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        'X-Connection-Api-Key': resendKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [email.trim()],
        reply_to: REPLY_TO,
        subject: `Your HR health check: ${copy.label}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error('resend send failed', res.status, await res.text());
      return json({ error: 'email send failed' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: String(e) }, 500);
  }
});
