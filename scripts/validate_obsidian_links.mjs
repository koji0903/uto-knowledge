import fs from "node:fs";
import path from "node:path";

const vaultRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ignoredDirs = new Set([".git", ".obsidian", ".claude", "tmp", "node_modules"]);

// Files containing intentional placeholder/example wikilinks (setup guides, code-symbol references)
const ignoredSources = new Set([
  ".obsidian_setup_guide.md",
  "projects/utomachi_PF/auth-identity.md",
  "projects/utomachi_PF/data-management.md",
  "projects/utomachi_PF/decision-support.md",
  "projects/utomachi_PF/implementation-guide.md",
  "projects/utomachi_PF/operations-management.md",
  "projects/utomachi_PF/overview.md",
  // Nori docs use [[Section]] as anchor refs (DataSources/Operations/Schema/Troubleshooting/Glossary/Accomplishments)
  "02_Agriculture/nori_farming_dss/Architecture.md",
  "02_Agriculture/nori_farming_dss/DataIntegration.md",
  "02_Agriculture/nori_farming_dss/Overview.md",
  "02_Agriculture/nori_farming_dss/PredictiveModels.md",
  "02_Agriculture/nori_farming_dss/index.md",
]);

function listMarkdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignoredDirs.has(entry.name)) return [];

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMarkdownFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith(".md") && !entry.name.includes("_template")) return [fullPath];
    return [];
  });
}

function normalizeRelative(file) {
  // NFC-normalize so macOS APFS readdir (NFD) matches git-stored (NFC) link targets
  return path.relative(vaultRoot, file).replaceAll(path.sep, "/").normalize("NFC");
}

function stripTarget(target) {
  return target
    .split("#")[0]
    .trim()
    .replace(/\\$/, "")       // strip trailing backslash from escaped pipe (table cells: [[target\|label]])
    .replace(/^.\//, "")
    .replace(/\.md$/, "")
    .replace(/\/$/, "/index")
    .normalize("NFC");        // NFC-normalize so links match NFC filenames stored in git
}

const files = listMarkdownFiles(vaultRoot);
const relativeFiles = new Set();
const byNoExtension = new Set();
const byBaseName = new Set();

for (const file of files) {
  const relative = normalizeRelative(file);
  const noExtension = relative.replace(/\.md$/, "");
  relativeFiles.add(relative);
  byNoExtension.add(noExtension);
  byBaseName.add(path.posix.basename(noExtension));
}

const broken = [];
let linkCount = 0;

for (const file of files) {
  const relative = normalizeRelative(file);
  if (ignoredSources.has(relative)) continue;
  const sourceDir = path.posix.dirname(relative);
  const markdown = fs.readFileSync(file, "utf8");
  const linkPattern = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  let match;

  while ((match = linkPattern.exec(markdown))) {
    linkCount += 1;
    const target = stripTarget(match[1]);
    if (!target) continue;

    const candidates = [
      target,
      target.replace(/^\//, ""),
      path.posix.normalize(path.posix.join(sourceDir, target)),
      path.posix.basename(target),
    ];

    const exists = candidates.some((candidate) => (
      byNoExtension.has(candidate)
      || byBaseName.has(candidate)
      || relativeFiles.has(`${candidate}.md`)
      || relativeFiles.has(`${candidate}/index.md`)
    ));

    if (!exists) {
      broken.push({ source: relative, target: match[1] });
    }
  }
}

if (broken.length > 0) {
  console.error(JSON.stringify({
    link_count: linkCount,
    broken_count: broken.length,
    broken,
  }, null, 2));
  process.exit(1);
}

console.log(`obsidian link validation passed: ${linkCount} links`);
