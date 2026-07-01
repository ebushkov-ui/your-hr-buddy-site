export type Choice = { label: string; value: 0 | 1 | 2 };
export type Question = {
  id: string;
  area: "Compliance" | "HR Tech" | "People Ops" | "Org Design";
  prompt: string;
  choices: Choice[];
};

export const QUESTIONS: Question[] = [
  {
    id: "compliance",
    area: "Compliance",
    prompt:
      "How confident are you that you're compliant across every state (and country) where you have employees?",
    choices: [
      { label: "Fully mapped — registrations, handbooks, and postings are current everywhere.", value: 2 },
      { label: "Mostly — I know we have gaps but nothing urgent I'm aware of.", value: 1 },
      { label: "Honestly, not confident. We've been moving fast and I'm not sure what we've missed.", value: 0 },
    ],
  },
  {
    id: "handbook",
    area: "Compliance",
    prompt: "When was your employee handbook last reviewed by someone who actually knows HR law?",
    choices: [
      { label: "In the last 12 months.", value: 2 },
      { label: "1–3 years ago, or we have one but nobody has looked at it lately.", value: 1 },
      { label: "We don't have one, or it's a template someone downloaded.", value: 0 },
    ],
  },
  {
    id: "hris",
    area: "HR Tech",
    prompt: "How would you describe your HRIS, payroll, and benefits systems?",
    choices: [
      { label: "One source of truth, integrated, and data we actually trust.", value: 2 },
      { label: "Multiple systems, some duplication, data cleanup happens manually.", value: 1 },
      { label: "Spreadsheets, EOR/PEO black box, or systems no one owns.", value: 0 },
    ],
  },
  {
    id: "onboarding",
    area: "People Ops",
    prompt: "What does onboarding look like for a new hire on day one?",
    choices: [
      { label: "Documented, repeatable, and the same experience every time.", value: 2 },
      { label: "There's a checklist, but it depends who's running it.", value: 1 },
      { label: "It's ad-hoc — the manager figures it out.", value: 0 },
    ],
  },
  {
    id: "employee-relations",
    area: "People Ops",
    prompt: "When a manager comes to you with a performance or people issue, what happens?",
    choices: [
      { label: "There's a clear process and someone qualified handles it.", value: 2 },
      { label: "We figure it out case by case — sometimes it goes well, sometimes not.", value: 1 },
      { label: "It usually escalates or gets avoided until it's a real problem.", value: 0 },
    ],
  },
  {
    id: "org-design",
    area: "Org Design",
    prompt: "Do you have a defined leveling framework and comp bands?",
    choices: [
      { label: "Yes — levels, bands, and a promotion process everyone understands.", value: 2 },
      { label: "Partially — we have something but it's inconsistent across teams.", value: 1 },
      { label: "No — comp and titles are negotiated one-off.", value: 0 },
    ],
  },
  {
    id: "ownership",
    area: "Org Design",
    prompt: "Who owns HR at your company today?",
    choices: [
      { label: "A dedicated HR/People leader with the right experience for our stage.", value: 2 },
      { label: "A generalist, office manager, or founder wearing the HR hat part-time.", value: 1 },
      { label: "No one really — it's whoever has time when something breaks.", value: 0 },
    ],
  },
];

export const AREAS = ["Compliance", "HR Tech", "People Ops", "Org Design"] as const;

export type Tier = "green" | "yellow" | "red";

export function scoreToTier(score: number, max: number): Tier {
  const pct = score / max;
  if (pct >= 0.75) return "green";
  if (pct >= 0.4) return "yellow";
  return "red";
}

export const TIER_COPY: Record<Tier, { label: string; headline: string; body: string; color: string; ring: string; dot: string }> = {
  green: {
    label: "Green — Solid Foundation",
    headline: "Your HR operations are in good shape.",
    body: "You've got the fundamentals right. The work now is optimization — sharpening what's already working and staying ahead of the next scaling stage. If a specific project or advisory conversation would help, let's talk.",
    color: "text-emerald-700",
    ring: "ring-emerald-500/40 bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
  yellow: {
    label: "Yellow — Cracks Forming",
    headline: "You're in the messy middle.",
    body: "Some pieces are working, others are held together with duct tape. This is exactly the stage where the wrong fix is more expensive than the problem. A focused diagnostic will tell you where to spend the next dollar — and where to leave things alone.",
    color: "text-amber-700",
    ring: "ring-amber-500/40 bg-amber-500/10",
    dot: "bg-amber-500",
  },
  red: {
    label: "Red — Urgent",
    headline: "Your HR infrastructure is behind your growth.",
    body: "This isn't a judgment — it's the reality for most companies scaling faster than their people function. The risk (compliance, retention, culture) compounds quietly until something breaks publicly. Let's get on a call and figure out the first three things to fix.",
    color: "text-rose-700",
    ring: "ring-rose-500/40 bg-rose-500/10",
    dot: "bg-rose-500",
  },
};
