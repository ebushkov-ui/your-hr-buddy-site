// Renders each route in src/seo.ts to static HTML so crawlers that don't run
// JavaScript see the page content. Runs after the client and SSR builds.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, PAGES, SITE_URL } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const META_BLOCK = /<!-- page-meta:[\s\S]*?<!-- \/page-meta -->/;
if (!META_BLOCK.test(template)) throw new Error("index.html is missing the page-meta block");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const headFor = ({ path: route, title, description, noindex }) => {
  const url = SITE_URL + route;
  return [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
  ].join("\n    ");
};

// Fallback for /admin, 404s and anything not prerendered: empty shell, kept out of search.
const home = PAGES.find((p) => p.path === "/");
fs.writeFileSync(
  path.join(dist, "spa.html"),
  template.replace(META_BLOCK, headFor({ ...home, path: "/", noindex: true })),
);

for (const page of PAGES) {
  const html = template
    .replace(META_BLOCK, headFor(page))
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${page.path} -> dist/${file}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
