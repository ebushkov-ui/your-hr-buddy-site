import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { QUESTIONS } from "@/components/diagnostic/questions";

type Lead = {
  id: string;
  name: string | null;
  email: string;
  company: string | null;
  score: number;
  tier: string;
  answers: Record<string, number>;
  spam_flagged: boolean;
  created_at: string;
};

const TIER_VARIANT: Record<string, string> = {
  green: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  yellow: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  red: "bg-rose-500/10 text-rose-700 border-rose-500/30",
};

const ratingLabel = (v: number | undefined) => (v === 2 ? "Green" : v === 1 ? "Yellow" : v === 0 ? "Red" : "—");

interface Props {
  session: Session;
}

const LeadsDashboard = ({ session }: Props) => {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("diagnostic_leads")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
          return;
        }
        setLeads((data ?? []) as unknown as Lead[]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight">Diagnostic leads</h1>
            <p className="text-sm text-muted-foreground mt-1">Signed in as {session.user.email}</p>
          </div>
          <Button variant="outline" onClick={() => supabase.auth.signOut()} className="rounded-full">
            Sign out
          </Button>
        </div>

        {error && (
          <p className="text-sm text-rose-600 mb-6">
            Couldn't load leads: {error}
          </p>
        )}

        {leads && leads.length === 0 && !error && (
          <p className="text-sm text-muted-foreground">No leads yet.</p>
        )}

        {leads && leads.length > 0 && (
          <div className="rounded-2xl border border-border/40 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8" />
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Flag</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <>
                    <TableRow
                      key={lead.id}
                      className="cursor-pointer"
                      onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                    >
                      <TableCell>
                        {expanded === lead.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {new Date(lead.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>{lead.name || "—"}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.company || "—"}</TableCell>
                      <TableCell>{lead.score}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={TIER_VARIANT[lead.tier] ?? ""}>
                          {lead.tier}
                        </Badge>
                      </TableCell>
                      <TableCell>{lead.spam_flagged ? "⚠️" : ""}</TableCell>
                    </TableRow>
                    {expanded === lead.id && (
                      <TableRow key={`${lead.id}-detail`}>
                        <TableCell colSpan={8} className="bg-muted/30">
                          <div className="py-2">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Area</TableHead>
                                  <TableHead>Answer</TableHead>
                                  <TableHead>Rating</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {QUESTIONS.map((q) => {
                                  const v = lead.answers?.[q.id];
                                  const choice = q.choices.find((c) => c.value === v);
                                  return (
                                    <TableRow key={q.id}>
                                      <TableCell>{q.area}</TableCell>
                                      <TableCell>{choice?.label ?? "—"}</TableCell>
                                      <TableCell>{ratingLabel(v)}</TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsDashboard;
