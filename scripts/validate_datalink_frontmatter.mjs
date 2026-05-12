import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const dataLinkRoot = path.join(vaultRoot, "04_DataLink");

const folderRules = {
  decisions: { type: "decision", idPrefix: "dec_" },
  producers: { type: "producer", idPrefix: "prodcr_" },
  products: { type: "product", idPrefix: "prod_" },
  projects: { type: "project", idPrefix: ["prj_", "project_"] },
  logs: { type: "log", idPrefix: "log_" },
};

const ignoredFolders = new Set([
  "00_SYSTEM",
  "01_ASSEMBLY",
  "02_POLICY_CARDS",
  "datasets",
  "models",
  "reports",
  "ai_decisions",
  "schema",
]);

function parseValue(raw) {
  const value = raw.trim();
  if (value === "[]") return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    return inner ? inner.split(",").map((item) => item.trim()).filter(Boolean) : [];
  }
  return value;
}

function parseFrontmatter(markdown, file) {
  if (!markdown.startsWith("---\n")) {
    throw new Error(`missing frontmatter: ${file}`);
  }

  const end = markdown.indexOf("\n---", 4);
  if (end < 0) {
    throw new Error(`unterminated frontmatter: ${file}`);
  }

  const data = {};
  const block = markdown.slice(4, end).trim();

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator < 0) continue;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);
    data[key] = parseValue(value);
  }

  return data;
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listMarkdownFiles(fullPath);
      if (entry.isFile() && entry.name.endsWith(".md")) return [fullPath];
      return [];
    })
    .sort();
}

function requireField(frontmatter, field, file) {
  if (!(field in frontmatter) || frontmatter[field] === "") {
    throw new Error(`missing ${field}: ${file}`);
  }
}

const files = listMarkdownFiles(dataLinkRoot);
const seenFirestorePaths = new Map();
let validatedCount = 0;
let skippedIndexCount = 0;
let skippedIgnoredCount = 0;

for (const file of files) {
  const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
  const [, collection] = relativePath.split("/");
  const rule = folderRules[collection];

  if (relativePath.startsWith("04_DataLink/") && relativePath.endsWith("/index.md")) {
    skippedIndexCount += 1;
    continue;
  }

  if (ignoredFolders.has(collection)) {
    skippedIgnoredCount += 1;
    continue;
  }

  if (!rule) {
    throw new Error(`unknown DataLink collection folder: ${relativePath}`);
  }

  const frontmatter = parseFrontmatter(fs.readFileSync(file, "utf8"), relativePath);

  for (const field of ["id", "type", "firestore_collection", "firestore_doc_id", "created", "status"]) {
    requireField(frontmatter, field, relativePath);
  }

  if (frontmatter.type !== rule.type) {
    throw new Error(`invalid type in ${relativePath}: expected ${rule.type}, got ${frontmatter.type}`);
  }

  if (frontmatter.firestore_collection !== collection) {
    throw new Error(`invalid firestore_collection in ${relativePath}: expected ${collection}, got ${frontmatter.firestore_collection}`);
  }

  if (frontmatter.firestore_doc_id !== frontmatter.id) {
    throw new Error(`id/firestore_doc_id mismatch in ${relativePath}: ${frontmatter.id} != ${frontmatter.firestore_doc_id}`);
  }

  const idPrefixes = Array.isArray(rule.idPrefix) ? rule.idPrefix : [rule.idPrefix];
  if (!idPrefixes.some((prefix) => String(frontmatter.id).startsWith(prefix))) {
    throw new Error(`invalid id prefix in ${relativePath}: expected ${idPrefixes.join(" or ")}`);
  }

  if (!Array.isArray(frontmatter.tags)) {
    throw new Error(`tags must be an array in ${relativePath}`);
  }

  const firestorePath = `${frontmatter.firestore_collection}/${frontmatter.firestore_doc_id}`;
  const previousPath = seenFirestorePaths.get(firestorePath);
  if (previousPath) {
    throw new Error(`duplicate firestore document path ${firestorePath}: ${previousPath} and ${relativePath}`);
  }
  seenFirestorePaths.set(firestorePath, relativePath);
  validatedCount += 1;
}

console.log(`datalink frontmatter validation passed: ${validatedCount} files, skipped ${skippedIndexCount} index files, skipped ${skippedIgnoredCount} ignored files`);
