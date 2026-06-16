import { Search, Wrench, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnose what is broken",
    description:
      "Most companies start fixing before they understand the real problem. I run a five-day diagnostic across your people data, systems, compliance posture, and operating model. You walk out knowing exactly where the risk is, what is costing you money, and what to fix first.",
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
    rotate: "rotate-3 group-hover:rotate-12",
    offset: "",
  },
  {
    icon: Wrench,
    title: "Build the foundation",
    description:
      "Clean up the data. Stand up the systems. Build the HR function from the ground up. Payroll, HRIS, onboarding, policy, compliance, manager workflows. The plumbing nobody had time to put in, built so it holds when you add the next hundred people.",
    blob: "40% 60% 70% 30% / 50% 60% 40% 50%",
    rotate: "-rotate-3 group-hover:-rotate-12",
    offset: "md:mt-12",
  },
  {
    icon: Globe,
    title: "Move off your EOR or PEO",
    description:
      "When companies outgrow Deel, Rippling, or TriNet, they need real entities and local payroll. I take you off, stand up the entity infrastructure, build the compliance foundation, and own the transition end-to-end. Mexico, Japan, and beyond. Almost nobody specializes in this. I do.",
    blob: "70% 30% 50% 50% / 30% 40% 60% 70%",
    rotate: "rotate-6 group-hover:rotate-0",
    offset: "",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-card py-24 md:py-32 px-6 relative z-10"
      style={{ borderRadius: "100px 100px 0 0" }}
    >
      <div className="container mx-auto">
        <div className="mb-20 max-w-xl">
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
            Services
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground">
            What I do<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className={`relative group ${service.offset}`}>
              <div
                className="absolute -inset-6 bg-background scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10"
                style={{ borderRadius: service.blob }}
              />
              <div
                className={`w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 ${service.rotate} transition-transform duration-500`}
              >
                <service.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
