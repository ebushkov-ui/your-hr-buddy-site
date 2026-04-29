import { Search, Wrench, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnose what is broken",
    description: "Most companies start fixing before they understand the real problem. I run a five-day diagnostic so you stop spending money on the wrong things and know exactly where the risk is.",
  },
  {
    icon: Wrench,
    title: "Build the foundation",
    description: "Clean up the data. Stand up the systems. Build (or rebuild) the HR function so your company can keep scaling without breaking. The plumbing nobody had time to put in.",
  },
  {
    icon: Globe,
    title: "Move off your EOR or PEO",
    description: "Stand up real entities, build the compliance foundation, and own your international presence. Almost nobody specializes in this. I do.",
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
            Three things, done well. Diagnose first, then build what needs to exist.
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
