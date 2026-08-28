import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const NOTIFY_EMAIL = 'elaine@elaineadamson.com';

type Choice = { label: string; value: 0 | 1 | 2 };
type Question = { id: string; area: string; prompt: string; choices: Choice[] };

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
    { label: "We use an EOR like Deel to handle it.", value: 1 },
    { label: "We have international employees and we've built or are building local entities.", value: 0 },
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
    { label: "Before decisions are made — we're in the room.", value: 2 },
    { label: "After decisions are made, to figure out the people logistics.", value: 1 },
    { label: "HR isn't part of strategic conversations.", value: 0 },
  ]},
  { id: "state-of-hr", area: "Overall", prompt: "How would you describe the state of your HR right now?", choices: [
    { label: "Functional and scaling with the business.", value: 2 },
    { label: "Functional but held together with duct tape.", value: 1 },
    { label: "Behind where we need to be and we know it.", value: 0 },
  ]},
];

function escapeHtml(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function tierLabel(v: number | undefined) {
  if (v === 2) return 'Green';
  if (v === 1) return 'Yellow';
  if (v === 0) return 'Red';
  return '';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const lead = await req.json();
    const {
      name = '',
      email = '',
      company = '',
      score = 0,
      tier = '',
      answers = {},
      spam_flagged = false,
      created_at = new Date().toISOString(),
    } = lead ?? {};

    if (!email || !tier) {
      return new Response(JSON.stringify({ error: 'missing fields' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const answerMap = (answers ?? {}) as Record<string, number>;
    const qaRows = QUESTIONS.map((q) => {
      const v = answerMap[q.id];
      const choice = q.choices.find((c) => c.value === v);
      return `<tr>
        <td style="padding:6px 10px;border:1px solid #e2e2e2;">${escapeHtml(q.area)}</td>
        <td style="padding:6px 10px;border:1px solid #e2e2e2;">${escapeHtml(choice?.label ?? '')}</td>
        <td style="padding:6px 10px;border:1px solid #e2e2e2;">${escapeHtml(tierLabel(v))}</td>
      </tr>`;
    }).join('');

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="margin-bottom:4px;">New diagnostic lead: ${escapeHtml(name)}</h2>
        <p style="color:#555;margin-top:0;">${escapeHtml(created_at)}${spam_flagged ? ' &middot; <strong style="color:#b45309;">flagged for review</strong>' : ''}</p>
        <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
          <tr><td style="padding:6px 10px;font-weight:bold;">Email</td><td style="padding:6px 10px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Company</td><td style="padding:6px 10px;">${escapeHtml(company || '—')}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Score</td><td style="padding:6px 10px;">${escapeHtml(score)}</td></tr>
          <tr><td style="padding:6px 10px;font-weight:bold;">Tier</td><td style="padding:6px 10px;">${escapeHtml(tier)}</td></tr>
        </table>
        <table style="border-collapse:collapse;width:100%;">
          <tr>
            <th style="padding:6px 10px;border:1px solid #e2e2e2;text-align:left;">Area</th>
            <th style="padding:6px 10px;border:1px solid #e2e2e2;text-align:left;">Answer</th>
            <th style="padding:6px 10px;border:1px solid #e2e2e2;text-align:left;">Rating</th>
          </tr>
          ${qaRows}
        </table>
      </div>
    `;

    const resendKey = Deno.env.get('RESEND_API_KEY');
    const fromAddress = Deno.env.get('LEAD_NOTIFY_FROM') || 'HR Diagnostic <onboarding@resend.dev>';
    if (!resendKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'connector not configured' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [NOTIFY_EMAIL],
        subject: `New diagnostic lead: ${name} (${tier})`,
        html,
      }),
    });

    const text = await res.text();
    if (!res.ok) {
      console.error('resend send failed', res.status, text);
      return new Response(JSON.stringify({ error: 'email send failed', status: res.status, body: text }), {
        status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
