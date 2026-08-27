ALTER TABLE public.diagnostic_leads
  ADD COLUMN IF NOT EXISTS recaptcha_score numeric,
  ADD COLUMN IF NOT EXISTS spam_flagged boolean NOT NULL DEFAULT false;