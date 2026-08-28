-- Notify the site owner by email the moment a diagnostic lead is saved,
-- and let an authorized admin read leads from the app.
--
-- This fires server-side (AFTER INSERT trigger via pg_net), independent of
-- the visitor's browser, so a lead can't go unnoticed the way it did before.

CREATE EXTENSION IF NOT EXISTS pg_net;

CREATE OR REPLACE FUNCTION public.notify_new_diagnostic_lead()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, net
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://rmilttiurwytfmmebbze.supabase.co/functions/v1/notify-new-lead',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtaWx0dGl1cnd5dGZtbWViYnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjY2MDUsImV4cCI6MjA5ODUwMjYwNX0.orvsnC8UYDrp-qAzda6aNn-h0NonrF2k1e6ZpTUHFIA',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtaWx0dGl1cnd5dGZtbWViYnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjY2MDUsImV4cCI6MjA5ODUwMjYwNX0.orvsnC8UYDrp-qAzda6aNn-h0NonrF2k1e6ZpTUHFIA'
    ),
    body := to_jsonb(NEW)
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_notify_new_diagnostic_lead ON public.diagnostic_leads;
CREATE TRIGGER trg_notify_new_diagnostic_lead
  AFTER INSERT ON public.diagnostic_leads
  FOR EACH ROW EXECUTE FUNCTION public.notify_new_diagnostic_lead();

CREATE POLICY "Admins can view diagnostic leads"
  ON public.diagnostic_leads FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'elaine@elaineadamson.com');
