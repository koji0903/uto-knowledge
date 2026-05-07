import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/ai_conflict_report.md";
const strict = args.includes("--strict");

function run(command, commandArgs = []) {
  try {
    return execFileSync(command, commandArgs, {
      cwd: vaultRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
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

function loadRequiredDocuments() {
  const file = path.join(vaultRoot, "datalink.required.json");
  if (!fs.existsSync(file)) return [];
  const config = JSON.parse(fs.readFileSync(file, "utf8"));
  return Array.isArray(config.required_documents) ? config.required_documents : [];
}

function collectPolicyCards() {
  return listMarkdownFiles("04_DataLink/02_POLICY_CARDS")
    .map((file) => {
      const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
      if (relativePath.includes("/_templates/") || relativePath.endsWith("/index.md")) return null;
      const frontmatter = parseFrontmatter(fs.readFileSync(file, "utf8"));
      if (frontmatter.type !== "policy_card") return null;
      return {
        id: frontmatter.id,
        path: relativePath,
        type: frontmatter.type,
      };
    })
    .filter(Boolean);
}

function conflict(priority, type, title, detail, action) {
  return { priority, type, title, detail, action };
}

const dryRun = buildFirestoreDryRun();
const requiredDocuments = loadRequiredDocuments();
const dryRunPaths = new Set(dryRun.documents.map((document) => document.path));
const policyCards = collectPolicyCards();
const conflicts = [];

const byId = new Map();
for (const document of dryRun.documents) {
  const existing = byId.get(document.data.id);
  if (existing) {
    conflicts.push(conflict(
      "HIGH",
      "duplicate_id",
      "DataLink IDの重複",
      `${document.data.id}: ${existing} と ${document.source}`,
      "片方の id / firestore_doc_id を変更し、Firestore pathの重複を解消する",
    ));
  }
  byId.set(document.data.id, document.source);
}

for (const card of policyCards) {
  const existing = byId.get(card.id);
  if (existing) {
    conflicts.push(conflict(
      "MEDIUM",
      "duplicate_id",
      "DataLinkと政策カードのID重複",
      `${card.id}: ${existing} と ${card.path}`,
      "意図した共有IDでなければ片方のIDを変更する",
    ));
  }
  byId.set(card.id, card.path);
}

for (const required of requiredDocuments) {
  if (!dryRunPaths.has(required.path)) {
    conflicts.push(conflict(
      "HIGH",
      "missing_required_datalink",
      "必須DataLink文書がFirestore dry-run対象外",
      `${required.path}: ${required.reason || ""}`,
      "該当Markdownのfrontmatterと配置を確認し、dry-run対象へ戻す",
    ));
  }
}

const gitStatus = run("git", ["status", "--short"]);
const uncommittedLines = gitStatus.split("\n").filter(Boolean);
if (uncommittedLines.length > 0) {
  conflicts.push(conflict(
    "LOW",
    "working_tree_dirty",
    "未コミット変更あり",
    `${uncommittedLines.length}件の未コミット変更があります`,
    "他AIへ作業を渡す前に、差分の意図を確認してコミットまたは明示的に共有する",
  ));
}

const claudeWorktreesPath = path.join(vaultRoot, ".claude/worktrees");
if (fs.existsSync(claudeWorktreesPath)) {
  const worktrees = fs.readdirSync(claudeWorktreesPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  if (worktrees.length > 0) {
    conflicts.push(conflict(
      "LOW",
      "ai_worktree_present",
      "Claude作業ワークツリーあり",
      worktrees.join(", "),
      "必要な成果物だけをmainへ選別して取り込む。.claude/ はGit管理しない",
    ));
  }
}

const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
conflicts.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

const counts = {
  HIGH: conflicts.filter((item) => item.priority === "HIGH").length,
  MEDIUM: conflicts.filter((item) => item.priority === "MEDIUM").length,
  LOW: conflicts.filter((item) => item.priority === "LOW").length,
};

const report = `# AI競合検出レポート

Generated: ${new Date().toISOString()}

## Summary

| item | value |
| --- | --- |
| conflicts | ${conflicts.length} |
| HIGH | ${counts.HIGH} |
| MEDIUM | ${counts.MEDIUM} |
| LOW | ${counts.LOW} |
| firestore_dry_run_documents | ${dryRun.document_count} |
| required_documents | ${requiredDocuments.length} |
| policy_cards | ${policyCards.length} |

## Details

${conflicts.length === 0 ? "競合候補はありません。" : conflicts.map((item, index) => `### ${index + 1}. [${item.priority}] ${item.title}

- type: ${item.type}
- detail: ${item.detail}
- action: ${item.action}
`).join("\n")}
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote AI conflict report: ${path.relative(vaultRoot, resolvedOut)}`);
console.log(`AI conflict detection completed: ${conflicts.length} conflicts (HIGH=${counts.HIGH}, MEDIUM=${counts.MEDIUM}, LOW=${counts.LOW})`);

if (strict && counts.HIGH > 0) {
  process.exit(1);
}
