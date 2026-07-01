import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { QUESTIONS, TIER_COPY, scoreToTier, type Tier } from "./questions";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
});

type Step = "intro" | "questions" | "gate" | "result";

interface Props {
  compact?: boolean;
}

const DiagnosticForm = ({ compact = false }: Props) => {
  const [step, setStep] = useState<Step>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState({ name: "", email: "", company: "" });
  const [submitting, setSubmitting] = useState(false);
  const [tier, setTier] = useState<Tier | null>(null);

  const maxScore = QUESTIONS.length * 2;
  const score = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers],
  );
  const allAnswered = Object.keys(answers).length === QUESTIONS.length;

  const current = QUESTIONS[qIndex];
  const progress = ((qIndex + 1) / QUESTIONS.length) * 100;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    if (qIndex < QUESTIONS.length - 1) {
      setTimeout(() => setQIndex(qIndex + 1), 150);
    } else {
      setTimeout(() => setStep("gate"), 200);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(contact);
    if (!parsed.success) {
      toast({
        title: "Please check your info",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const computedTier = scoreToTier(score, maxScore, answers);
    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      score,
      tier: computedTier,
      answers,
    };
    const { error } = await supabase.from("diagnostic_leads").insert(payload);
    setSubmitting(false);
    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email elaine@elaineadamson.com",
        variant: "destructive",
      });
      return;
    }
    // Fire-and-forget export to Google Drive
    supabase.functions
      .invoke("export-lead-to-drive", {
        body: { ...payload, created_at: new Date().toISOString() },
      })
      .catch((err) => console.error("drive export failed", err));
    setTier(computedTier);
    setStep("result");
  };

  const reset = () => {
    setStep("intro");
    setQIndex(0);
    setAnswers({});
    setTier(null);
  };

  return (
    <div className={`bg-card text-card-foreground rounded-[40px] shadow-2xl overflow-hidden ${compact ? "" : "border border-border/40"}`}>
      <div className="p-8 md:p-12">
        {step === "intro" && (
          <div>
            <span className="text-xs font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
              HR Operations Diagnostic
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Am I the right fit for you?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Seven quick questions across compliance, HR tech, people operations, and org design. You'll get a Green / Yellow / Red read on where your HR foundation actually stands — takes under two minutes.
            </p>
            <Button
              size="lg"
              onClick={() => setStep("questions")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold rounded-full h-14 px-8 group"
            >
              Start the diagnostic
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {step === "questions" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-[0.2em]">
                {current.area} · Question {qIndex + 1} of {QUESTIONS.length}
              </span>
              {qIndex > 0 && (
                <button
                  onClick={() => setQIndex(qIndex - 1)}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" /> Back
                </button>
              )}
            </div>
            <div className="h-1 bg-muted rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-8 leading-snug">
              {current.prompt}
            </h3>
            <div className="space-y-3">
              {current.choices.map((c) => {
                const selected = answers[current.id] === c.value;
                return (
                  <button
                    key={c.label}
                    onClick={() => handleAnswer(c.value)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                      selected
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50 hover:bg-accent/5"
                    }`}
                  >
                    <span className="text-base leading-relaxed">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === "gate" && (
          <form onSubmit={handleSubmit}>
            <span className="text-xs font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
              One last step
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Where should I send your result?
            </h3>
            <p className="text-muted-foreground mb-8">
              I'll show it on screen and keep a copy so I can follow up if — and only if — it looks like we might be a fit.
            </p>
            <div className="space-y-4 max-w-md">
              <div>
                <Label htmlFor="d-name">Name</Label>
                <Input
                  id="d-name"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  required
                  maxLength={100}
                  className="mt-1.5 h-12 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="d-email">Work email</Label>
                <Input
                  id="d-email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  required
                  maxLength={255}
                  className="mt-1.5 h-12 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="d-company">Company (optional)</Label>
                <Input
                  id="d-company"
                  value={contact.company}
                  onChange={(e) => setContact({ ...contact, company: e.target.value })}
                  maxLength={120}
                  className="mt-1.5 h-12 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting || !allAnswered}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold rounded-full h-14 px-8 w-full sm:w-auto"
              >
                {submitting ? "Scoring..." : "Show my result"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {step === "result" && tier && (
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ring-2 ${TIER_COPY[tier].ring} mb-6`}>
              <span className={`h-2.5 w-2.5 rounded-full ${TIER_COPY[tier].dot}`} />
              <span className={`text-sm font-heading font-bold ${TIER_COPY[tier].color}`}>
                {TIER_COPY[tier].label}
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {TIER_COPY[tier].headline}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {TIER_COPY[tier].body}
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Score: {score} / {maxScore}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold rounded-full h-14 px-8"
              >
                <a href="#contact">Book a call</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={reset}
                className="rounded-full h-14 px-8 font-heading font-bold border-2"
              >
                Retake the diagnostic
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticForm;
