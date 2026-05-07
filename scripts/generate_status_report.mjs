import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/status_report.md";

function run(command, args = []) {
  try {
    return execFileSync(command, args, {
      cwd: vaultRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

function countMarkdownFiles(dir) {
  const fullPath = path.join(vaultRoot, dir);
  if (!fs.existsSync(fullPath)) return 0;

  return fs.readdirSync(fullPath, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return Array(countMarkdownFiles(entryPath)).fill(null);
      if (entry.isFile() && entry.name.endsWith(".md")) return [entryPath];
      return [];
    }).length;
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

function parseFrontmatter(file) {
  const markdown = fs.readFileSync(file, "utf8");
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

function countByFrontmatterType(dir, type) {
  return listMarkdownFiles(dir)
    .filter((file) => {
      const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
      return !relativePath.includes("/_templates/") && !relativePath.endsWith("/index.md");
    })
    .filter((file) => parseFrontmatter(file).type === type)
    .length;
}

function exists(file) {
  return fs.existsSync(path.join(vaultRoot, file)) ? "yes" : "no";
}

function countDryRunDocuments(collection) {
  return dryRun.documents.filter((document) => document.collection === collection).length;
}

const dryRun = buildFirestoreDryRun();
const branch = run("git", ["branch", "--show-current"]) || "unknown";
const latestCommit = run("git", ["log", "--oneline", "-1"]) || "unknown";
const gitStatus = run("git", ["status", "--short", "--branch"]);
const policyCardCount = countByFrontmatterType("04_DataLink/02_POLICY_CARDS", "policy_card");
const questionCount = countByFrontmatterType("04_DataLink/01_ASSEMBLY/questions", "assembly_question");
const evidenceCount = countByFrontmatterType("04_DataLink/01_ASSEMBLY/evidence", "evidence");
const validationCommands = [
  "bash scripts/validate_vault.sh",
  "bash scripts/security_check.sh",
  "bash scripts/validate_mcp_config.sh",
  "bash scripts/validate_datalink_samples.sh",
  "bash scripts/validate_datalink_frontmatter.sh",
  "bash scripts/validate_datalink_scaffold.sh",
  "bash scripts/validate_datalink_references.sh",
  "bash scripts/validate_policy_card_references.sh",
  "bash scripts/validate_obsidian_links.sh",
  "bash scripts/datalink_to_firestore_apply.sh --dry-run",
  "bash scripts/validate_drive_structure_config.sh",
  "bash scripts/create_drive_structure.sh --dry-run",
];

const report = `# uto-knowledge Status Report

Generated: ${new Date().toISOString()}

## Git

| item | value |
| --- | --- |
| branch | ${branch} |
| latest_commit | ${latestCommit} |

\`\`\`text
${gitStatus}
\`\`\`

## Local Files

| item | value |
| --- | --- |
| .env | ${exists(".env")} |
| .firebaserc | ${exists(".firebaserc")} |
| README.md | ${exists("README.md")} |
| AGENTS.md | ${exists("AGENTS.md")} |

## Knowledge Assets

| item | value |
| --- | --- |
| policy_cards | ${policyCardCount} |
| assembly_questions | ${questionCount} |
| evidence_notes | ${evidenceCount} |

## DataLink

| collection | markdown_count | firestore_dry_run_count |
| --- | --- | --- |
| decisions | ${countMarkdownFiles("04_DataLink/decisions")} | ${countDryRunDocuments("decisions")} |
| producers | ${countMarkdownFiles("04_DataLink/producers")} | ${countDryRunDocuments("producers")} |
| products | ${countMarkdownFiles("04_DataLink/products")} | ${countDryRunDocuments("products")} |
| projects | ${countMarkdownFiles("04_DataLink/projects")} | ${countDryRunDocuments("projects")} |
| logs | ${countMarkdownFiles("04_DataLink/logs")} | ${countDryRunDocuments("logs")} |

## Firestore Dry-run

| item | value |
| --- | --- |
| document_count | ${dryRun.document_count} |

## Firestore Planned Documents

| path | source |
| --- | --- |
${dryRun.documents.map((document) => `| ${document.path} | ${document.source} |`).join("\n")}

## Verification Commands

\`\`\`bash
bash scripts/start_work.sh
bash scripts/end_work.sh
bash scripts/verify_all.sh
bash scripts/check_firestore_drift.sh
\`\`\`

## Local CI Checks

${validationCommands.map((command) => `- \`${command}\``).join("\n")}
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote status report: ${path.relative(vaultRoot, resolvedOut)}`);
