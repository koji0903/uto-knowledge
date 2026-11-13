import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

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

function collectIds(dir, expectedType) {
  const ids = new Set();

  for (const file of listMarkdownFiles(dir)) {
    const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
    if (relativePath.includes("/_templates/") || relativePath.endsWith("/index.md")) continue;

    const frontmatter = parseFrontmatter(fs.readFileSync(file, "utf8"), relativePath);
    if (frontmatter.type !== expectedType) continue;
    assert(typeof frontmatter.id === "string" && frontmatter.id.length > 0, `missing id: ${relativePath}`);
    assert(!ids.has(frontmatter.id), `duplicate ${expectedType} id: ${frontmatter.id}`);
    ids.add(frontmatter.id);
  }

  return ids;
}

function assertArray(value, field, file) {
  assert(Array.isArray(value), `${field} must be an array in ${file}`);
}

const questionIds = collectIds(path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/questions"), "assembly_question");
const evidenceIds = collectIds(path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/evidence"), "evidence");
const policyCardIds = new Set();
let checkedCards = 0;
let checkedReferences = 0;

for (const file of listMarkdownFiles(path.join(vaultRoot, "04_DataLink/02_POLICY_CARDS"))) {
  const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
  if (relativePath.includes("/_templates/") || relativePath.endsWith("/index.md")) continue;

  const frontmatter = parseFrontmatter(fs.readFileSync(file, "utf8"), relativePath);
  if (frontmatter.type !== "policy_card") continue;

  assert(typeof frontmatter.id === "string" && frontmatter.id.startsWith("pc_"), `invalid policy card id: ${relativePath}`);
  assert(!policyCardIds.has(frontmatter.id), `duplicate policy card id: ${frontmatter.id}`);
  policyCardIds.add(frontmatter.id);

  assertArray(frontmatter.related_questions, "related_questions", relativePath);
  assertArray(frontmatter.related_evidence, "related_evidence", relativePath);

  for (const questionId of frontmatter.related_questions) {
    assert(questionIds.has(questionId), `unknown related question ${questionId} in ${relativePath}`);
    checkedReferences += 1;
  }

  for (const evidenceId of frontmatter.related_evidence) {
    assert(evidenceIds.has(evidenceId), `unknown related evidence ${evidenceId} in ${relativePath}`);
    checkedReferences += 1;
  }

  checkedCards += 1;
}

assert(checkedCards > 0, "no policy cards checked");
console.log(`policy card reference validation passed: ${checkedCards} cards, ${checkedReferences} references checked`);
