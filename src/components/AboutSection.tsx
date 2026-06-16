import { Check } from "lucide-react";

const reasons = [
  "20+ years in People Operations and HR strategy",
  "Built global infrastructure across 7+ countries and 1,300+ employee orgs",
  "Deep stack experience: Workday, ADP, Rippling, ChartHop, BambooHR, Paylocity",
  "Eliminated 60% of manual workflows and delivered $200K+ in annual savings",
  "Background at Apollo, DigitalOcean, Nest Labs, Google, Intapp, and more",
];

const stats = [
  { value: "20+", label: "Years Experience", blob: "40% 60% 50% 50% / 60% 40% 40% 60%", offset: "" },
  { value: "7+", label: "Countries Operated In", blob: "60% 40% 60% 40% / 40% 60% 40% 60%", offset: "mt-12" },
  { value: "1,300+", label: "Employees Supported", blob: "50% 50% 40% 60% / 40% 40% 60% 60%", offset: "-mt-12" },
  { value: "$200K+", label: "Annual Savings", blob: "30% 70% 50% 50% / 50% 50% 70% 30%", offset: "" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-3xl"
        style={{ borderRadius: "100% 0 0 100%" }}
      />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-6">
              About Elaine
            </span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
              People call me the{" "}
              <span className="italic font-light">Chief Problem Solver.</span>
            </h2>
            <p className="text-xl leading-relaxed opacity-80 mb-8">
              I come in at the moment Series A chaos needs to become Series B infrastructure. Companies scaling faster than their HR can hold. The people side starting to crack. I diagnose what is actually broken before anyone starts fixing it. Sometimes that is cleaning up people data and systems. Sometimes it is building the HR function from the ground up. Often it is standing up the international infrastructure nobody had time to create.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <span className="opacity-90">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`bg-background/5 border border-background/10 p-8 text-center flex flex-col justify-center aspect-square ${stat.offset}`}
                style={{ borderRadius: stat.blob }}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
