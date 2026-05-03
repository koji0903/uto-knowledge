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

## Verification Commands

\`\`\`bash
bash scripts/start_work.sh
bash scripts/end_work.sh
bash scripts/verify_all.sh
bash scripts/check_firestore_drift.sh
\`\`\`
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote status report: ${path.relative(vaultRoot, resolvedOut)}`);
