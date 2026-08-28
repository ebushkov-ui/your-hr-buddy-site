import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } =
      mode === "sign-in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });
    setSubmitting(false);

    if (error) {
      toast({
        title: mode === "sign-in" ? "Couldn't sign in" : "Couldn't create account",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    if (mode === "sign-up") {
      toast({
        title: "Account created",
        description: "Check your inbox to confirm your email, then sign in.",
      });
      setMode("sign-in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm bg-card rounded-3xl shadow-xl border border-border/40 p-8">
        <h1 className="font-heading text-2xl font-bold tracking-tight mb-1">Admin</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {mode === "sign-in" ? "Sign in to view diagnostic leads." : "Create the admin account."}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="a-email">Email</Label>
            <Input
              id="a-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1.5 h-11 rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="a-password">Password</Label>
            <Input
              id="a-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-1.5 h-11 rounded-xl"
            />
          </div>
          <Button type="submit" disabled={submitting} className="w-full h-11 rounded-xl font-heading font-bold">
            {submitting ? "Please wait..." : mode === "sign-in" ? "Sign in" : "Create account"}
          </Button>
        </form>
        <button
          onClick={() => setMode(mode === "sign-in" ? "sign-up" : "sign-in")}
          className="text-sm text-muted-foreground hover:text-foreground mt-4 block mx-auto"
        >
          {mode === "sign-in" ? "First time here? Create an account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
