
CREATE TABLE public.diagnostic_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  company TEXT,
  score INTEGER NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('green','yellow','red')),
  answers JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.diagnostic_leads TO anon, authenticated;
GRANT ALL ON public.diagnostic_leads TO service_role;
ALTER TABLE public.diagnostic_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a diagnostic lead"
  ON public.diagnostic_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
