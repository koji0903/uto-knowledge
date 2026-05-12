import fs from "node:fs";
import path from "node:path";

const vaultRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ignoredDirs = new Set([".git", ".obsidian", ".claude", "tmp", "node_modules"]);

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
  return path.relative(vaultRoot, file).replaceAll(path.sep, "/");
}

function stripTarget(target) {
  return target
    .split("#")[0]
    .trim()
    .replace(/^.\//, "")
    .replace(/\.md$/, "")
    .replace(/\/$/, "/index");
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
