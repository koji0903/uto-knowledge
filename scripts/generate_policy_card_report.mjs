import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/policy_card_report.md";
const cardsRoot = "04_DataLink/02_POLICY_CARDS";

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

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) return {};
  const end = markdown.indexOf("\n---", 4);
  if (end < 0) return {};

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
  const fullPath = path.join(vaultRoot, dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs.readdirSync(fullPath, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      const fullEntryPath = path.join(vaultRoot, entryPath);
      if (entry.isDirectory()) return listMarkdownFiles(entryPath);
      if (entry.isFile() && entry.name.endsWith(".md")) return [fullEntryPath];
      return [];
    })
    .sort();
}

function sectionBody(markdown, heading) {
  const pattern = new RegExp(`^## ${heading}\\s*$`, "m");
  const match = markdown.match(pattern);
  if (!match || match.index === undefined) return "";

  const start = match.index + match[0].length;
  const rest = markdown.slice(start);
  const nextHeading = rest.search(/^##\s+/m);
  return (nextHeading >= 0 ? rest.slice(0, nextHeading) : rest).trim();
}

function hasContent(markdown, heading) {
  const body = sectionBody(markdown, heading)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line !== "-" && line !== "- [ ]");
  return body.length > 0;
}

function increment(map, key) {
  const normalized = key || "未設定";
  map.set(normalized, (map.get(normalized) || 0) + 1);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function markdownLink(relativePath, title) {
  const target = relativePath.replace(/\.md$/, "");
  return `[[${target}|${title || target.split("/").pop()}]]`;
}

const cards = [];
const byStatus = new Map();
const byPriority = new Map();
const byDomain = new Map();

for (const file of listMarkdownFiles(cardsRoot)) {
  const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
  if (relativePath.includes("/_templates/") || relativePath.endsWith("/index.md")) continue;

  const markdown = fs.readFileSync(file, "utf8");
  const frontmatter = parseFrontmatter(markdown);
  if (frontmatter.type !== "policy_card") continue;

  const domain = frontmatter.policy_domain || relativePath.split("/").at(-2) || "未設定";
  const card = {
    id: frontmatter.id || "",
    title: frontmatter.title || path.basename(file, ".md"),
    status: frontmatter.status || "未設定",
    priority: frontmatter.priority || "未設定",
    domain,
    owner: frontmatter.owner || "",
    questions: asArray(frontmatter.related_questions),
    evidence: asArray(frontmatter.related_evidence),
    hasNextAction: hasContent(markdown, "次アクション"),
    hasKpi: hasContent(markdown, "KPI"),
    relativePath,
  };
  cards.push(card);
  increment(byStatus, card.status);
  increment(byPriority, card.priority);
  increment(byDomain, card.domain);
}

cards.sort((a, b) => {
  const priorityRank = { high: 0, medium: 1, low: 2 };
  const aRank = priorityRank[a.priority] ?? 9;
  const bRank = priorityRank[b.priority] ?? 9;
  if (aRank !== bRank) return aRank - bRank;
  return a.id.localeCompare(b.id);
});

function countTable(title, map) {
  const rows = [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([item, count]) => `| ${item} | ${count} |`)
    .join("\n");
  return `## ${title}

| item | count |
| --- | ---: |
${rows || "| なし | 0 |"}
`;
}

const missingNextAction = cards.filter((card) => !card.hasNextAction);
const missingKpi = cards.filter((card) => !card.hasKpi);
const missingQuestions = cards.filter((card) => card.questions.length === 0);
const missingEvidence = cards.filter((card) => card.evidence.length === 0);
const highPriority = cards.filter((card) => card.priority === "high");

const readinessRows = [
  ["policy_cards", cards.length],
  ["missing_next_action", missingNextAction.length],
  ["missing_kpi", missingKpi.length],
  ["missing_related_questions", missingQuestions.length],
  ["missing_related_evidence", missingEvidence.length],
  ["high_priority", highPriority.length],
].map(([item, value]) => `| ${item} | ${value} |`).join("\n");

const highPriorityRows = highPriority
  .map((card) => `| ${card.id} | ${markdownLink(card.relativePath, card.title)} | ${card.domain} | ${card.hasNextAction ? "yes" : "no"} | ${card.hasKpi ? "yes" : "no"} |`)
  .join("\n");

const allCardRows = cards
  .map((card) => `| ${card.id} | ${markdownLink(card.relativePath, card.title)} | ${card.status} | ${card.priority} | ${card.domain} | ${card.questions.length} | ${card.evidence.length} | ${card.hasNextAction ? "yes" : "no"} | ${card.hasKpi ? "yes" : "no"} |`)
  .join("\n");

const actionRows = cards
  .filter((card) => !card.hasNextAction || !card.hasKpi || card.questions.length === 0 || card.evidence.length === 0)
  .map((card) => {
    const missing = [
      !card.hasNextAction ? "次アクション" : "",
      !card.hasKpi ? "KPI" : "",
      card.questions.length === 0 ? "関連質問" : "",
      card.evidence.length === 0 ? "根拠" : "",
    ].filter(Boolean).join(", ");
    return `| ${card.id} | ${markdownLink(card.relativePath, card.title)} | ${missing} |`;
  })
  .join("\n");

const report = `# 政策実行カード棚卸しレポート

Generated: ${new Date().toISOString()}

## Summary

| item | value |
| --- | ---: |
${readinessRows}

${countTable("Status", byStatus)}

${countTable("Priority", byPriority)}

${countTable("Policy Domain", byDomain)}

## High Priority Cards

| id | card | domain | next_action | kpi |
| --- | --- | --- | --- | --- |
${highPriorityRows || "| なし | なし | なし | - | - |"}

## Action Gaps

| id | card | missing |
| --- | --- | --- |
${actionRows || "| なし | なし | なし |"}

## All Cards

| id | card | status | priority | domain | questions | evidence | next_action | kpi |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- |
${allCardRows || "| なし | なし | なし | なし | なし | 0 | 0 | - | - |"}
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote policy card report: ${path.relative(vaultRoot, resolvedOut)}`);
console.log(`policy card report completed: ${cards.length} cards, missing_next_action=${missingNextAction.length}, missing_kpi=${missingKpi.length}, missing_related_questions=${missingQuestions.length}, missing_related_evidence=${missingEvidence.length}`);
