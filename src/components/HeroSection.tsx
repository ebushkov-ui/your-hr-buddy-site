import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
      {/* Biomorphic background blob */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-accent/10 blur-3xl -z-10 animate-pulse"
        style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-foreground mb-8">
            Fractional HR Consultant for scaling{" "}
            <span className="text-accent relative inline-block">
              startups.
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 15C50 5 150 5 299 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground max-w-2xl mb-6 leading-relaxed font-medium">
            For founders, COOs, and CHROs at companies up to 500 employees. Build, reset, or refresh your people operations.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I diagnose what is broken before anyone starts fixing it. Twenty years building People functions for companies that have outgrown what got them here. I get embedded, I get it done, and I do it fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform font-heading font-bold text-base px-8 h-14 rounded-full shadow-xl shadow-accent/10 group"
            >
              <a href="#contact">
                Hand me the mess
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-heading font-bold text-base px-8 h-14 rounded-full border-2 border-foreground/10 hover:bg-foreground hover:text-background"
            >
              <a href="#services">See How I Work</a>
            </Button>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-6">
            Schedule a 30-min call
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
