import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Map what you actually have.",
    body: "Every contract, every promise, every country, every benefit. Before anyone files for an entity.",
  },
  {
    title: "Pick the right exit, country by country.",
    body: "Your own entity, global payroll, or stay on the EOR where it still makes sense. One answer rarely fits all of them.",
  },
  {
    title: "Move people without breaking trust.",
    body: "Contracts, payroll, benefits, and the conversation with each employee. Nobody should find out they have a new employer from their payslip.",
  },
];

const stats = [
  { value: "190+", label: "Employees moved off EORs" },
  { value: "5", label: "Countries" },
];

const EorSection = () => {
  return (
    <section
      id="eor"
      className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden"
    >
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 blur-3xl"
        style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
      />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-6">
            Up close: EOR &amp; PEO off-ramps
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
            Off the EOR. Onto infrastructure you{" "}
            <span className="italic font-light">own.</span>
          </h2>
          <p className="text-xl leading-relaxed opacity-80">
            Deel and Remote get you hiring in a new country in a week. That's the point. Then you have a few dozen people across three countries, a bill that grows with every hire, and offer letters that promised things local law doesn't allow. That's usually when I get the call.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-10 mb-16">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-background/20 pt-6">
              <span className="font-heading text-sm font-bold text-accent block mb-3">
                0{i + 1}
              </span>
              <h3 className="font-heading text-2xl font-bold mb-3">{step.title}</h3>
              <p className="opacity-80 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-60 lg:max-w-xs">
            UK, Japan, Colombia, Poland, and Mexico. Teams from 2 people to 100.
          </p>
          <Button
            asChild
            size="lg"
            className="lg:ml-auto bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold text-base px-8 h-14 rounded-full group self-start lg:self-auto"
          >
            <a href="#contact">
              Planning an exit? Let's map it.
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EorSection;
