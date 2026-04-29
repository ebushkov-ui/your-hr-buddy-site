import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
            HR Consultant
            <br />
            for scaling{" "}
            <span className="text-accent">startups</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I diagnose what is broken before anyone starts fixing it. Twenty years building People functions for companies that have outgrown what got them here. I get embedded, I get it done, and I do it fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 h-12"
            >
              <a href="#contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-heading font-semibold text-base px-8 h-12 border-foreground/20 hover:bg-foreground/5"
            >
              <a href="#services">See How I Work</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
