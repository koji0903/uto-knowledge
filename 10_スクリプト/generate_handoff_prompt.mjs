import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);

function getArg(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : "";
}

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

function usage() {
  return [
    "Usage:",
    "  node scripts/generate_handoff_prompt.mjs --ai claude --task \"政策カードの矛盾検出\"",
    "  node scripts/generate_handoff_prompt.mjs --ai gemini --task \"Drive資料の確認\" --read \"AGENTS.md,04_DataLink/index.md\"",
    "  node scripts/generate_handoff_prompt.mjs --ai codex --task \"検証スクリプト追加\" --write \"scripts,tmp\" --out tmp/handoff_codex.md",
    "  node scripts/generate_handoff_prompt.mjs --ai claude --task \"政策カード確認\" --conflict-report tmp/ai_conflict_report.md",
    "",
    "AI:",
    "  claude, gemini, chatgpt, codex",
  ].join("\n");
}

const ai = getArg("--ai").toLowerCase();
const task = getArg("--task");
const readTargets = getArg("--read") || "AGENTS.md,tmp/ai_context.md";
const writeTargets = getArg("--write") || "00_Inbox,01_Daily,04_DataLink/logs";
const deliverables = getArg("--deliverables") || "要点,変更案,検証結果,未確定事項";
const outPath = getArg("--out") || `tmp/handoff_${ai || "ai"}.md`;
const conflictReportPath = getArg("--conflict-report") || "tmp/ai_conflict_report.md";

const aiProfiles = {
  claude: {
    role: "政策分析、矛盾検出、設計レビュー担当",
    focus: ["複数案を比較する", "リスク、制約、未確定事項を分ける", "議会質問、政策カード、根拠資料のつながりを確認する"],
  },
  gemini: {
    role: "Google Drive、外部情報、最新情報確認担当",
    focus: ["Google Drive内の関連ファイルを探す", "最新情報や公式情報を確認する", "出典、日付、更新タイミングを明記する"],
  },
  chatgpt: {
    role: "実装、検証、スクリプト、ドキュメント整備担当",
    focus: ["既存の構造とスクリプトに合わせて実装する", "冪等性と再実行安全性を保つ", "変更後に検証を実行する"],
  },
  codex: {
    role: "実装、検証、スクリプト、ドキュメント整備担当",
    focus: ["既存の構造とスクリプトに合わせて実装する", "冪等性と再実行安全性を保つ", "変更後に検証を実行する"],
  },
};

if (!ai || !task || !aiProfiles[ai]) {
  console.error(usage());
  process.exit(1);
}

const profile = aiProfiles[ai];
const branch = run("git", ["branch", "--show-current"]) || "unknown";
const latestCommit = run("git", ["log", "--oneline", "-1"]) || "unknown";
const status = run("git", ["-c", "core.quotePath=false", "status", "--short", "--branch"]) || "unknown";
const readList = readTargets.split(",").map((item) => item.trim()).filter(Boolean);
const writeList = writeTargets.split(",").map((item) => item.trim()).filter(Boolean);
const deliverableList = deliverables.split(",").map((item) => item.trim()).filter(Boolean);

function readConflictReport(reportPath) {
  const resolved = path.resolve(vaultRoot, reportPath);
  if (!fs.existsSync(resolved)) {
    return {
      relativePath: reportPath,
      exists: false,
      summary: [],
      notableConflicts: [],
    };
  }

  const markdown = fs.readFileSync(resolved, "utf8");
  const summary = markdown
    .split("\n")
    .filter((line) => line.startsWith("| ") && !line.includes("---"))
    .filter((line) => !line.includes("item | value"))
    .map((line) => line.trim());

  const notableConflicts = [...markdown.matchAll(/^### \d+\. \[(HIGH|MEDIUM)\] (.+)$/gm)]
    .slice(0, 5)
    .map((match) => `- [${match[1]}] ${match[2]}`);

  return {
    relativePath: path.relative(vaultRoot, resolved).replaceAll(path.sep, "/"),
    exists: true,
    summary,
    notableConflicts,
  };
}

function buildConflictSection(reportPath) {
  const report = readConflictReport(reportPath);
  if (!report.exists) {
    return `## AI競合検出

- report: \`${report.relativePath}\`
- status: 未生成
- 作業前に \`bash scripts/detect_ai_conflicts.sh --out ${report.relativePath}\` を実行し、HIGH競合が0件であることを確認してください。
`;
  }

  const summaryTable = report.summary.length > 0
    ? ["| item | value |", "| --- | --- |", ...report.summary].join("\n")
    : "Summaryを読み取れませんでした。レポート本文を確認してください。";
  const notable = report.notableConflicts.length > 0
    ? report.notableConflicts.join("\n")
    : "- HIGH / MEDIUM 競合候補はありません。";

  return `## AI競合検出

- report: \`${report.relativePath}\`
- HIGH競合が1件以上ある場合は、実装やDataLink更新を止めて先に解消してください。
- LOW競合は作業前提として明示し、必要に応じて共有してください。

${summaryTable}

重要な競合候補:
${notable}
`;
}

const conflictSection = buildConflictSection(conflictReportPath);

const content = `# AIハンドオフ

Generated: ${new Date().toISOString()}

## 宛先

- AI: ${ai}
- 役割: ${profile.role}

## 前提

- このVaultは Obsidian を思考OS、FirestoreをデータOS、Google Driveをファイル実体、MCPをAI連携口として使います。
- 作業前に \`AGENTS.md\`、\`tmp/ai_context.md\`、\`${conflictReportPath}\` を読んでください。
- 既存のフォルダ名、ファイル名、ID、Firestore collection名を安易に変更しないでください。
- \`.env\`、秘密鍵、OAuthトークン、サービスアカウントJSONはGitへ追加しないでください。

## リポジトリ状態

| item | value |
| --- | --- |
| branch | ${branch} |
| latest_commit | ${latestCommit} |

\`\`\`text
${status}
\`\`\`

${conflictSection}

## 今回の依頼

${task}

## 対象範囲

読むファイル:
${readList.map((item) => `- ${item}`).join("\n")}

書いてよい場所:
${writeList.map((item) => `- ${item}`).join("\n")}

## 重点

${profile.focus.map((item) => `- ${item}`).join("\n")}

## 成果物

${deliverableList.map((item) => `- ${item}`).join("\n")}

## 完了条件

- 関連リンクが壊れていない
- Firestore対象データは \`firestore_collection\` と \`firestore_doc_id\` を持つ
- AI競合検出でHIGH競合が0件である
- 必要な検証コマンドが通っている
- 未確定事項は「未確定」と明記している

## 最小チェック

\`\`\`bash
bash scripts/generate_ai_context.sh
bash scripts/detect_ai_conflicts.sh --out ${conflictReportPath}
bash scripts/validate_ai_operations_docs.sh
bash scripts/maintenance_check.sh local
\`\`\`
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, content, "utf8");

console.log(`wrote handoff prompt: ${path.relative(vaultRoot, resolvedOut)}`);
