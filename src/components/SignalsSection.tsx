import { ArrowRight } from "lucide-react";
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
  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter leading-none text-foreground mb-16">
          You probably need me if<span className="text-accent">...</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mb-16">
          {signals.map((signal, i) => (
            <div key={signal.title} className="border-t border-border pt-6">
              <span className="font-heading text-sm font-bold text-accent block mb-3">
                0{i + 1}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{signal.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{signal.body}</p>
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold text-base px-8 h-14 rounded-full group"
        >
          <a href="#contact">
            Sound familiar? Let's talk.
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SignalsSection;
