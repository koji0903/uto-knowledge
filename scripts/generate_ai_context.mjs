import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/ai_context.md";

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

  return lines.slice(start, end < 0 ? undefined : end).join("\n").trim();
}

const branch = run("git", ["branch", "--show-current"]) || "unknown";
const latestCommit = run("git", ["log", "--oneline", "-1"]) || "unknown";
const status = run("git", ["status", "--short", "--branch"]) || "unknown";
const remote = run("git", ["remote", "get-url", "origin"]) || "unknown";

const agents = read("AGENTS.md");
const readme = read("README.md");

const context = `# uto-knowledge AI Context

Generated: ${new Date().toISOString()}

## Repository

| item | value |
| --- | --- |
| vault_root | ${vaultRoot} |
| branch | ${branch} |
| latest_commit | ${latestCommit} |
| remote | ${remote} |

\`\`\`text
${status}
\`\`\`

## Mission

- Obsidian を思考 OS として使う
- Firestore を構造化データ OS として使う
- Google Drive をファイル実体の保存先として使う
- MCP 経由で Claude / Gemini / ChatGPT から共通参照できる状態にする

## First Read

1. README.md
2. AGENTS.md
3. 05_MOC/32_command_catalog.md
4. 05_MOC/00_system_overview.md
5. 05_MOC/08_ai_write_policy.md
6. 05_MOC/01_datalink_frontmatter.md
7. 05_MOC/25_production_data_gate.md

## Operating Rules

${extractSection(agents, "## 書き込みルール")}

${extractSection(agents, "## 禁止事項")}

## Key Commands

\`\`\`bash
bash scripts/start_work.sh
bash scripts/end_work.sh
bash scripts/maintenance_check.sh local
bash scripts/validate_datalink_frontmatter.sh
bash scripts/security_check.sh
bash scripts/verify_all.sh
\`\`\`

## DataLink Creation

\`\`\`bash
bash scripts/scaffold_datalink_note.sh --type project --id prj_002 --title "新規プロジェクト"
bash scripts/datalink_to_firestore_apply.sh --dry-run
\`\`\`

## Firestore

${extractSection(agents, "## Firestore")}

## Google Drive

${extractSection(agents, "## Google Drive")}

## README Snapshot

${extractSection(readme, "## 外部連携")}

${extractSection(readme, "## 重要ルール")}
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, context, "utf8");

console.log(`wrote AI context: ${path.relative(vaultRoot, resolvedOut)}`);
