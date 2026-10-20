# elaineadamson.com

Marketing site for Elaine Adamson Consulting — fractional HR leadership for scaling startups.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Cal.com inline embed for booking
- Deployed to Vercel

## Local development

```sh
npm install
npm run dev
```

Site runs at http://localhost:8080.

## Deployment

Pushes to `main` deploy automatically to Vercel. Live at https://www.elaineadamson.com.

`npm run build` prerenders each route in `src/seo.ts` to static HTML (`scripts/prerender.mjs`) so search and AI crawlers see the content without running JavaScript.

## Tools

See [TOOLS.md](./TOOLS.md) for a plain-English breakdown of every external tool this site uses (Lovable, Supabase, Resend, Google Drive, reCAPTCHA, Squarespace, Vercel, etc.) and when you'd need each one.
