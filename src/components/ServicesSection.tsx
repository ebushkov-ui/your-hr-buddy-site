import { Globe, Shield, Cpu, BarChart3, Users, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Global HR Infrastructure",
    description: "Build compliant, scalable People Operations across multiple entities and international markets.",
  },
  {
    icon: Shield,
    title: "Governance & Compliance",
    description: "Employment law audits, policy development, and risk mitigation to protect your business globally.",
  },
  {
    icon: Cpu,
    title: "HR Tech & Automation",
    description: "Enterprise HRIS strategy, system integrations, and AI-enabled service models that eliminate manual workflows.",
  },
  {
    icon: BarChart3,
    title: "People Analytics & Reporting",
    description: "Executive dashboards, workforce planning insights, and data governance that drives confident decision-making.",
  },
  {
    icon: Users,
    title: "Organizational Design",
    description: "Restructuring advisory, change management, and operating model design aligned to business growth.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "End-to-end process reengineering — onboarding, offboarding, payroll, and service delivery optimization.",
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
            Strategic People Operations consulting for organizations navigating growth, complexity, and global scale.
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
