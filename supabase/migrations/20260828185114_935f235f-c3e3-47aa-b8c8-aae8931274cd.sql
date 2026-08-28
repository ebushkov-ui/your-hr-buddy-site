CREATE OR REPLACE FUNCTION public.notify_new_diagnostic_lead()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'net', 'vault'
AS $function$
DECLARE
  v_anon_key text;
BEGIN
  SELECT decrypted_secret INTO v_anon_key
  FROM vault.decrypted_secrets
  WHERE name = 'anon_key'
  LIMIT 1;

  IF v_anon_key IS NULL THEN
    RAISE WARNING 'notify_new_diagnostic_lead: vault secret "anon_key" not found; skipping notification';
    RETURN NEW;
  END IF;

  PERFORM net.http_post(
    url := 'https://rmilttiurwytfmmebbze.supabase.co/functions/v1/notify-new-lead',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', v_anon_key,
      'Authorization', 'Bearer ' || v_anon_key
    ),
    body := to_jsonb(NEW)
  );
  RETURN NEW;
END;
$function$;

REVOKE EXECUTE ON FUNCTION public.notify_new_diagnostic_lead() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.notify_new_diagnostic_lead() TO service_role;