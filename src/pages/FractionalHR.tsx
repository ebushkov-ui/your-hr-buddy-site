import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngagementPricing from "@/components/EngagementPricing";

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
            Most companies know something's off: onboarding, compliance, payroll,
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

        <EngagementPricing buildFocus="HR ops, systems, onboarding programs, handbooks." />
      </main>
      <Footer />
    </div>
  );
};

export default FractionalHR;
