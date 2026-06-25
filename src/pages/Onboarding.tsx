import OnePagerLayout from "@/components/OnePager/OnePagerLayout";

const Onboarding = () => {
  const railIntro = (
    <>
      Fractional HR for companies that need a real people foundation before the
      next growth phase.{" "}
      <strong>
        I diagnose what is broken before anyone starts fixing it
      </strong>{" "}
      — then build the systems and onboarding that make scaling sustainable.
    </>
  );

  return (
    <OnePagerLayout
      railTag="Build, reset or refresh your HR ops"
      focusLabel="Engagement Focus"
      focusValue="Scaling US teams, Series A through 200"
      railIntro={railIntro}
    >
      <div className="onepager-group">
        <div className="onepager-specialty">Onboarding</div>
        <h2>Onboarding that actually works</h2>
        <p className="onepager-p">
          Most onboarding is a checklist and a stack of PDFs. Day one feels
          like paperwork. Day 90 feels like a guess. I build it end-to-end so
          new hires get oriented, integrated, and evaluated on a clear cadence
          — and managers actually know what to do.
        </p>
        <div className="onepager-built">Built at Nest, Apollo, and Alumni Ventures.</div>
      </div>

      <div className="onepager-look">
        <div className="onepager-kick">What this looks like</div>
        <ul className="onepager-check">
          <li>Pre-boarding materials and welcome experience before day one</li>
          <li>Structured day-one and first-week onboarding sessions</li>
          <li>30-60-90 day milestones with manager evaluations</li>
          <li>Documentation and policy frameworks that scale with the team</li>
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

export default Onboarding;
