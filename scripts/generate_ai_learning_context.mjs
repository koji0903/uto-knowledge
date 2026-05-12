import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

function getAIDecisions(aiName, limit = 3) {
  const aiDir = path.join(vaultRoot, "04_DataLink", "ai_decisions");
  if (!fs.existsSync(aiDir)) {
    return [];
  }

  const files = fs.readdirSync(aiDir)
    .filter((f) => f.startsWith(`${aiName}_`) && f.endsWith(".md"))
    .sort()
    .reverse()
    .slice(0, limit);

  return files.map((f) => {
    const fullPath = path.join(aiDir, f);
    const content = fs.readFileSync(fullPath, "utf-8");
    const title = content.split("\n")[0].replace(/^#+ /, "");
    return {
      file: f,
      title,
      path: `04_DataLink/ai_decisions/${f}`,
    };
  });
}

function generateContextForAI(targetAI) {
  const aiProfiles = {
    claude: {
      role: "政策分析、矛盾検出、設計レビュー",
      referenceSources: ["gemini", "chatgpt"],
      focusPoints: [
        "Gemini の市場調査結果をどう戦略に反映するか",
        "ChatGPT の実装実績から得られた教訓",
        "矛盾を検出したら即座に報告",
      ],
    },
    gemini: {
      role: "Google Drive、外部情報、最新情報確認",
      referenceSources: ["claude"],
      focusPoints: [
        "Claude の分析のどの部分を市場データで補足すべきか",
        "前提条件に矛盾がないか確認",
        "最新トレンドを指摘",
      ],
    },
    chatgpt: {
      role: "実装、検証、スクリプト、ドキュメント整備",
      referenceSources: ["claude", "gemini"],
      focusPoints: [
        "Claude と Gemini の成果をスクリプト化",
        "既存スクリプトとの互換性確認",
        "テスト実績を記録",
      ],
    },
  };

  const profile = aiProfiles[targetAI] || aiProfiles.claude;
  const now = new Date().toISOString();

  let context = `# ${targetAI.charAt(0).toUpperCase() + targetAI.slice(1)} 向け 学習コンテキスト\n\n`;
  context += `生成日時: ${now}\n`;
  context += `対象AI: ${targetAI}\n`;
  context += `役割: ${profile.role}\n\n`;

  // 参照すべき情報源
  context += `## 参照すべき直前の分析\n\n`;

  for (const sourceAI of profile.referenceSources) {
    const decisions = getAIDecisions(sourceAI, 3);
    if (decisions.length === 0) {
      context += `### ${sourceAI.charAt(0).toUpperCase() + sourceAI.slice(1)} の最新分析\n`;
      context += `（まだ記録がありません）\n\n`;
      continue;
    }

    context += `### ${sourceAI.charAt(0).toUpperCase() + sourceAI.slice(1)} の最新分析\n\n`;
    for (let i = 0; i < decisions.length; i++) {
      const d = decisions[i];
      context += `${i + 1}. [${d.title}](${d.path})\n`;
    }
    context += "\n";
  }

  // AI 別の推奨フォーカスポイント
  context += `## 今回の推奨フォーカスポイント\n\n`;
  for (const point of profile.focusPoints) {
    context += `- [ ] ${point}\n`;
  }
  context += "\n";

  // 直近の矛盾検出結果
  const conflictReportPath = path.join(vaultRoot, "tmp", "conflict_report.md");
  if (fs.existsSync(conflictReportPath)) {
    context += `## 検出されている矛盾\n\n`;
    const conflictContent = fs.readFileSync(conflictReportPath, "utf-8");
    const lines = conflictContent.split("\n");
    const summaryLine = lines.find((l) => l.includes("- HIGH:"));
    if (summaryLine) {
      context += `${summaryLine}\n\n`;
      context += `詳細は [tmp/conflict_report.md](tmp/conflict_report.md) を参照してください\n\n`;
    }
  }

  // AI 別のハンドオフテンプレート参照
  context += `## 参考: 標準的なハンドオフ形式\n\n`;
  context += `このコンテキストと合わせて、[mcp/ai_profiles/${targetAI}_profile.md](mcp/ai_profiles/${targetAI}_profile.md) を参照すると、`;
  context += `${targetAI} としての役割・強み・制約がより明確になります。\n\n`;

  // 今日のアクション
  context += `## 本日の推奨アクション\n\n`;
  context += `1. 上記の参照分析（${profile.referenceSources.join(", ")}）を読む\n`;
  context += `2. 検出された矛盾を確認\n`;
  context += `3. 自分の役割で補完・検証\n`;
  context += `4. 成果を 04_DataLink/ai_decisions/${targetAI}_[task]_[date].md に記録\n`;
  context += `5. 関連ドキュメント（project/decision/log）を更新\n`;
  context += `6. \`bash scripts/detect_ai_conflicts.sh\` で矛盾解決を確認\n\n`;

  return context;
}

// Main
const targetAI = process.argv[2] || "claude";

if (!["claude", "gemini", "chatgpt", "codex"].includes(targetAI)) {
  console.error(`Invalid AI: ${targetAI}. Use: claude, gemini, chatgpt, codex`);
  process.exit(1);
}

const context = generateContextForAI(targetAI);
const outputPath = path.join(vaultRoot, "tmp", `${targetAI}_learning_context.md`);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, context);

console.log(`✓ Learning context generated: ${outputPath}`);
