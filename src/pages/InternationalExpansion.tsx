import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngagementPricing from "@/components/EngagementPricing";

const InternationalExpansion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            International
          </p>
          <h1 className="text-4xl font-bold mb-6">EOR & PEO off-ramps</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Companies use Deel or Remote because it's fast. Then they need real
            entities, local payroll, and benefits. By then leadership has
            already made promises that don't match the legal reality.{" "}
            <strong className="text-foreground">This is where I get called most often.</strong> I walk into
            the aftermath and get them out cleanly.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What this looks like</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Moving off Deel, Remote, Justworks, or TriNet onto Global Payroll or a real entity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>International expansion across multiple countries at once</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Entity setup, employment contracts, and statutory benefits</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Multi-country payroll and benefits localized to each market</span>
            </li>
          </ul>
        </div>

        <EngagementPricing buildFocus="entity transitions, payroll, benefits, and the compliance to back it." />
      </main>
      <Footer />
    </div>
  );
};

export default InternationalExpansion;
