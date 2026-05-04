---
name: weekly-hr-ideas
description: Pulls the last 7 days of HR newsletter emails from ebushkov@gmail.com, summarizes the strongest ideas, trends, and items worth noticing, and drafts a single weekly digest email to Elaine. Runs automatically every Friday morning and drops a draft in Gmail Drafts addressed to ebushkov@gmail.com. Use when Elaine says "what's new in HR this week," "weekly HR ideas," "summarize my newsletters," "HR digest," or any variation on rolling up her HR newsletter inbox.
---

# Skill: Weekly HR Ideas

Pull the last 7 days of HR/people-ops newsletter emails, surface the most useful ideas across them, and draft a single digest. When run automatically, drop the digest in Gmail Drafts addressed to ebushkov@gmail.com — Elaine reviews and sends to herself, or just reads from Drafts.

The goal is signal, not summary. Each idea should be something Elaine could repurpose — into a LinkedIn post, a client conversation, a positioning sharpening, or her own thinking.

---

## Step 1: Pull the last 7 days of HR newsletter email

Use the Gmail MCP tools on ebushkov@gmail.com. This account receives email for elaine@elaineadamson.com as well, so one search covers both.

Run a search that combines known HR newsletter senders, common newsletter labels, and HR/people-ops keywords. Use a Gmail query like:

```
newer_than:7d (
  from:(*@hrbrew.com OR *@hrdive.com OR *@charter.works OR *@joshbersin.com
    OR *@shrm.org OR *@lattice.com OR *@bamboohr.com OR *@gusto.com
    OR *@peoplemanagingpeople.com OR *@hrmorning.com OR *@workology.com
    OR recruitingbrainfood OR "Hung Lee" OR "Resources for Humans"
    OR newsletter OR digest OR weekly)
  OR subject:(newsletter OR weekly OR digest OR "this week in")
  OR label:newsletters
  OR category:promotions HR
)
```

If Elaine has a Gmail label like `Newsletters` or `HR`, prefer that — it's the cleanest signal. Confirm the label exists before relying on it.

Pull each thread's:
- Sender name + sender email
- Subject
- Date
- Full body text (plain text, not HTML markup)

Filter out anything that's clearly not HR/people-related (vendor sales pitches, product release notes, event invites with no editorial content). If you're unsure, keep it — it's better to include and rate it lower than to drop something useful.

---

## Step 2: Extract ideas, not summaries

Read each newsletter and pull out the substantive ideas. For each, capture:

- **The idea in one sentence** — what's actually being said, in plain language
- **Why it matters** — for an independent HR/People consultant working with Series A–C founders
- **Source** — newsletter name + article title or section
- **Tag** — one of: `trend`, `tactic`, `data`, `tool`, `provocation`, `client-relevant`

Skip:
- Generic "5 tips for..." filler
- Pure product marketing
- Recycled takes Elaine has already seen multiple times
- Anything that's just news without an angle

Keep:
- New frameworks or mental models
- Specific data points with sources
- Counterintuitive takes
- Anything that connects to active client work (Alumni Ventures, DeltaTerra) or her positioning
- Items she could turn into a LinkedIn post or use in a discovery call

---

## Step 3: Cluster and rank

Group ideas by theme. Likely clusters:
- AI in HR / people ops automation
- Comp & total rewards
- Org design & operating models
- Talent / hiring market
- HR tech & systems
- Leadership & manager effectiveness
- Compliance & regulation

Within each cluster, rank by usefulness to Elaine specifically. Top of the list = most worth her attention this week.

If a theme has only one weak item, fold it into a "Worth a glance" section rather than giving it its own header.

---

## Step 4: Draft the digest

Format as a single email. Keep it tight — she should be able to read the whole thing in 4 minutes.

**Subject:** HR Ideas — Week of [Day, Month DD, YYYY]

**Body structure:**

```
This week's signal across [N] newsletters.

---

**The big one**
[The single most useful idea this week — 2-3 sentences. What's the take, why it matters, where it came from.]

---

**[Theme 1]**
- [Idea in one sentence] — [why it matters in half a sentence]. _[Source]_
- [Idea] — [why]. _[Source]_

**[Theme 2]**
- [...]

---

**Worth a glance**
- [One-liner] — _[Source]_
- [One-liner] — _[Source]_

---

**Could become a post**
[1-2 ideas that would make strong LinkedIn posts in Elaine's voice. Note the angle, not the full draft.]

---

**Connects to active work**
[Anything that's directly relevant to Alumni Ventures, DeltaTerra, or current positioning work. Skip this section if nothing fits.]

---

Sources this week: [List newsletter names + count, e.g., "HR Brew (3), Charter (2), Josh Bersin (1), Hung Lee Brainfood (1)"]
```

---

## Step 5: Deliver

**When run interactively:** Show the digest in chat. Offer to (a) drop it in Gmail Drafts, (b) turn one of the "Could become a post" items into a linkedin-post draft, or (c) save the source list to `Knowledge Base/HR Ideas Log/YYYY-MM-DD.md` for future reference.

**When run automatically (scheduled Friday morning):** Create a Gmail draft addressed to ebushkov@gmail.com with the subject and body above. Do not send. Elaine reads from Drafts and decides what to do with each idea.

---

## Notes

- Date format always: Day, Month DD, YYYY (e.g., Friday, May 8, 2026)
- Default schedule: Fridays at 7:00am PT — set up via cron/scheduler outside the skill itself
- This is signal extraction, not a summary. If a newsletter has nothing worth pulling, don't force an entry from it
- The "Could become a post" section is the highest-leverage part for Elaine's practice — prioritize finding 1-2 strong angles each week
- Voice: direct, no corporate filler, no "in today's fast-paced world" phrasing
- If fewer than 3 newsletters arrived in the last 7 days, note that at the top and keep the digest short rather than padding
- Sender list above is a starting point — update as Elaine's subscriptions evolve. A Gmail label is more reliable long-term
