import { Search, Wrench, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnose what is broken",
    description: "Most companies start fixing before they understand the real problem. I run a five-day diagnostic across your people data, systems, compliance posture, and operating model. You walk out knowing exactly where the risk is, what is costing you money, and what to fix first.",
  },
  {
    icon: Wrench,
    title: "Build the foundation",
    description: "Clean up the data. Stand up the systems. Build the HR function from the ground up. Payroll, HRIS, onboarding, policy, compliance, manager workflows. The plumbing nobody had time to put in, built so it holds when you add the next hundred people.",
  },
  {
    icon: Globe,
    title: "Move off your EOR or PEO",
    description: "When companies outgrow Deel, Rippling, or TriNet, they need real entities and local payroll. I take you off, stand up the entity infrastructure, build the compliance foundation, and own the transition end-to-end. UK, Japan, and beyond. Almost nobody specializes in this. I do.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Services</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What I do<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            For founders, COOs, and CHROs at companies between 50 and 500 employees. Three things, done well. Diagnose first, then build what needs to exist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
