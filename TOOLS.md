# Tools behind elaineadamson.com

A plain-English reference for every external tool this site touches, what it
actually does, and when you'd need to open it.

| Tool | What it actually is | When you'd use it |
|---|---|---|
| **Lovable** (lovable.dev) | The platform that built this site and holds the connector credentials (Resend, Google Drive, reCAPTCHA) it uses under the hood. It owns the Supabase database and edge functions. | Connect/rotate integrations under **Settings → Connectors**; edit site content visually; check backend/edge function logs. |
| **Supabase** | The database behind the site. Stores every diagnostic-quiz lead (`diagnostic_leads` table), and runs the edge functions that email you (`notify-new-lead`), back up leads to Drive (`export-lead-to-drive`), send login/auth emails (`auth-email-hook`), and check reCAPTCHA (`verify-recaptcha`). | Rarely needed directly; Lovable manages it. If ever needed: **Table Editor** to browse leads, or **Edge Functions → Logs** to debug a failed send. |
| **Resend** | The email-sending service that delivers the "new diagnostic lead" notification to you and the `/admin` login (magic link) emails, sent from `elaineadamson.com`. | resend.com → **Domains** (verify sending domain), **Emails** (delivery log), **API Keys**. |
| **Google reCAPTCHA** | Spam filter on the diagnostic quiz form — scores each submission before it's saved as a lead so bot submissions can be flagged. | google.com/recaptcha/admin, only if real submissions start getting mis-flagged as spam or the score threshold needs tuning. |
| **Google Drive** | Backup copy of every diagnostic lead — each submission is also saved as a CSV file into a shared Drive folder, independent of the `/admin` dashboard. | drive.google.com, to browse or export lead data outside the site, or if the admin dashboard is ever unreachable. |
| **Squarespace** | Your domain registrar/DNS host for `elaineadamson.com`. | squarespace.com → **Settings → Domains → DNS Settings**, whenever a DNS record needs adding (e.g. for Resend or email auth). |
| **Vercel** | Hosts the site's live frontend and gives you traffic analytics. | vercel.com → **Analytics** tab for visitor stats, **Deployments** for build history. |
| **GitHub** (`ebushkov-ui/your-hr-buddy-site`) | Where the actual code lives. | Review a pull request or code change made to the site. |
| **/admin** (on the site itself) | The leads dashboard built into the site. | `www.elaineadamson.com/admin`, sign in as `elaine@elaineadamson.com`, to see submitted diagnostic leads. |
| **Google Admin console** | Manages Google Workspace email (`elaine@elaineadamson.com` inbox, calendar). | admin.google.com → **Apps → Google Workspace → Gmail → Authenticate email**, to check/enable SPF & DKIM for the actual mailbox — separate from the Resend sending-domain records. |

## How a diagnostic lead flows

1. A visitor submits the diagnostic quiz on the site.
2. Supabase's `verify-recaptcha` function checks it isn't a bot, and the answers are saved to the `diagnostic_leads` table.
3. A database trigger fires two edge functions: `notify-new-lead` (emails you via Resend) and `export-lead-to-drive` (saves a CSV backup to Google Drive).
4. You can review every lead any time in `/admin`.
