import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FractionalHR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Start here
          </p>
          <h1 className="text-4xl font-bold mb-6">Not sure what you need?</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Most companies know something's off — onboarding, compliance, payroll,
            the benefits renewal, the HRIS nobody set up right. They just can't
            name what to fix first. That's what the diagnostic is for:{" "}
            <strong className="text-foreground">
              we find it, prioritize it, and build from there.
            </strong>
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What I can help with</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>HR function build or rebuild from the ground up</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>HRIS selection, implementation, and migration</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Payroll, benefits, and multi-state compliance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Onboarding and the full employee lifecycle</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>People data cleanup and reporting</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>International expansion and EOR / PEO off-ramps</span>
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

export default FractionalHR;
