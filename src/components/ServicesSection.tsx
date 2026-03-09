import { Shield, Users, TrendingUp, FileCheck, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "HR Compliance",
    description: "Stay ahead of employment law. We audit, advise, and implement policies that protect your business.",
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Attract and hire the right people with proven recruitment strategies tailored to your industry.",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Build frameworks that motivate teams, drive accountability, and align with business goals.",
  },
  {
    icon: FileCheck,
    title: "Policy Development",
    description: "Comprehensive employee handbooks and workplace policies that are clear, fair, and legally sound.",
  },
  {
    icon: Briefcase,
    title: "HR Strategy",
    description: "From startups to scaling enterprises, we design people strategies that fuel sustainable growth.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Leadership workshops, team coaching, and development programs that elevate your workforce.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Services</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What we do<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end HR solutions designed to simplify people management and accelerate your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
