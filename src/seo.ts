// Per-route head tags. scripts/prerender.mjs writes these into each route's
// static HTML; routes not listed here fall back to the noindexed SPA shell.
export const SITE_URL = "https://www.elaineadamson.com";

const DEFAULT_TITLE = "Elaine Adamson | Fractional HR Consultant for Scaling Startups";
const DEFAULT_DESCRIPTION =
  "Fractional HR consultant for Series A+ startups. I find what's broken, fix it, and move teams off EORs. 20 years, startup to Google.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  // Kept reachable for direct links, hidden from search.
  noindex?: boolean;
};

export const PAGES: PageMeta[] = [
  { path: "/", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  {
    path: "/diagnostic",
    title: "HR Operations Health Check | Elaine Adamson",
    description:
      "Nine questions, an honest Green / Yellow / Red read on your HR foundation. The same diagnostic Elaine Adamson starts client engagements with.",
  },
  { path: "/fractional-hr", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, noindex: true },
  { path: "/international-expansion", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, noindex: true },
  { path: "/onboarding", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, noindex: true },
  { path: "/referral-network", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, noindex: true },
];

export const pageMeta = (path: string) => PAGES.find((p) => p.path === path);
