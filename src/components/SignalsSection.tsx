import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const signals = [
  {
    title: "HR is still someone's side job.",
    body: "Headcount is climbing, your COO or office manager runs payroll between everything else, and the handbook was last opened at 30 people. Or written by ChatGPT.",
  },
  {
    title: "Nobody trusts the people data.",
    body: "Headcount lives in three places, none of them match, and the board deck takes a week.",
  },
  {
    title: "You went multi-state (or multi-country) fast.",
    body: "Every state has its own rules on pay, leave, and final paychecks. Every country has more. Nobody's tracking them, and offers went out before anyone checked.",
  },
  {
    title: "The HRIS rollout stalled.",
    body: "Rippling, Gusto, or ChartHop is half set up, half trusted, and someone still keeps a spreadsheet.",
  },
  {
    title: "One person is the process.",
    body: "If your HR lead left tomorrow, it would break.",
  },
  {
    title: "You need senior judgment, not another hire.",
    body: "Someone to find what's broken, fix it, and hand back something that runs.",
  },
];

const SignalsSection = () => {
  const [picked, setPicked] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const cta =
    picked.size === 0
      ? "Sound familiar? Let's talk."
      : `${picked.size} of ${signals.length} sound familiar. Let's talk.`;

  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter leading-none text-foreground mb-4">
          You probably need me if<span className="text-accent">...</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">Tap the ones that sound like you.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {signals.map((signal, i) => {
            const on = picked.has(i);
            return (
              <button
                key={signal.title}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={`group flex flex-col justify-start text-left p-8 rounded-[32px] border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  on
                    ? "bg-accent/10 border-accent"
                    : "bg-card border-transparent hover:border-accent/40"
                }`}
              >
                <div className="w-full flex items-center justify-between mb-5">
                  <span className="font-heading text-sm font-bold text-accent">0{i + 1}</span>
                  <span
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                      on
                        ? "bg-accent text-accent-foreground"
                        : "border-2 border-border text-transparent group-hover:border-accent/60"
                    }`}
                  >
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{signal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{signal.body}</p>
              </button>
            );
          })}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold text-base px-8 h-14 rounded-full group"
        >
          <a href="#contact">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SignalsSection;
