import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const FOLDER_ID = '1WCsGGqxER871LFjUsbfDUr8emBAtQOft';
const GATEWAY_UPLOAD = 'https://connector-gateway.lovable.dev/google_drive/upload/drive/v3/files?uploadType=multipart';

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

function csvEscape(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function tierFromValue(v: number | undefined) {
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
      created_at = new Date().toISOString(),
    } = lead ?? {};

    if (!email || !tier) {
      return new Response(JSON.stringify({ error: 'missing fields' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build a two-section CSV: lead summary + full Q&A breakdown.
    const answerMap = (answers ?? {}) as Record<string, number>;
    const summaryHeader = ['created_at', 'name', 'email', 'company', 'score', 'tier'];
    const summaryRow = [created_at, name, email, company, score, tier];

    const qaHeader = ['area', 'question', 'answer', 'value', 'rating'];
    const qaRows = QUESTIONS.map((q) => {
      const v = answerMap[q.id];
      const choice = q.choices.find((c) => c.value === v);
      return [q.area, q.prompt, choice?.label ?? '', v ?? '', tierFromValue(v)];
    });

    const csv =
      summaryHeader.map(csvEscape).join(',') + '\n' +
      summaryRow.map(csvEscape).join(',') + '\n' +
      '\n' +
      qaHeader.map(csvEscape).join(',') + '\n' +
      qaRows.map((r) => r.map(csvEscape).join(',')).join('\n') + '\n';

    const safeEmail = String(email).replace(/[^a-zA-Z0-9._-]/g, '_');
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `diagnostic_${stamp}_${safeEmail}.csv`;

    const metadata = { name: filename, parents: [FOLDER_ID], mimeType: 'text/csv' };
    const boundary = '----lovable' + crypto.randomUUID();
    const body =
      `--${boundary}\r\n` +
      `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
      JSON.stringify(metadata) + `\r\n` +
      `--${boundary}\r\n` +
      `Content-Type: text/csv\r\n\r\n` +
      csv + `\r\n` +
      `--${boundary}--`;

    const lovableKey = Deno.env.get('LOVABLE_API_KEY');
    const driveKey = Deno.env.get('GOOGLE_DRIVE_API_KEY');
    if (!lovableKey || !driveKey) {
      return new Response(JSON.stringify({ error: 'connector not configured' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch(GATEWAY_UPLOAD, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        'X-Connection-Api-Key': driveKey,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body,
    });

    const text = await res.text();
    if (!res.ok) {
      console.error('drive upload failed', res.status, text);
      return new Response(JSON.stringify({ error: 'drive upload failed', status: res.status, body: text }), {
        status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, file: JSON.parse(text) }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
