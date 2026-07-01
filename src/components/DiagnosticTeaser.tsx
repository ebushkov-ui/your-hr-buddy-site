import { ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DiagnosticTeaser = () => {
  return (
    <section className="bg-card py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div
          className="relative overflow-hidden bg-background p-10 md:p-16 grid md:grid-cols-5 gap-10 items-center"
          style={{ borderRadius: "60px" }}
        >
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 blur-3xl"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
          />
          <div className="md:col-span-3 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-5">
              <Activity className="h-3.5 w-3.5" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.15em]">
                Free diagnostic
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
              Is your HR foundation keeping up<span className="text-accent">?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Seven quick questions. Green, yellow, or red — an honest read on where you actually stand across compliance, HR tech, people ops, and org design. Under two minutes.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold rounded-full h-14 px-8 group"
            >
              <Link to="/diagnostic">
                Take the diagnostic
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="md:col-span-2 relative flex justify-center">
            <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
              {[
                { color: "bg-emerald-500", label: "Green", copy: "Solid foundation" },
                { color: "bg-amber-500", label: "Yellow", copy: "Cracks forming" },
                { color: "bg-rose-500", label: "Red", copy: "Urgent" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60"
                >
                  <span className={`h-4 w-4 rounded-full ${t.color} shrink-0`} />
                  <div>
                    <p className="font-heading font-bold text-sm">{t.label}</p>
                    <p className="text-xs text-muted-foreground">{t.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTeaser;
