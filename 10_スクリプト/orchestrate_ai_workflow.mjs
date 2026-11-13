import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const skipConflictDetection = args.includes("--skip-conflicts");

function runCommand(cmd, description) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`${description}`);
  console.log("=".repeat(60));

  try {
    const output = execSync(cmd, {
      cwd: vaultRoot,
      encoding: "utf8",
      stdio: "pipe",
    });
    console.log(output);
    return { success: true, output };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return { success: false, output: error.message };
  }
}

function main() {
  console.log(`\n${"#".repeat(60)}`);
  console.log(
    "# Claude → Gemini → ChatGPT AI Workflow Orchestrator"
  );
  console.log("#".repeat(60));
  console.log(`Dry Run: ${dryRun ? "YES" : "NO"}`);
  console.log("");

  const timeline = [];

  // Step 1: Detect conflicts (if not skipped)
  if (!skipConflictDetection) {
    console.log("📋 Step 1: Detecting conflicts in DataLink...");
    const conflictResult = runCommand(
      "bash scripts/detect_ai_conflicts.sh",
      "Conflict Detection"
    );

    if (!conflictResult.success) {
      console.error("⚠️  Conflict detection failed, but continuing...");
    }
    timeline.push({
      step: 1,
      task: "Conflict Detection",
      status: conflictResult.success ? "success" : "warning",
    });
  }

  // Step 2: Route tasks to AI workflows
  console.log("\n🔀 Step 2: Routing conflicts to AI workflows...");
  const routeResult = runCommand(
    "bash scripts/route_ai_task.sh",
    "AI Task Routing"
  );

  if (!routeResult.success) {
    console.error("❌ AI task routing failed");
    process.exit(1);
  }
  timeline.push({
    step: 2,
    task: "AI Task Routing",
    status: "success",
  });

  // Step 3: Execute workflows
  console.log("\n⚙️  Step 3: Executing AI workflows...");
  const executeCmd = dryRun
    ? "bash scripts/execute_ai_workflow.sh --dry-run"
    : "bash scripts/execute_ai_workflow.sh";

  const executeResult = runCommand(executeCmd, "AI Workflow Execution");

  if (!executeResult.success) {
    console.error("⚠️  Some workflows failed, but continuing...");
  }
  timeline.push({
    step: 3,
    task: "Workflow Execution",
    status: executeResult.success ? "success" : "warning",
  });

  // Step 4: Validate all outputs
  console.log("\n✅ Step 4: Validating DataLink...");
  const validateResult = runCommand(
    "bash scripts/validate_datalink_schema.sh",
    "DataLink Validation"
  );

  timeline.push({
    step: 4,
    task: "DataLink Validation",
    status: validateResult.success ? "success" : "warning",
  });

  // Step 5: Generate summary report
  console.log("\n📊 Step 5: Generating workflow summary...");
  const summary = generateSummaryReport(timeline, dryRun);
  const summaryPath = path.join(
    vaultRoot,
    "tmp",
    `ai_workflow_orchestration_${new Date().toISOString().split("T")[0]}.md`
  );

  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, summary);

  console.log(`\n✓ Summary report: ${path.relative(vaultRoot, summaryPath)}`);

  // Final report
  console.log("\n" + "=".repeat(60));
  console.log("ORCHESTRATION COMPLETE");
  console.log("=".repeat(60));
  console.log(summary);

  // Exit code
  const allSuccess = timeline.every(t => t.status === "success");
  process.exit(allSuccess ? 0 : 1);
}

function generateSummaryReport(timeline, dryRun) {
  let md = `# AI Workflow Orchestration Report

**実行時刻:** ${new Date().toISOString()}
**実行モード:** ${dryRun ? "DRY RUN" : "EXECUTION"}

---

## 実行フロー

\`\`\`
矛盾検出
  ↓
タスク分析・AI ルーティング
  ↓
Claude: 政策分析
  ↓
Gemini: 市場調査
  ↓
ChatGPT: 実装スクリプト化
  ↓
結果統合・検証
\`\`\`

---

## 実行結果

| ステップ | タスク | ステータス |
|---|---|---|
`;

  for (const step of timeline) {
    const statusEmoji = step.status === "success" ? "✓" : "⚠️";
    md += `| ${step.step} | ${step.task} | ${statusEmoji} ${step.status} |\n`;
  }

  md += `\n---\n\n## 詳細\n\n`;

  md += `### 1️⃣ 矛盾検出\n\n`;
  md += `- **入力:** \`04_DataLink/*/*.md\`\n`;
  md += `- **出力:** \`tmp/conflict_report.md\`\n`;
  md += `- **検出項目:** 6 種類の矛盾パターン\n\n`;

  md += `### 2️⃣ AI タスクルーティング\n\n`;
  md += `- **入力:** \`tmp/conflict_report.md\`\n`;
  md += `- **出力:** \`tmp/ai_workflow_routing.json\`\n`;
  md += `- **決定ロジック:**\n`;
  md += `  - 政策矛盾 → Claude → Gemini → ChatGPT\n`;
  md += `  - 状態遷移エラー → Claude → ChatGPT\n`;
  md += `  - 参照エラー → Claude → ChatGPT\n`;
  md += `  - セマンティック矛盾 → Claude → Gemini → ChatGPT\n\n`;

  md += `### 3️⃣ ワークフロー実行\n\n`;
  md += `- **入力:** \`tmp/ai_workflow_routing.json\`\n`;
  md += `- **出力:** \`04_DataLink/ai_decisions/*\`, \`logs/ai_workflow_*\`\n`;
  md += `- **実行方式:** シーケンシャル（順序的）\n`;
  md += `- **出力生成:** 各 AI が \`ai_decisions/\` フォルダに記録\n\n`;

  md += `### 4️⃣ データリンク検証\n\n`;
  md += `- **検査対象:** 全 DataLink ドキュメント\n`;
  md += `- **検証項目:** スキーマ conformance, frontmatter 整合性\n`;
  md += `- **出力:** \`tmp/datalink_validation_report.json\`\n\n`;

  md += `### 5️⃣ 結果統合\n\n`;
  md += `- **生成ファイル:** このレポート\n`;
  md += `- **次アクション:**\n`;
  md += `  1. \`04_DataLink/ai_decisions/\` に保存された各 AI の出力を確認\n`;
  md += `  2. 出力の整合性を検証\n`;
  md += `  3. 必要に応じて手動調整\n`;
  md += `  4. 最終決定を \`04_DataLink/decisions/\` に記録\n\n`;

  md += `---\n\n## ファイル構成\n\n`;
  md += `\`\`\`\n`;
  md += `04_DataLink/\n`;
  md += `├── ai_decisions/\n`;
  md += `│   ├── claude_conflict_analysis_*.md\n`;
  md += `│   ├── gemini_market_research_*.md\n`;
  md += `│   └── chatgpt_implementation_*.mjs\n`;
  md += `└── decisions/\n`;
  md += `    └── decision_*.md (最終決定)\n`;
  md += `\n`;
  md += `logs/\n`;
  md += `└── ai_workflow_*.md (実行ログ)\n`;
  md += `\n`;
  md += `tmp/\n`;
  md += `├── conflict_report.md\n`;
  md += `├── ai_workflow_routing.json\n`;
  md += `└── datalink_validation_report.json\n`;
  md += `\`\`\`\n\n`;

  md += `---\n\n## トラブルシューティング\n\n`;
  md += `| 問題 | 原因 | 対応 |\n`;
  md += `|---|---|---|\n`;
  md += `| 矛盾が検出されない | 既に解決済み | スキップして OK |\n`;
  md += `| ワークフロー実行エラー | 先行ステップ失敗 | ログを確認して再実行 |\n`;
  md += `| 出力ファイル不足 | AI 実行未完了 | 実行ログを確認 |\n`;
  md += `| スキーマ検証エラー | frontmatter 不整合 | 手動修正後に再実行 |\n\n`;

  md += `---\n\n## 次のフェーズ\n\n`;
  md += `- [ ] 実 AI API 連携（Claude, Gemini, ChatGPT）\n`;
  md += `- [ ] Slack/メール通知統合\n`;
  md += `- [ ] 自動修正スクリプト（エラー箇所への即時対応）\n`;
  md += `- [ ] 定期スケジュール化（日次/週次ワークフロー）\n\n`;

  md += `---\n`;
  md += `*Generated by orchestrate_ai_workflow.mjs*\n`;

  return md;
}

main();
