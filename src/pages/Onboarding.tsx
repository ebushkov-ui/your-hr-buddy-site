import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngagementPricing from "@/components/EngagementPricing";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Onboarding
          </p>
          <h1 className="text-4xl font-bold mb-6">Onboarding that actually works</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Most onboarding is a checklist and a stack of PDFs. Day one feels
            like paperwork. Day 90 feels like a guess. I build it end-to-end so
            new hires get oriented, integrated, and evaluated on a clear cadence,
            and managers actually know what to do.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Built at Nest, Apollo, and Alumni Ventures.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What this looks like</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Pre-boarding materials and welcome experience before day one</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Structured day-one and first-week onboarding sessions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>30-60-90 day milestones with manager evaluations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Documentation and policy frameworks that scale with the team</span>
            </li>
          </ul>
        </div>

        <EngagementPricing buildFocus="HR ops, systems, onboarding programs, handbooks." />
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
