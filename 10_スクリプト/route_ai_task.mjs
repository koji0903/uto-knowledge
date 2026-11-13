import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const args = process.argv.slice(2);
const taskType = args[0] || "conflict_detection";
const inputFile = args[1] || "tmp/conflict_report.md";

function analyzeConflict(conflictType, severity) {
  // Route based on conflict type
  const routes = {
    goal_values: {
      primary: "claude",
      secondary: "gemini",
      tertiary: "chatgpt",
      reason: "値の矛盾 → 政策分析 → 市場リサーチ → 実装化",
    },
    state_transitions: {
      primary: "claude",
      secondary: "chatgpt",
      reason: "状態矛盾 → 決定ロジック分析 → スクリプト実装",
    },
    reference_errors: {
      primary: "claude",
      secondary: "chatgpt",
      reason: "参照エラー → 検証 → 自動修正スクリプト",
    },
    timestamp_mismatch: {
      primary: "chatgpt",
      reason: "タイムスタンプズレ → スクリプトで自動修正",
    },
    semantic_inconsistency: {
      primary: "claude",
      secondary: "gemini",
      tertiary: "chatgpt",
      reason: "セマンティック矛盾 → 政策分析 → 市場調査 → 実装案",
    },
  };

  return routes[conflictType] || {
    primary: "claude",
    secondary: "gemini",
    tertiary: "chatgpt",
    reason: "デフォルトフロー",
  };
}

function getTaskPrompt(ai, taskContext) {
  const prompts = {
    claude: {
      policy_analysis: `
# Claude: 政策矛盾分析

以下の矛盾を分析してください：

**矛盾内容:** ${taskContext.conflict}
**関連ドキュメント:** ${taskContext.related_files?.join(", ") || "なし"}

## 分析項目

1. 政策カード間の不整合はないか
2. L6（政策）レイヤと L2（課題）レイヤの整合性
3. 宇土OSの8層モデルに沿った評価
4. 推奨される是正案

成果物: \`04_DataLink/ai_decisions/claude_conflict_analysis_[日付].md\`
`,
    },
    gemini: {
      market_research: `
# Gemini: 市場・環境調査補足

Claude の分析を受けて、以下をリサーチしてください：

**分析対象:** ${taskContext.topic}
**関連キーワード:** ${taskContext.keywords?.join(", ") || ""}

## リサーチ項目

1. 類似自治体の先行事例
2. 市場トレンド・消費者ニーズ
3. 政策実装の成功パターン
4. 外部環境の制約・機会

成果物: \`04_DataLink/ai_decisions/gemini_research_[日付].md\`
`,
    },
    chatgpt: {
      script_implementation: `
# ChatGPT: 実装スクリプト化

Claude・Gemini の分析を踏まえて、以下を実装してください：

**実装目標:** ${taskContext.deliverable}
**前提条件:** ${taskContext.prerequisites?.join(", ") || "なし"}

## 実装内容

1. スクリプトファイル作成（\`scripts/auto_generated_[機能].mjs\`）
2. 使用方法ドキュメント
3. テストケース

言語: Node.js（既存パターンに合わせる）
成果物: \`scripts/auto_generated_[日付]_[機能].mjs\`
`,
    },
  };

  return prompts[ai]?.[taskContext.type] || `Analyze: ${taskContext.conflict}`;
}

function parseConflictReport(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, "utf8");
  const conflicts = [];

  // Simple parsing: look for "MEDIUM" or priority markers
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("[MEDIUM]") || lines[i].includes("[HIGH]")) {
      conflicts.push({
        type: "unknown",
        severity: lines[i].includes("HIGH") ? "high" : "medium",
        description: lines[i],
        line: i,
      });
    }
  }

  return conflicts;
}

function generateWorkflowPlan(conflicts) {
  const workflows = [];

  for (const conflict of conflicts) {
    const route = analyzeConflict(conflict.type, conflict.severity);

    const workflow = {
      id: `workflow_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      conflict: conflict.description,
      severity: conflict.severity,
      route: route.primary,
      chain: [route.primary],
      steps: [],
    };

    // Build AI chain
    if (route.secondary) workflow.chain.push(route.secondary);
    if (route.tertiary) workflow.chain.push(route.tertiary);

    // Generate steps
    for (const ai of workflow.chain) {
      const taskContext = {
        conflict: conflict.description,
        type:
          ai === "claude" ? "policy_analysis"
          : ai === "gemini" ? "market_research"
          : "script_implementation",
        topic: conflict.type,
        keywords: ["宇土OS", "政策", "地域商社"],
        deliverable: `矛盾解決スクリプト`,
        prerequisites: [`Claude analysis`, `Gemini research`],
        related_files: [],
      };

      workflow.steps.push({
        ai: ai,
        task: getTaskPrompt(ai, taskContext),
        expected_output: `ai_decisions/${ai}_*.md`,
      });
    }

    workflows.push(workflow);
  }

  return workflows;
}

function generateWorkflowMarkdown(workflows) {
  let md = `# AI ワークフロー自動ルーティング

**生成日時:** ${new Date().toISOString()}
**ワークフロー数:** ${workflows.length}

---

## ワークフロー一覧

`;

  for (const workflow of workflows) {
    md += `### ${workflow.id}\n\n`;
    md += `**矛盾:** ${workflow.conflict}\n`;
    md += `**重大度:** ${workflow.severity}\n`;
    md += `**AI チェーン:** ${workflow.chain.join(" → ")}\n\n`;

    md += `#### 実行ステップ\n\n`;

    for (let i = 0; i < workflow.steps.length; i++) {
      const step = workflow.steps[i];
      md += `**Step ${i + 1}: ${step.ai.toUpperCase()}**\n\n`;
      md += `\`\`\`\n${step.task}\`\`\`\n\n`;
      md += `**期待成果物:** ${step.expected_output}\n\n`;
    }

    md += `---\n\n`;
  }

  return md;
}

function main() {
  console.log("Analyzing task and routing to AI workflow...");
  console.log("");

  // Parse input
  const conflicts = parseConflictReport(path.join(vaultRoot, inputFile));

  if (conflicts.length === 0) {
    console.log("⊘ No conflicts found to route");
    return;
  }

  console.log(`Found ${conflicts.length} conflicts to process`);

  // Generate workflow plan
  const workflows = generateWorkflowPlan(conflicts);

  // Generate markdown report
  const mdReport = generateWorkflowMarkdown(workflows);

  // Save reports
  const jsonPath = path.join(vaultRoot, "tmp", "ai_workflow_routing.json");
  const mdPath = path.join(vaultRoot, "tmp", "ai_workflow_routing.md");

  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(workflows, null, 2));
  fs.writeFileSync(mdPath, mdReport);

  console.log(`✓ Workflow routing JSON: ${path.relative(vaultRoot, jsonPath)}`);
  console.log(`✓ Workflow routing Markdown: ${path.relative(vaultRoot, mdPath)}`);
  console.log("");
  console.log("Workflow Summary:");
  console.log(`  - Total workflows: ${workflows.length}`);
  console.log(
    `  - AI chains: ${workflows.map(w => w.chain.join("→")).join(", ")}`
  );
  console.log("");
  console.log(mdReport);
}

main();
