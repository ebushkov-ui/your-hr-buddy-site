import { CheckCircle } from "lucide-react";

const reasons = [
  "20+ years in People Operations and HR strategy",
  "Built global infrastructure across 7+ countries and 1,300+ employee orgs",
  "Deep stack experience: Workday, ADP, Rippling, ChartHop, BambooHR, Paylocity",
  "Eliminated 60% of manual workflows and delivered $200K+ in annual savings",
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
              People call me
              <br />
              the janitor<span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I come in at the moment Series A chaos needs to become Series B infrastructure. Companies scaling faster than their HR can hold. The people side starting to crack. I diagnose what is actually broken before anyone starts fixing it. Sometimes that is cleaning up people data and systems. Sometimes it is building the HR function from the ground up. Often it is standing up the international infrastructure nobody had time to create. I get embedded, I get it done, and I wear the janitor label proudly.
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
