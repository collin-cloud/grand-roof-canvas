import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://zenithroofingsolutions.com";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod: string;
}

const staticPages: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { loc: "/services", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/process", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/reviews", changefreq: "weekly", priority: "0.8", lastmod: today },
  { loc: "/faq", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/contact", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/roofing-resources", changefreq: "weekly", priority: "0.8", lastmod: today },
];

const servicePages = [
  "roof-replacement",
  "tile-lift-and-relay",
  "roof-repairs",
  "inspections-and-certifications",
  "insurance-claim-assistance",
  "roof-maintenance",
  "storm-damage-response",
  "attic-ventilation-upgrades",
  "skylight-installation-and-repair",
].map((s) => ({
  loc: `/services/${s}`,
  changefreq: "monthly",
  priority: "0.8",
  lastmod: today,
}));

const cityPages = [
  "las-vegas",
  "henderson",
  "summerlin",
  "north-las-vegas",
  "spring-valley",
  "green-valley",
  "enterprise",
].map((c) => ({
  loc: `/roofing-contractor-${c}`,
  changefreq: "monthly",
  priority: "0.8",
  lastmod: today,
}));

const serviceLocationPages = [
  "roof-replacement-las-vegas",
  "roof-repair-las-vegas",
  "tile-roof-repair-las-vegas",
  "tile-roof-lift-and-relay-las-vegas",
  "roof-inspection-las-vegas",
  "insurance-roof-claim-las-vegas",
  "tile-roof-underlayment-replacement-las-vegas",
].map((s) => ({
  loc: `/${s}`,
  changefreq: "monthly",
  priority: "0.8",
  lastmod: today,
}));

// Dynamically read blog post slugs from the data file
function getBlogSlugs(): string[] {
  const dataPath = path.resolve(__dirname, "../src/data/blogPosts.ts");
  const content = fs.readFileSync(dataPath, "utf-8");
  const slugMatches = [...content.matchAll(/slug:\s*"([^"]+)"/g)];
  return slugMatches.map((m) => m[1]);
}

const blogPages = getBlogSlugs().map((slug) => ({
  loc: `/roofing-resources/${slug}`,
  changefreq: "monthly",
  priority: "0.6",
  lastmod: today,
}));

const allEntries = [
  ...staticPages,
  ...servicePages,
  ...cityPages,
  ...serviceLocationPages,
  ...blogPages,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${DOMAIN}${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`Sitemap generated with ${allEntries.length} URLs`);
