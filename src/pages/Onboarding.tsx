import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            new hires get oriented, integrated, and evaluated on a clear cadence
            — and managers actually know what to do.
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

        <div>
          <h2 className="text-2xl font-bold mb-6">How we work together</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg mb-2">
                Map <span className="text-xs font-normal text-muted-foreground">Fixed fee</span>
              </h3>
              <p className="text-muted-foreground mb-2">
                The diagnostic. Defined output, defined end. A clear picture of
                what is broken and what it takes to fix it.
              </p>
              <p className="font-bold text-primary">from $5,000</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg mb-2">
                Build <span className="text-xs font-normal text-muted-foreground">15+ hrs/wk</span>
              </h3>
              <p className="text-muted-foreground mb-2">
                Embedded retainer. Heavy build phase — HR ops, systems, onboarding
                programs, handbooks. 30-day minimum.
              </p>
              <p className="font-bold text-primary">from $5,000/mo</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">
                Sustain <span className="text-xs font-normal text-muted-foreground">On-call</span>
              </h3>
              <p className="text-muted-foreground mb-2">
                Post-build. Monthly check-in, on-call access, strategic input for
                teams that have the foundation but want a partner on the bench.
              </p>
              <p className="font-bold text-primary">from $1,500/mo</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            <strong>Note.</strong> Rate ranges reflect typical scope. Engagements almost
            always start with Map; final scope is set after the diagnostic.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
