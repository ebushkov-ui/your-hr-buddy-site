import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const FOLDER_ID = '1WCsGGqxER871LFjUsbfDUr8emBAtQOft';
const GATEWAY_UPLOAD = 'https://connector-gateway.lovable.dev/google_drive/upload/drive/v3/files?uploadType=multipart';

function csvEscape(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
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

    const header = ['created_at', 'name', 'email', 'company', 'score', 'tier', 'answers'];
    const row = [created_at, name, email, company, score, tier, JSON.stringify(answers)];
    const csv = header.join(',') + '\n' + row.map(csvEscape).join(',') + '\n';

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
