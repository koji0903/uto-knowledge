import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/operations_brief.md";

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

function runNode(script, scriptArgs = []) {
  return run("node", [script, ...scriptArgs]);
}

function read(file) {
  const filePath = path.join(vaultRoot, file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8").trim() : "";
}

function extractSection(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start < 0) return "";

  const level = heading.match(/^#+/)?.[0].length ?? 2;
  const end = lines.findIndex((line, index) => {
    if (index <= start) return false;
    const match = line.match(/^(#+)\s+/);
    return match && match[1].length <= level;
  });

  return lines.slice(start + 1, end < 0 ? undefined : end).join("\n").trim();
}

function compactSection(markdown, heading, fallback = "未生成") {
  return extractSection(markdown, heading) || fallback;
}

function firstLines(markdown, count) {
  return markdown.split(/\r?\n/).filter(Boolean).slice(0, count).join("\n");
}

runNode("scripts/detect_ai_conflicts.mjs", ["--out", "tmp/ai_conflict_report.md"]);
runNode("scripts/generate_policy_card_report.mjs", ["--out", "tmp/policy_card_report.md"]);
runNode("scripts/generate_status_report.mjs", ["--out", "tmp/status_report.md"]);
runNode("scripts/generate_changelog.mjs", ["--out", "tmp/changelog.md"]);

const branch = run("git", ["branch", "--show-current"]) || "unknown";
const latestCommit = run("git", ["log", "--oneline", "-1"]) || "unknown";
const status = run("git", ["-c", "core.quotePath=false", "status", "--short", "--branch"]) || "unknown";
const conflictReport = read("tmp/ai_conflict_report.md");
const policyReport = read("tmp/policy_card_report.md");
const statusReport = read("tmp/status_report.md");
const changelog = read("tmp/changelog.md");

const report = `# 運用ブリーフ

Generated: ${new Date().toISOString()}

## Git

| item | value |
| --- | --- |
| branch | ${branch} |
| latest_commit | ${latestCommit} |

\`\`\`text
${status}
\`\`\`

## AI競合

${compactSection(conflictReport, "## Summary")}

## 政策実行

${compactSection(policyReport, "## Summary")}

## 実行キュー

${compactSection(policyReport, "## Execution Queue")}

## DataLink

${compactSection(statusReport, "## DataLink")}

## Firestore Dry-run

${compactSection(statusReport, "## Firestore Dry-run")}

## 最近の変更

${firstLines(compactSection(changelog, "## Recent Git Commits"), 10)}

## 次の基本操作

\`\`\`bash
bash scripts/start_work.sh
bash scripts/maintenance_check.sh local
bash scripts/generate_operations_brief.sh
bash scripts/end_work.sh
\`\`\`
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote operations brief: ${path.relative(vaultRoot, resolvedOut)}`);
