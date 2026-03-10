import { CheckCircle } from "lucide-react";

const reasons = [
  "20+ years in People Operations & HR strategy",
  "Global experience across 7+ countries and 1,300+ employee orgs",
  "Expert in Workday, ADP, BambooHR, and enterprise HR tech stacks",
  "Proven results: 40–60% workflow reduction through automation",
  "Background at Apollo.io, DigitalOcean, Nest Labs (Google), and more",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "7+", label: "Countries Operated In" },
                { value: "1,300+", label: "Employees Supported" },
                { value: "$200K+", label: "Annual Cost Savings Delivered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary rounded-lg p-8 text-center border border-border"
                >
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">About</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Turning complexity into
              <br />
              structured operations<span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I partner with high-growth and multi-entity organizations to architect global HR infrastructure — building scalable systems that reduce risk, strengthen governance, and enable confident decision-making at the executive level.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
