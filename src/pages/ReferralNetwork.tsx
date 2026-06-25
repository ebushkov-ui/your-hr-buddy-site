import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReferralNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            What I can do
          </p>
          <h1 className="text-4xl font-bold mb-8">The full generalist scope</h1>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                01 · Function
              </p>
              <h3 className="text-xl font-bold mb-2">HR Strategy & Build</h3>
              <p className="text-muted-foreground">
                Function build or rebuild, people diagnostics, org design and
                leveling, handbooks and manager playbooks.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                02 · Systems
              </p>
              <h3 className="text-xl font-bold mb-2">Systems & Data</h3>
              <p className="text-muted-foreground">
                HRIS selection, implementation, and migration; data cleanup;
                dashboards and source-of-truth design.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                03 · Compliance
              </p>
              <h3 className="text-xl font-bold mb-2">Payroll & Benefits</h3>
              <p className="text-muted-foreground">
                US multi-state payroll, benefits and 401(k), FMLA/ACA/wage-and-hour,
                I-9 audits and leave.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                04 · Lifecycle
              </p>
              <h3 className="text-xl font-bold mb-2">Employee Lifecycle</h3>
              <p className="text-muted-foreground">
                Onboarding that scales past 50, 100, 200; manager enablement;
                employee relations; engagement and exit data.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                05 · Global
              </p>
              <h3 className="text-xl font-bold mb-2">Global & Scale</h3>
              <p className="text-muted-foreground">
                International expansion, EOR/PEO off-ramps, entity setup,
                multi-country payroll and benefits.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">What to send my way</h2>
          <p className="text-muted-foreground mb-8">
            The buyer is usually a founder, COO, CHRO, or CFO who knows something
            is broken but not what. Send someone my way when you hear:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-2">
                Needs off a PEO or EOR.
              </p>
              <p className="text-sm text-muted-foreground">
                Started on Deel or Justworks for speed; now needs real entities and local payroll.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">
                A Series A or B with no HR foundation.
              </p>
              <p className="text-sm text-muted-foreground">
                Headcount climbing, no systems, no handbook, no frameworks.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">
                Drowning in messy people data.
              </p>
              <p className="text-sm text-muted-foreground">
                Numbers in too many places, none reliable, reporting that takes days.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">
                An international hiring push.
              </p>
              <p className="text-sm text-muted-foreground">
                Offers going out in new countries before anyone checked the legal reality.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">
                An HRIS migration that broke.
              </p>
              <p className="text-sm text-muted-foreground">
                A Rippling, Workday, or ChartHop rollout that stalled or never finished.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">
                Needs a senior People leader, not a hire.
              </p>
              <p className="text-sm text-muted-foreground">
                Someone to diagnose, build, and hand back something that runs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReferralNetwork;
