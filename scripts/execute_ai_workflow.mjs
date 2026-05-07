import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const args = process.argv.slice(2);
const workflowId = args[0] || null;
const dryRun = args.includes("--dry-run");

function loadWorkflowPlan(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Workflow plan not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function executeStep(workflow, stepIndex) {
  const step = workflow.steps[stepIndex];
  const ai = step.ai;

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Executing Step ${stepIndex + 1}: ${ai.toUpperCase()}`);
  console.log("=".repeat(60));
  console.log("");
  console.log(step.task);
  console.log("");

  if (dryRun) {
    console.log(
      `[DRY RUN] Would execute ${ai} with the above task prompt`
    );
    return {
      status: "pending",
      ai,
      output: null,
    };
  }

  // In real implementation, this would call the actual AI APIs
  // For now, we generate a stub response
  const timestamp = new Date().toISOString();
  const fileName = `04_DataLink/ai_decisions/${ai}_analysis_${timestamp.split("T")[0]}.md`;

  const stubOutput = `---
id: ${ai}_analysis_${Date.now()}
type: ai_decision
ai: ${ai}
workflow_id: ${workflow.id}
status: completed
created: ${timestamp.split("T")[0]}
---

# ${ai.toUpperCase()} 分析結果

**ワークフロー:** ${workflow.id}
**実行時刻:** ${timestamp}

## 分析内容

${step.task}

## 結果

このセクションは実際のAI出力で置き換えられます。

**次のステップ:**
${
  stepIndex < workflow.steps.length - 1
    ? `→ ${workflow.steps[stepIndex + 1].ai.toUpperCase()}`
    : "完了"
}
`;

  console.log(`[STUB] Created output file: ${fileName}`);
  console.log(`Status: completed`);

  return {
    status: "completed",
    ai,
    output: {
      fileName,
      content: stubOutput,
    },
  };
}

function executeWorkflow(workflow) {
  console.log(`\n${"#".repeat(60)}`);
  console.log(`# Executing Workflow: ${workflow.id}`);
  console.log("#".repeat(60));
  console.log(`矛盾: ${workflow.conflict}`);
  console.log(`AI チェーン: ${workflow.chain.join(" → ")}`);
  console.log(`ステップ数: ${workflow.steps.length}`);

  const results = [];
  const allOutputs = [];

  for (let i = 0; i < workflow.steps.length; i++) {
    const result = executeStep(workflow, i);
    results.push(result);

    if (result.output) {
      allOutputs.push(result.output);
    }

    // Simulate delay between AI calls
    if (i < workflow.steps.length - 1) {
      console.log(`\n⏳ Processing (${i + 1}/${workflow.steps.length})...`);
    }
  }

  return {
    workflow_id: workflow.id,
    status: dryRun ? "pending" : "completed",
    steps_executed: results.length,
    results,
    outputs: allOutputs,
  };
}

function mergeWorkflowResults(execution) {
  const timestamp = new Date().toISOString().split("T")[0];
  const logFileName = `logs/ai_workflow_${execution.workflow_id}_${timestamp}.md`;

  let md = `# AI ワークフロー実行ログ

**ワークフロー ID:** ${execution.workflow_id}
**実行時刻:** ${timestamp}
**ステータス:** ${execution.status}

---

## 実行結果

| ステップ | AI | ステータス | 出力ファイル |
|---|---|---|---|
`;

  for (let i = 0; i < execution.results.length; i++) {
    const result = execution.results[i];
    const outputFile = result.output ? result.output.fileName : "-";
    md += `| ${i + 1} | ${result.ai} | ${result.status} | ${outputFile} |\n`;
  }

  md += `\n---\n\n## AI チェーン フロー\n\n\`\`\`\n`;

  for (let i = 0; i < execution.results.length; i++) {
    md += `${i + 1}. ${execution.results[i].ai.toUpperCase()}`;
    if (i < execution.results.length - 1) {
      md += ` → `;
    }
    if ((i + 1) % 3 === 0 && i < execution.results.length - 1) {
      md += `\n   `;
    }
  }

  md += `\n\`\`\`\n\n---\n\n`;

  md += `## 出力ファイル一覧\n\n`;
  for (const output of execution.outputs) {
    md += `- [\`${output.fileName}\`](../${output.fileName})\n`;
  }

  md += `\n---\n\n## 次のステップ\n\n`;
  md += `1. 各 AI の出力ファイルを確認\n`;
  md += `2. 出力内容の整合性を検証\n`;
  md += `3. 必要に応じて再実行または手動調整\n`;
  md += `4. 最終結果を決定ログに記録\n`;

  return {
    fileName: logFileName,
    content: md,
  };
}

function main() {
  console.log("AI Workflow Executor");
  console.log("");

  // Load workflow plan
  const planPath = path.join(vaultRoot, "tmp", "ai_workflow_routing.json");
  let workflows;

  try {
    workflows = loadWorkflowPlan(planPath);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.error("");
    console.error(
      "First run: bash scripts/route_ai_task.sh to generate workflow plan"
    );
    process.exit(1);
  }

  if (!Array.isArray(workflows)) {
    workflows = [workflows];
  }

  // Filter by ID if specified
  if (workflowId) {
    workflows = workflows.filter(w => w.id === workflowId);
    if (workflows.length === 0) {
      console.error(`Workflow not found: ${workflowId}`);
      process.exit(1);
    }
  }

  console.log(
    `${dryRun ? "[DRY RUN] " : ""}Executing ${workflows.length} workflow(s)...`
  );

  const allExecutions = [];

  // Execute each workflow
  for (const workflow of workflows) {
    const execution = executeWorkflow(workflow);
    const merge = mergeWorkflowResults(execution);

    allExecutions.push(execution);

    // Save execution log
    const logPath = path.join(vaultRoot, merge.fileName);
    fs.mkdirSync(path.dirname(logPath), { recursive: true });
    fs.writeFileSync(logPath, merge.content);

    console.log(`\n✓ Execution log: ${path.relative(vaultRoot, logPath)}`);
  }

  console.log("");
  console.log("=".repeat(60));
  console.log("Workflow Execution Summary");
  console.log("=".repeat(60));
  console.log(`Total workflows: ${allExecutions.length}`);
  console.log(
    `Total steps executed: ${allExecutions.reduce((sum, e) => sum + e.steps_executed, 0)}`
  );
  console.log(
    `Status: ${dryRun ? "DRY RUN (no changes)" : "EXECUTED"}`
  );
}

main();
