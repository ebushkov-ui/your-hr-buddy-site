import { CheckCircle } from "lucide-react";

const reasons = [
  "20+ years of HR consulting experience",
  "Trusted by 100+ businesses across industries",
  "CIPD-qualified and employment law specialists",
  "Tailored solutions, not one-size-fits-all",
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
                { value: "100+", label: "Clients Served" },
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
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
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Why Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your people are your
              <br />
              greatest asset<span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Elaine Adamson Consulting, we partner with businesses to build HR foundations that support growth, reduce risk, and create workplaces where people thrive.
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
