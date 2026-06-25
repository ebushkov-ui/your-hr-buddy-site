import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InternationalExpansion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            The specialty almost no one offers
          </p>
          <h1 className="text-4xl font-bold mb-6">EOR & PEO off-ramps</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Companies use Deel or Remote because it's fast. Then they need real
            entities, local payroll, and benefits — and by then leadership has
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
                Embedded retainer. The heavy build — entity transitions, payroll,
                benefits, and the compliance to back it. 30-day minimum.
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

export default InternationalExpansion;
