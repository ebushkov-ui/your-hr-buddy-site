import { Map as MapIcon, Hammer, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: MapIcon,
    title: "Map",
    tag: "Fixed fee",
    tagline: "Find what's actually broken.",
    description:
      "The diagnostic. Defined output, defined end. I go through your people data, systems, contracts, and compliance, and talk to the people running them. You get a clear picture of what is broken, what to fix first, and what it takes.",
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
    rotate: "rotate-3 group-hover:rotate-12",
    offset: "",
  },
  {
    icon: Hammer,
    title: "Build",
    tag: "15+ hrs/wk",
    tagline: "Fix it and build the foundation.",
    description:
      "I embed with your team and do the work. HR operations, HRIS cleanup and migrations, onboarding, handbooks, compliance, EOR off-ramps. Not a deck of recommendations. 30-day minimum.",
    blob: "40% 60% 70% 30% / 50% 60% 40% 50%",
    rotate: "-rotate-3 group-hover:-rotate-12",
    offset: "md:mt-12",
  },
  {
    icon: ShieldCheck,
    title: "Sustain",
    tag: "On-call",
    tagline: "Keep it fixed.",
    description:
      "Once the foundation holds, I stay on the bench. Monthly check-in, on-call access, and a second opinion before the big people decisions.",
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
        <div className="mb-20 max-w-2xl">
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
            Services
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground">
            What I do<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Three phases. Almost every engagement starts with Map, because fixing the wrong thing is the most expensive mistake on the people side. Nothing gets built until we know what is broken.
          </p>
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
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground">
                  {service.tag}
                </span>
              </div>
              <p className="font-heading font-bold text-accent mb-4">{service.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
