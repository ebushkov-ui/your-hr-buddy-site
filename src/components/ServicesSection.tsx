import { Hammer, ShieldCheck, Clock, Map as MapIcon } from "lucide-react";

const areas = [
  {
    title: "HR Strategy & Build",
    description: "Function build or rebuild, org design and leveling, handbooks, manager playbooks.",
  },
  {
    title: "Systems & Data",
    description: "HRIS selection, implementation, and migration. Data cleanup, reporting, one source of truth.",
  },
  {
    title: "Payroll & Benefits",
    description: "US multi-state payroll, benefits and 401(k), leave, wage-and-hour, and I‑9 compliance.",
  },
  {
    title: "Employee Lifecycle",
    description: "Onboarding that scales past 50, 100, 200. Manager enablement, employee relations, exits.",
  },
  {
    title: "Global & Scale",
    description: "International expansion, EOR and PEO off-ramps, entity setup, multi-country payroll.",
  },
];

const engagements = [
  {
    icon: Hammer,
    title: "Build",
    description:
      "The core engagement. I embed with your team at least 15 hours a week and do the work, whether that's a defined project or running your HR function. HR ops, HRIS cleanup, onboarding, handbooks, compliance, EOR off-ramps. Not a deck of recommendations.",
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
    rotate: "rotate-3 group-hover:rotate-12",
    offset: "",
  },
  {
    icon: ShieldCheck,
    title: "Sustain",
    description:
      "The lighter relationship after a Build. Monthly check-ins, on-call access, and a second opinion before the big people decisions.",
    blob: "70% 30% 50% 50% / 30% 40% 60% 70%",
    rotate: "-rotate-3 group-hover:-rotate-12",
    offset: "md:mt-12",
  },
  {
    icon: Clock,
    title: "Interim HR",
    description:
      "Time-boxed coverage while you hire a permanent HR leader. A few hours a week for a few weeks, so nothing drops in the gap.",
    blob: "40% 60% 70% 30% / 50% 60% 40% 50%",
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
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
            Services
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground">
            What I do<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            The whole people function for a scaling company, from the first handbook to the fifth country.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-24 md:mb-32">
          {areas.map((area, i) => (
            <div key={area.title} className="border-t border-border pt-6">
              <span className="font-heading text-sm font-bold text-accent block mb-3">
                0{i + 1}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
            How we work together
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground">
            It starts with Map<span className="text-accent">.</span>
          </h2>
        </div>

        <div
          className="bg-background p-8 md:p-10 mb-16 flex flex-col md:flex-row md:items-center gap-6"
          style={{ borderRadius: "40px" }}
        >
          <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center shrink-0">
            <MapIcon className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Map: the diagnostic
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Set scope, set end date. A clear picture of what is actually broken, what to fix first, and what it takes. This is how new clients start, because fixing the wrong thing is the most expensive mistake on the people side.
            </p>
          </div>
        </div>

        <p className="font-heading font-bold text-foreground text-lg mb-10">Then:</p>

        <div className="grid md:grid-cols-3 gap-12">
          {engagements.map((service) => (
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
