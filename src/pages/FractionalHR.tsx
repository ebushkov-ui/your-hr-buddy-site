import OnePagerLayout from "@/components/OnePager/OnePagerLayout";

const FractionalHR = () => {
  const railIntro = (
    <>
      Fractional HR for companies that know something isn't working but aren't
      sure what to fix first.{" "}
      <strong>
        I diagnose what is broken before anyone starts fixing it
      </strong>{" "}
      — then build the people foundation that makes scaling sustainable.
    </>
  );

  return (
    <OnePagerLayout
      railTag="Build, reset or refresh your HR ops"
      focusLabel="Engagement Focus"
      focusValue="Fractional HR, startups to 500"
      railIntro={railIntro}
    >
      <div className="onepager-group">
        <div className="onepager-specialty">Start here</div>
        <h2>Not sure what you need?</h2>
        <p className="onepager-p">
          Most companies know something's off — onboarding, compliance, payroll,
          the benefits renewal, the HRIS nobody set up right. They just can't
          name what to fix first. That's what the diagnostic is for:{" "}
          <strong>
            we find it, prioritize it, and build from there.
          </strong>
        </p>
      </div>

      <div className="onepager-look">
        <div className="onepager-kick">What I can help with</div>
        <ul className="onepager-check">
          <li>HR function build or rebuild from the ground up</li>
          <li>HRIS selection, implementation, and migration</li>
          <li>Payroll, benefits, and multi-state compliance</li>
          <li>Onboarding and the full employee lifecycle</li>
          <li>People data cleanup and reporting</li>
          <li>International expansion and EOR / PEO off-ramps</li>
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
            Embedded retainer. Heavy build phase — HR ops, systems, onboarding
            programs, handbooks. 30-day minimum.
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

export default FractionalHR;
