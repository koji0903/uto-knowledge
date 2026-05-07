import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const allowedCollections = new Set([
  "decisions",
  "producers",
  "products",
  "projects",
  "logs",
]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function parseValue(raw) {
  const value = raw.trim();
  if (value === "") return "";
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

function collectPolicyCardIds() {
  const cardsRoot = path.join(vaultRoot, "04_DataLink/02_POLICY_CARDS");
  const ids = new Set();

  for (const file of listMarkdownFiles(cardsRoot)) {
    const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
    if (relativePath.includes("/_templates/")) continue;

    const frontmatter = parseFrontmatter(fs.readFileSync(file, "utf8"), relativePath);
    if (frontmatter.type === "policy_card") {
      assert(typeof frontmatter.id === "string" && frontmatter.id.startsWith("pc_"), `invalid policy card id: ${relativePath}`);
      assert(!ids.has(frontmatter.id), `duplicate policy card id: ${frontmatter.id}`);
      ids.add(frontmatter.id);
    }
  }

  return ids;
}

function assertArray(value, field, pathName) {
  assert(Array.isArray(value), `${field} must be an array in ${pathName}`);
}

const policyCardIds = collectPolicyCardIds();
const dryRun = buildFirestoreDryRun();
let checkedReferences = 0;

for (const document of dryRun.documents) {
  const data = document.data;

  if ("related_policy_cards" in data) {
    assertArray(data.related_policy_cards, "related_policy_cards", document.path);
    for (const cardId of data.related_policy_cards) {
      assert(policyCardIds.has(cardId), `unknown related policy card ${cardId} in ${document.path}`);
      checkedReferences += 1;
    }
  }

  if ("related_collections" in data) {
    assertArray(data.related_collections, "related_collections", document.path);
    for (const collection of data.related_collections) {
      assert(allowedCollections.has(collection), `unknown related collection ${collection} in ${document.path}`);
      checkedReferences += 1;
    }
  }

  if ("related_files" in data) {
    assertArray(data.related_files, "related_files", document.path);
    for (const file of data.related_files) {
      const resolved = path.join(vaultRoot, file);
      assert(fs.existsSync(resolved), `missing related file ${file} in ${document.path}`);
      checkedReferences += 1;
    }
  }
}

console.log(`datalink reference validation passed: ${checkedReferences} references checked`);
