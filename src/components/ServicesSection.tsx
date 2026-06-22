import { Users, Compass, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Fractional HR Partnership",
    description:
      "Your embedded HR function. I start with a diagnostic so we are fixing the right things, then handle day-to-day operations, employee relations, compliance, benefits renewals, HR tech implementation, and strategic people support. Same dedicated partner, every time — without the overhead of a full-time hire.",
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
    rotate: "rotate-3 group-hover:rotate-12",
    offset: "",
  },
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "You do not need ongoing support — you need the right conversation at the right moment. I come in for targeted sessions on org design, people decisions, culture challenges, compensation structure, or scaling a team, and help you move forward with clarity.",
    blob: "40% 60% 70% 30% / 50% 60% 40% 50%",
    rotate: "-rotate-3 group-hover:-rotate-12",
    offset: "md:mt-12",
  },
  {
    icon: ClipboardCheck,
    title: "Project-Based Support",
    description:
      "A specific need, a defined scope, and a clean handoff. I begin with a focused diagnostic so the scope is actually right, then deliver HR audits, employee handbooks, manager training, offsite design, EOR or PEO off-ramping, system cleanup, and more — documented and ready for your team to run.",
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
            Three ways I work with companies scaling faster than their HR infrastructure. Every engagement starts with diagnosing what is actually broken — because fixing the wrong thing is the most expensive mistake on the people side.
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
