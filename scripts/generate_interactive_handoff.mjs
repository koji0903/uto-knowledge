import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = { ai: "claude", task: "", read: [], write: [] };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--ai") parsed.ai = args[++i];
    else if (args[i] === "--task") parsed.task = args[++i];
    else if (args[i] === "--read") parsed.read = args[++i].split(",");
    else if (args[i] === "--write") parsed.write = args[++i].split(",");
  }

  return parsed;
}

function getRecentConflicts() {
  const reportPath = path.join(vaultRoot, "tmp", "conflict_report.md");
  if (!fs.existsSync(reportPath)) {
    return [];
  }

  const content = fs.readFileSync(reportPath, "utf-8");
  const lines = content.split("\n");

  const conflicts = [];
  let currentConflict = null;

  for (const line of lines) {
    if (line.match(/^\###\s*\[/)) {
      if (currentConflict) conflicts.push(currentConflict);
      const match = line.match(/\[(\w+)\]\s+(.+?)\s+\(#(\d+)\)/);
      if (match) {
        currentConflict = {
          priority: match[1],
          title: match[2],
          id: match[3],
          pairs: [],
          reason: "",
        };
      }
    } else if (currentConflict && line.startsWith("- ")) {
      currentConflict.pairs.push(line.slice(2));
    } else if (currentConflict && line.startsWith("**分析:**")) {
      // Reason follows
    } else if (currentConflict && !line.startsWith("**") && line.trim() && line !== "---") {
      if (!currentConflict.reason) {
        currentConflict.reason = line.trim();
      }
    }
  }

  if (currentConflict) conflicts.push(currentConflict);
  return conflicts.filter((c) => c.priority === "HIGH" || c.priority === "MEDIUM").slice(0, 5);
}

function getReferenceMaterials(aiName) {
  const aiDecisionsDir = path.join(vaultRoot, "04_DataLink", "ai_decisions");
  const materials = [];

  if (!fs.existsSync(aiDecisionsDir)) {
    return materials;
  }

  // Get recent decision files
  const files = fs.readdirSync(aiDecisionsDir)
    .filter(
      (f) =>
        (f.startsWith("claude_") || f.startsWith("gemini_") || f.startsWith("chatgpt_")) &&
        f.endsWith(".md")
    )
    .sort()
    .reverse()
    .slice(0, 5);

  for (const file of files) {
    const fullPath = path.join(aiDecisionsDir, file);
    const content = fs.readFileSync(fullPath, "utf-8");
    const title = content.split("\n")[0].replace(/^#+ /, "");
    materials.push({
      file,
      title,
      path: `04_DataLink/ai_decisions/${file}`,
    });
  }

  return materials;
}

function generateQuestionFromConflict(conflict, aiName) {
  const questions = [];

  if (aiName === "claude") {
    if (conflict.title.includes("矛盾")) {
      questions.push(`このドキュメント間の矛盾についての見方を教えてください：`);
      for (const pair of conflict.pairs.slice(0, 2)) {
        questions.push(`  - ${pair}`);
      }
    }
  } else if (aiName === "gemini") {
    if (conflict.title.includes("参照")) {
      questions.push(`以下の参照について、市場データや外部情報で裏付けられるか確認してください：`);
      for (const pair of conflict.pairs.slice(0, 2)) {
        questions.push(`  - ${pair}`);
      }
    }
  } else if (aiName === "chatgpt") {
    if (conflict.title.includes("矛盾")) {
      questions.push(`以下の矛盾を解決するスクリプトやテンプレートを作成してください：`);
      for (const pair of conflict.pairs.slice(0, 2)) {
        questions.push(`  - ${pair}`);
      }
    }
  }

  return questions;
}

function generateDeliverableTemplate(aiName, task) {
  const templates = {
    claude: `## 成果物形式

提出先: \`04_DataLink/ai_decisions/claude_${task}_[日付].md\`

### 内容構成
\`\`\`markdown
# Claude 分析: ${task}

## 分析結果
[矛盾検出・戦略検討の詳細]

## 推奨アクション
- [ ] Gemini: [何を確認すべきか]
- [ ] ChatGPT: [何を実装すべきか]

## 根拠・参考資料
- 参照ドキュメント
- 論理的根拠
\`\`\`
`,
    gemini: `## 成果物形式

提出先: \`04_DataLink/ai_decisions/gemini_${task}_[日付].md\`

### 内容構成
\`\`\`markdown
# Gemini リサーチ: ${task}

## 調査結果
[市場データ、トレンド、競合事例など]

## 宇土市への示唆
[発見内容の適用方法]

## Claude への質問・検証依頼
- [ ] [検証してほしいポイント]
\`\`\`
`,
    chatgpt: `## 成果物形式

提出先: \`04_DataLink/ai_decisions/chatgpt_${task}_[日付].md\`

### 内容構成
\`\`\`markdown
# ChatGPT 実装: ${task}

## 実装内容
[スクリプト、テンプレート、ドキュメント整備]

## 使用方法
\`\`\`bash
# 実行例
bash scripts/[new_script].sh --option value
\`\`\`

## テスト実績
[実施したテスト、成功・失敗の詳細]
\`\`\`
`,
  };

  return templates[aiName] || templates.claude;
}

function generateInteractiveHandoff(aiName, task, readFiles = [], writeFiles = []) {
  const now = new Date().toISOString();
  const conflicts = getRecentConflicts();
  const references = getReferenceMaterials(aiName);

  let handoff = `# インタラクティブハンドオフ: ${aiName.toUpperCase()}\n\n`;
  handoff += `生成日時: ${now}\n`;
  handoff += `対象AI: ${aiName}\n`;
  handoff += `タスク: ${task || "（未指定）"}\n\n`;

  // AI への問い
  if (conflicts.length > 0) {
    handoff += `## AI への問い\n\n`;
    let questionNum = 1;

    for (const conflict of conflicts) {
      const questions = generateQuestionFromConflict(conflict, aiName);
      if (questions.length > 0) {
        handoff += `**[${conflict.priority}] ${questionNum}. ${questions[0]}**\n`;
        for (let i = 1; i < questions.length; i++) {
          handoff += `${questions[i]}\n`;
        }
        handoff += `\n`;
        questionNum++;
      }
    }
  }

  // リファレンス
  if (references.length > 0) {
    handoff += `## リファレンス: 先発 AI の分析\n\n`;
    for (const ref of references) {
      handoff += `- [${ref.title}](${ref.path})\n`;
    }
    handoff += `\n`;
  }

  // 参考資料
  handoff += `## 参考資料\n\n`;
  handoff += `- [AI 学習コンテキスト](tmp/${aiName}_learning_context.md)\n`;
  handoff += `- [${aiName.charAt(0).toUpperCase() + aiName.slice(1)} プロファイル](mcp/ai_profiles/${aiName}_profile.md)\n`;
  handoff += `- [矛盾検出レポート](tmp/conflict_report.md)\n\n`;

  // 読み取り・書き込み範囲
  if (readFiles.length > 0 || writeFiles.length > 0) {
    handoff += `## アクセス権限\n\n`;
    if (readFiles.length > 0) {
      handoff += `**読み取り範囲:**\n`;
      for (const file of readFiles) {
        handoff += `- ${file}\n`;
      }
      handoff += `\n`;
    }
    if (writeFiles.length > 0) {
      handoff += `**書き込み範囲:**\n`;
      for (const file of writeFiles) {
        handoff += `- ${file}\n`;
      }
      handoff += `\n`;
    }
  }

  // 成果物テンプレート
  handoff += generateDeliverableTemplate(aiName, task || "task");

  // 完了条件
  handoff += `## 完了条件\n\n`;
  handoff += `- [ ] 上記の「AI への問い」に全て対応した\n`;
  handoff += `- [ ] 成果物を指定の場所に保存した\n`;
  handoff += `- [ ] \`bash scripts/detect_ai_conflicts.sh\` を実行して矛盾が解決した\n`;
  handoff += `- [ ] 関連ドキュメント（projects/decisions/logs）を更新した\n\n`;

  // 推奨ワークフロー
  handoff += `## 推奨ワークフロー\n\n`;
  handoff += `\`\`\`bash\n`;
  handoff += `# 1. コンテキストを確認\n`;
  handoff += `cat tmp/${aiName}_learning_context.md\n\n`;
  handoff += `# 2. 矛盾検出レポートを確認\n`;
  handoff += `cat tmp/conflict_report.md | head -50\n\n`;
  handoff += `# 3. タスク実施\n`;
  handoff += `# [作業実施]\n\n`;
  handoff += `# 4. 矛盾解決を確認\n`;
  handoff += `bash scripts/detect_ai_conflicts.sh\n\n`;
  handoff += `# 5. 成果物を保存\n`;
  handoff += `cp /tmp/your_result.md 04_DataLink/ai_decisions/${aiName}_[task]_$(date +%Y%m%d).md\n`;
  handoff += `\`\`\`\n\n`;

  return handoff;
}

// Main
const args = parseArgs();
const handoff = generateInteractiveHandoff(args.ai, args.task, args.read, args.write);

const outputPath = path.join(vaultRoot, "tmp", `interactive_handoff_${args.ai}.md`);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, handoff);

console.log(`✓ Interactive handoff generated: ${outputPath}`);
