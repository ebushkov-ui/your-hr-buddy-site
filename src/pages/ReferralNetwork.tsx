import OnePagerLayout from "@/components/OnePager/OnePagerLayout";

const ReferralNetwork = () => {
  const railIntro = (
    <>
      Fractional HR for scaling companies that have outgrown what got them
      here. I cover the full generalist scope, lead the diagnostic, do the
      build, and hand back a function that runs without me.{" "}
      <strong>
        When something on the people side lands on your desk, you know what to
        send my way.
      </strong>
    </>
  );

  return (
    <OnePagerLayout
      railTag="Build, reset or refresh your HR ops"
      focusLabel="For My Referral Network"
      focusValue="Series A to 500 employees"
      railIntro={railIntro}
    >
      <div className="onepager-group">
        <div className="onepager-specialty">What I can do</div>
        <h2>The full generalist scope</h2>
      </div>

      <div className="onepager-caps">
        <div className="onepager-cap">
          <div className="onepager-cn">
            <span className="onepager-ci">01 · Function</span>
            HR Strategy & Build
          </div>
          <div className="onepager-cd">
            Function build or rebuild, people diagnostics, org design and
            leveling, handbooks and manager playbooks.
          </div>
        </div>
        <div className="onepager-cap">
          <div className="onepager-cn">
            <span className="onepager-ci">02 · Systems</span>
            Systems & Data
          </div>
          <div className="onepager-cd">
            HRIS selection, implementation, and migration; data cleanup;
            dashboards and source-of-truth design.
          </div>
        </div>
        <div className="onepager-cap">
          <div className="onepager-cn">
            <span className="onepager-ci">03 · Compliance</span>
            Payroll & Benefits
          </div>
          <div className="onepager-cd">
            US multi-state payroll, benefits and 401(k), FMLA/ACA/wage-and-hour,
            I-9 audits and leave.
          </div>
        </div>
        <div className="onepager-cap">
          <div className="onepager-cn">
            <span className="onepager-ci">04 · Lifecycle</span>
            Employee Lifecycle
          </div>
          <div className="onepager-cd">
            Onboarding that scales past 50, 100, 200; manager enablement;
            employee relations; engagement and exit data.
          </div>
        </div>
        <div className="onepager-cap">
          <div className="onepager-cn">
            <span className="onepager-ci">05 · Global</span>
            Global & Scale
          </div>
          <div className="onepager-cd">
            International expansion, EOR/PEO off-ramps, entity setup,
            multi-country payroll and benefits.
          </div>
        </div>
      </div>

      <div className="onepager-triggers">
        <div className="onepager-kick">What to send my way</div>
        <p className="onepager-lead">
          The buyer is usually a founder, COO, CHRO, or CFO who knows something
          is broken but not what. Send someone my way when you hear:
        </p>
        <div className="onepager-tgrid">
          <div className="onepager-tg">
            <b>Needs off a PEO or EOR.</b> Started on Deel or Justworks for
            speed; now needs real entities and local payroll.
          </div>
          <div className="onepager-tg">
            <b>A Series A or B with no HR foundation.</b> Headcount climbing,
            no systems, no handbook, no frameworks.
          </div>
          <div className="onepager-tg">
            <b>Drowning in messy people data.</b> Numbers in too many places,
            none reliable, reporting that takes days.
          </div>
          <div className="onepager-tg">
            <b>An international hiring push.</b> Offers going out in new
            countries before anyone checked the legal reality.
          </div>
          <div className="onepager-tg">
            <b>An HRIS migration that broke.</b> A Rippling, Workday, or
            ChartHop rollout that stalled or never finished.
          </div>
          <div className="onepager-tg">
            <b>Needs a senior People leader, not a hire.</b> Someone to
            diagnose, build, and hand back something that runs.
          </div>
        </div>
      </div>
    </OnePagerLayout>
  );
};

export default ReferralNetwork;
