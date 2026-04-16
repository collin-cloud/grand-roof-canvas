/**
 * Pre-render script: runs after `vite build` (client) and `vite build --ssr`.
 * For every public route, executes the SSR entry, injects the resulting HTML
 * + Helmet head tags into dist/index.html, and writes <route>/index.html.
 *
 * Result: every URL on the production site returns fully-rendered HTML on the
 * initial response — no JS execution required for crawlers to see content.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// --- 1. Enumerate routes ----------------------------------------------------
const staticRoutes = [
  "/",
  "/services",
  "/about",
  "/process",
  "/reviews",
  "/faq",
  "/contact",
  "/roofing-resources",
  // Location pages
  "/roofing-contractor-las-vegas",
  "/roofing-contractor-henderson",
  "/roofing-contractor-summerlin",
  "/roofing-contractor-north-las-vegas",
  "/roofing-contractor-spring-valley",
  "/roofing-contractor-green-valley",
  "/roofing-contractor-enterprise",
  // Service+Location pages
  "/roof-replacement-las-vegas",
  "/roof-repair-las-vegas",
  "/tile-roof-repair-las-vegas",
  "/tile-roof-lift-and-relay-las-vegas",
  "/roof-inspection-las-vegas",
  "/insurance-roof-claim-las-vegas",
  "/tile-roof-underlayment-replacement-las-vegas",
  // Legacy LocalSEO pages
  "/roofing-company-las-vegas",
  "/roofing-company-henderson",
  "/roofing-company-summerlin",
  "/roofing-company-north-las-vegas",
  "/roofing-company-spring-valley",
  "/roofing-company-enterprise",
];

const serviceSlugs = [
  "roof-replacement",
  "new-roof-installation",
  "tile-lift-and-relay",
  "roof-repairs",
  "inspections-and-certifications",
  "insurance-claim-assistance",
  "roof-maintenance",
  "storm-damage-response",
  "attic-ventilation-upgrades",
  "skylight-installation-and-repair",
];

function readBlogSlugs(): string[] {
  const src = fs.readFileSync(path.join(root, "src/data/blogPosts.ts"), "utf-8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

const allRoutes = [
  ...staticRoutes,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...readBlogSlugs().map((s) => `/roofing-resources/${s}`),
];

// --- 2. Load template + SSR bundle -----------------------------------------
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const ssrEntry = path.join(ssrDir, "entry-server.js");
if (!fs.existsSync(ssrEntry)) {
  console.error(`[prerender] SSR bundle not found at ${ssrEntry}`);
  process.exit(1);
}

const { render } = (await import(pathToFileURL(ssrEntry).href)) as {
  render: (url: string) => {
    html: string;
    helmet: {
      title: string;
      meta: string;
      link: string;
      script: string;
    };
  };
};

// --- 3. Render every route --------------------------------------------------
let success = 0;
const failures: { route: string; error: string }[] = [];

for (const route of allRoutes) {
  try {
    const { html, helmet } = render(route);

    const headTags = [helmet.title, helmet.meta, helmet.link, helmet.script]
      .filter(Boolean)
      .join("\n    ");

    const finalHtml = template
      .replace("<!--app-html-->", html)
      .replace("<!--app-head-->", headTags);

    const outDir = route === "/" ? distDir : path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), finalHtml);
    success++;
  } catch (err) {
    failures.push({ route, error: err instanceof Error ? err.message : String(err) });
  }
}

console.log(`[prerender] ✓ Rendered ${success}/${allRoutes.length} routes`);
if (failures.length) {
  console.error(`[prerender] ✗ ${failures.length} failures:`);
  for (const f of failures) console.error(`  ${f.route}: ${f.error}`);
  process.exit(1);
}

// --- 4. Cleanup SSR bundle (not needed in production) ----------------------
fs.rmSync(ssrDir, { recursive: true, force: true });
