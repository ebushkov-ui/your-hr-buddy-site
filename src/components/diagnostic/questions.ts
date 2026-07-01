export type Choice = { label: string; value: 0 | 1 | 2 };
export type Question = {
  id: string;
  area: string;
  prompt: string;
  choices: Choice[];
};

export const QUESTIONS: Question[] = [
  {
    id: "staffing",
    area: "HR Staffing",
    prompt: "How is HR staffed right now?",
    choices: [
      { label: "We have a dedicated HR leader or team with real capacity.", value: 2 },
      { label: "We have someone handling HR, but it's not their only job.", value: 1 },
      { label: "HR tasks fall to the founder, COO, or office manager.", value: 0 },
    ],
  },
  {
    id: "people-data",
    area: "People Data",
    prompt: "How confident are you in your people data?",
    choices: [
      { label: "Our headcount, org structure, and comp data are accurate and in one place.", value: 2 },
      { label: "We have the data but it's spread across multiple systems and hard to pull.", value: 1 },
      { label: "We're not confident the numbers are right and we know it.", value: 0 },
    ],
  },
  {
    id: "compliance-audit",
    area: "Compliance",
    prompt: "When did you last audit your HR compliance posture?",
    choices: [
      { label: "Within the last 12 months.", value: 2 },
      { label: "We've never done a formal audit but we're probably fine.", value: 1 },
      { label: "We don't know what we don't know.", value: 0 },
    ],
  },
  {
    id: "international",
    area: "Global",
    prompt: "Are you hiring or managing employees outside the US?",
    choices: [
      { label: "No international hiring yet.", value: 2 },
      { label: "We use an EOR like Deel to handle it.", value: 1 },
      { label: "We have international employees and we've built or are building local entities.", value: 0 },
    ],
  },
  {
    id: "bus-factor",
    area: "Resilience",
    prompt: "What happens to your HR operations if the person running them leaves?",
    choices: [
      { label: "Someone else could pick it up. It's documented and not a one-person show.", value: 2 },
      { label: "It would be painful but we'd figure it out.", value: 1 },
      { label: "It would break. That person is the process.", value: 0 },
    ],
  },
  {
    id: "onboarding",
    area: "People Ops",
    prompt: "How does onboarding work at your company?",
    choices: [
      { label: "We have a documented, repeatable process that actually gets followed.", value: 2 },
      { label: "We have something, but it depends on who's doing the hiring.", value: 1 },
      { label: "Every new hire gets a different experience.", value: 0 },
    ],
  },
  {
    id: "manager-enablement",
    area: "Manager Enablement",
    prompt: "How are your managers handling day-to-day people decisions?",
    choices: [
      { label: "They have frameworks and know when to escalate.", value: 2 },
      { label: "They figure it out but we see inconsistency across the org.", value: 1 },
      { label: "They come to HR (or the founder) for everything.", value: 0 },
    ],
  },
  {
    id: "strategic-seat",
    area: "Strategic Role",
    prompt: "When does HR get involved in business decisions?",
    choices: [
      { label: "Before decisions are made — we're in the room.", value: 2 },
      { label: "After decisions are made, to figure out the people logistics.", value: 1 },
      { label: "HR isn't part of strategic conversations.", value: 0 },
    ],
  },
  {
    id: "state-of-hr",
    area: "Overall",
    prompt: "How would you describe the state of your HR right now?",
    choices: [
      { label: "Functional and scaling with the business.", value: 2 },
      { label: "Functional but held together with duct tape.", value: 1 },
      { label: "Behind where we need to be and we know it.", value: 0 },
    ],
  },
];

export type Tier = "green" | "yellow" | "red";

// Tier by counts of red/yellow/green answers, per user's scoring logic:
// - Multiple reds (2+) => red
// - Mostly green (majority green, no more than 1 red) => green
// - Otherwise => yellow (manageable gaps)
export function scoreToTier(_score: number, _max: number, answers?: Record<string, number>): Tier {
  if (!answers) return "yellow";
  const values = Object.values(answers);
  const reds = values.filter((v) => v === 0).length;
  const greens = values.filter((v) => v === 2).length;
  if (reds >= 2) return "red";
  if (greens >= Math.ceil(values.length * 0.6) && reds <= 1) return "green";
  return "yellow";
}

export const TIER_COPY: Record<Tier, { label: string; headline: string; body: string; color: string; ring: string; dot: string }> = {
  green: {
    label: "Green — Healthy",
    headline: "Your HR is healthy.",
    body: "You've built a solid foundation. The work now is staying ahead of the next scaling stage. If you want a second set of eyes on where things could break, let's talk.",
    color: "text-emerald-700",
    ring: "ring-emerald-500/40 bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
  yellow: {
    label: "Yellow — Manageable Gaps",
    headline: "You have manageable gaps.",
    body: "Some things are working, others aren't — and it's not always obvious which is which. A diagnostic would show you where to focus first so you're not spending time or money on the wrong fix.",
    color: "text-amber-700",
    ring: "ring-amber-500/40 bg-amber-500/10",
    dot: "bg-amber-500",
  },
  red: {
    label: "Red — Real Risk",
    headline: "There's real risk here.",
    body: "This is the reality for a lot of companies scaling faster than their people function. The risk compounds quietly until something breaks publicly. Let's get on a call.",
    color: "text-rose-700",
    ring: "ring-rose-500/40 bg-rose-500/10",
    dot: "bg-rose-500",
  },
};
