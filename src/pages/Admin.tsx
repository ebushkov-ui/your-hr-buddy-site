import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import AdminLogin from "@/components/admin/AdminLogin";
import LeadsDashboard from "@/components/admin/LeadsDashboard";

const Admin = () => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  if (session === undefined) return null;
  return session ? <LeadsDashboard session={session} /> : <AdminLogin />;
};

export default Admin;
