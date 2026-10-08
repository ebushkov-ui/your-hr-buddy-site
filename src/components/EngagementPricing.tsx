interface Props {
  /** Page-specific examples of what the Build phase covers. */
  buildFocus: string;
}

const EngagementPricing = ({ buildFocus }: Props) => {
  const tiers = [
    {
      name: "Map",
      tag: "Fixed fee",
      body: "The diagnostic. Set scope, set end date. A clear picture of what is broken and what it takes to fix it. This is how new clients start.",
      price: "$5,000 to $7,500",
    },
    {
      name: "Build",
      tag: "15+ hrs/wk",
      body: `The core engagement. Flat monthly fee for at least 15 hours a week, embedded with your team: ${buildFocus}`,
      price: "$5,000 to $15,000/mo",
    },
    {
      name: "Sustain",
      tag: "Monthly",
      body: "The lighter relationship after a Build. Flat monthly fee for check-ins, on-call access, and a second opinion before the big people decisions.",
      price: "$1,500 to $3,000/mo",
    },
    {
      name: "Interim HR",
      tag: "Hourly",
      body: "Time-boxed coverage while you hire a permanent HR leader. Usually 8 to 10 hours a week for 4 to 6 weeks, billed on actual hours.",
      price: "$185 to $225/hr",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">How we work together</h2>
      <div className="space-y-6">
        {tiers.map((tier, i) => (
          <div key={tier.name} className={i < tiers.length - 1 ? "border-b pb-6" : ""}>
            <h3 className="font-bold text-lg mb-2">
              {tier.name}{" "}
              <span className="text-xs font-normal text-muted-foreground">{tier.tag}</span>
            </h3>
            <p className="text-muted-foreground mb-2">{tier.body}</p>
            <p className="font-bold text-primary">{tier.price}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-8">
        <strong>Note.</strong> Ranges reflect typical scope. Most engagements start with Map;
        final scope is set after the diagnostic.
      </p>
    </div>
  );
};

export default EngagementPricing;
