import OnePagerLayout from "@/components/OnePager/OnePagerLayout";

const InternationalExpansion = () => {
  const railIntro = (
    <>
      Fractional HR for scaling companies that have outgrown what got them
      here.{" "}
      <strong>
        I diagnose what is broken before anyone starts fixing it
      </strong>{" "}
      — then build the foundation that lets them keep growing across borders.
    </>
  );

  return (
    <OnePagerLayout
      railTag="Build, reset or refresh your HR ops"
      focusLabel="Engagement Focus"
      focusValue="Series A to 500 employees"
      railIntro={railIntro}
    >
      <div className="onepager-group">
        <div className="onepager-specialty">The specialty almost no one offers</div>
        <h2>EOR & PEO off-ramps</h2>
        <p className="onepager-p">
          Companies use Deel or Remote because it's fast. Then they need real
          entities, local payroll, and benefits — and by then leadership has
          already made promises that don't match the legal reality.{" "}
          <strong>This is where I get called most often.</strong> I walk into
          the aftermath and get them out cleanly.
        </p>
      </div>

      <div className="onepager-look">
        <div className="onepager-kick">What this looks like</div>
        <ul className="onepager-check">
          <li>
            Moving off Deel, Remote, Justworks, or TriNet onto Global Payroll
            or a real entity
          </li>
          <li>International expansion across multiple countries at once</li>
          <li>Entity setup, employment contracts, and statutory benefits</li>
          <li>Multi-country payroll and benefits localized to each market</li>
        </ul>
      </div>

      <div className="onepager-eng">
        <div className="onepager-kick">How we work together — three tiers, not hourly</div>
        <div className="onepager-erow">
          <div className="onepager-tn">
            Map
            <span className="onepager-fmt">Fixed fee</span>
          </div>
          <div className="onepager-d">
            The diagnostic. Defined output, defined end. A clear picture of
            what is broken and what it takes to fix it.
          </div>
          <div className="onepager-inv">from $5,000</div>
        </div>
        <div className="onepager-erow">
          <div className="onepager-tn">
            Build
            <span className="onepager-fmt">15+ hrs/wk</span>
          </div>
          <div className="onepager-d">
            Embedded retainer. The heavy build — entity transitions, payroll,
            benefits, and the compliance to back it. 30-day minimum.
          </div>
          <div className="onepager-inv">from $5,000/mo</div>
        </div>
        <div className="onepager-erow">
          <div className="onepager-tn">
            Sustain
            <span className="onepager-fmt">On-call</span>
          </div>
          <div className="onepager-d">
            Post-build. Monthly check-in, on-call access, strategic input for
            teams that have the foundation but want a partner on the bench.
          </div>
          <div className="onepager-inv">from $1,500/mo</div>
        </div>
        <p className="onepager-note">
          <b>Note.</b> Rate ranges reflect typical scope. Engagements almost
          always start with Map; final scope is set after the diagnostic.
        </p>
      </div>
    </OnePagerLayout>
  );
};

export default InternationalExpansion;
