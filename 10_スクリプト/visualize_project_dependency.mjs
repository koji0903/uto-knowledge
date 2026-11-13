import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const dataLinkRoot = path.join(vaultRoot, "04_DataLink");

function loadDependencies() {
  const depsPath = path.join(dataLinkRoot, "project_dependencies.json");
  return JSON.parse(fs.readFileSync(depsPath, "utf8"));
}

function generateMermaidGraph(deps) {
  let mermaid = `graph TD\n`;

  // Add project nodes
  for (const proj of deps.projects) {
    const statusColor = {
      idea: "#E1F5FF",
      planning: "#FFF3E0",
      active: "#E8F5E9",
      paused: "#FFEBEE",
      done: "#F3E5F5",
    };

    const color = statusColor[proj.status] || "#F5F5F5";
    const label = `${proj.name}<br/>(${proj.duration_months}ヶ月)`;

    mermaid += `    ${proj.id}["<b>${label}</b>"]:::${proj.status}\n`;
  }

  // Add relationships
  for (const dep of deps.dependencies) {
    const typeArrow = {
      prerequisite: "-->|前提|",
      enabler: "-->|促進|",
      synergy: ".->|相乗|",
    };

    const arrow = typeArrow[dep.type] || "-->";
    const label = dep.reason ? `${arrow}<br/>${dep.reason}` : arrow;

    mermaid += `    ${dep.from}${arrow}${dep.to}\n`;
  }

  // Add styles
  mermaid += `\n    classDef planning fill:#FFF3E0,stroke:#FF9800,stroke-width:2px,color:#000\n`;
  mermaid += `    classDef active fill:#E8F5E9,stroke:#4CAF50,stroke-width:2px,color:#000\n`;
  mermaid += `    classDef idea fill:#E1F5FF,stroke:#2196F3,stroke-width:1px,color:#000\n`;
  mermaid += `    classDef done fill:#F3E5F5,stroke:#9C27B0,stroke-width:1px,color:#000\n`;

  return mermaid;
}

function generateMarkdownReport(deps) {
  let md = `# プロジェクト依存関係分析レポート

**生成日時:** ${new Date().toISOString()}

---

## クリティカルパス

**パス:** ${deps.critical_path_analysis.path.map(p => deps.projects.find(pr => pr.id === p).name).join(" → ")}

**総期間:** ${deps.critical_path_analysis.total_duration_months} ヶ月
**目標完了:** ${deps.critical_path_analysis.target_completion}
**バッファ:** ${deps.critical_path_analysis.buffer_months} ヶ月

### 依存関係図

\`\`\`mermaid
${generateMermaidGraph(deps)}
\`\`\`

---

## プロジェクト概要

| プロジェクト | 期間 | ステータス | 説明 |
|---|---|---|---|
`;

  for (const proj of deps.projects) {
    const duration = `${proj.duration_months}ヶ月`;
    md += `| ${proj.name} | ${duration} | ${proj.status} | ${proj.critical_path ? "🔴 クリティカルパス" : ""} |\n`;
  }

  md += "\n---\n\n";

  // Dependency details
  md += "## 依存関係の詳細\n\n";

  const prerequisites = deps.dependencies.filter(d => d.type === "prerequisite");
  const enablers = deps.dependencies.filter(d => d.type === "enabler");
  const synergies = deps.dependencies.filter(d => d.type === "synergy");

  if (prerequisites.length > 0) {
    md += "### 前提条件（完了必須）\n\n";
    for (const dep of prerequisites) {
      const fromProj = deps.projects.find(p => p.id === dep.from).name;
      const toProj = deps.projects.find(p => p.id === dep.to).name;
      md += `- **${fromProj}** → **${toProj}**\n`;
      md += `  - 理由: ${dep.reason}\n`;
      md += `  - ラグ: ${dep.lag_months}ヶ月\n\n`;
    }
  }

  if (enablers.length > 0) {
    md += "### 加速要因\n\n";
    for (const dep of enablers) {
      const fromProj = deps.projects.find(p => p.id === dep.from).name;
      const toProj = deps.projects.find(p => p.id === dep.to).name;
      md += `- **${fromProj}** が **${toProj}** を促進\n`;
      md += `  - ${dep.reason}\n\n`;
    }
  }

  if (synergies.length > 0) {
    md += "### 相乗効果\n\n";
    for (const dep of synergies) {
      const fromProj = deps.projects.find(p => p.id === dep.from).name;
      const toProj = deps.projects.find(p => p.id === dep.to).name;
      md += `- **${fromProj}** ↔ **${toProj}**\n`;
      md += `  - ${dep.reason}\n\n`;
    }
  }

  // Bottlenecks
  md += "---\n\n## ボトルネック分析\n\n";

  for (const bn of deps.critical_path_analysis.bottlenecks) {
    const riskEmoji = {
      high: "🔴",
      medium: "🟡",
      low: "🟢",
    };

    md += `### ${riskEmoji[bn.risk]} ${bn.project}\n\n`;
    md += `**タスク:** ${bn.task}\n`;
    md += `**期間:** ${bn.duration_months}ヶ月\n`;
    md += `**リスク:** ${bn.risk}\n`;
    md += `**対策:** ${bn.mitigation}\n\n`;
  }

  // Timeline
  md += "---\n\n## マイルストーンタイムライン\n\n";

  for (const milestone of deps.milestone_timeline) {
    md += `### ${milestone.date}\n`;
    md += `**${milestone.milestone}**\n\n`;
    md += `**成果物:**\n`;
    for (const deliverable of milestone.deliverables) {
      md += `- ${deliverable}\n`;
    }
    md += "\n";
  }

  // Resource sharing
  md += "---\n\n## リソース共有\n\n";

  for (const sharing of deps.resource_sharing) {
    md += `### ${sharing.resource}\n`;
    md += `**所有:** ${deps.projects.find(p => p.id === sharing.owner).name}\n`;
    md += `**共有先:** ${sharing.shared_with.map(id => deps.projects.find(p => p.id === id).name).join(", ")}\n`;
    md += `**方式:** ${sharing.sharing_type}\n\n`;
  }

  // Risk assessment
  md += "---\n\n## リスク評価\n\n";
  md += "| リスク項目 | 影響 | 確度 | 対策 |\n";
  md += "|---|---|---|---|\n";
  md += "| 生産者確保 (30社) | 高 | 高 | Q2に優先順位付け、個別折衝 |\n";
  md += "| ふるさと納税サイト連携 | 中 | 中 | 地域商社品揃えと並行 |\n";
  md += "| 学校跡地協議 | 高 | 中 | R4-12答弁を基盤に早期着手 |\n";
  md += "| 移住誘引効果 | 中 | 低 | 地域商社の雇用機会と連動 |\n";
  md += "| 教育プログラム開発 | 中 | 中 | 先行事例調査と外部講師確保 |\n\n";

  // Recommendations
  md += "---\n\n## AI による推奨アクション\n\n";
  md += "### Claude: ポリシー整合性確認\n";
  md += "- 各プロジェクトの政策カード参照の完全性チェック\n";
  md += "- 依存関係と L6（政策）レイヤ の整合性検証\n\n";

  md += "### Gemini: 外部環境調査\n";
  md += "- 類似自治体の「生産者確保」施策調査\n";
  md += "- ふるさと納税・返礼品市場の最新動向\n\n";

  md += "### ChatGPT: スクリプト自動化\n";
  md += "- 月次マイルストーン進捗レポート自動生成\n";
  md += "- リスク変化の自動検出と通知\n\n";

  md += "---\n";
  md += "*Generated by visualize_project_dependency.mjs*\n";

  return md;
}

function generateJsonReport(deps) {
  return {
    generated_at: new Date().toISOString(),
    critical_path: deps.critical_path_analysis.path,
    total_duration_months: deps.critical_path_analysis.total_duration_months,
    projects: deps.projects.length,
    dependencies: deps.dependencies.length,
    bottlenecks: deps.critical_path_analysis.bottlenecks.length,
    milestones: deps.milestone_timeline.length,
  };
}

function main() {
  console.log("Visualizing project dependencies...");

  const deps = loadDependencies();
  const mdReport = generateMarkdownReport(deps);
  const jsonReport = generateJsonReport(deps);

  const mdPath = path.join(vaultRoot, "tmp", "project_dependency_graph.md");
  const jsonPath = path.join(vaultRoot, "tmp", "project_dependency_analysis.json");

  fs.mkdirSync(path.dirname(mdPath), { recursive: true });
  fs.writeFileSync(mdPath, mdReport);
  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));

  console.log(`✓ Markdown report: ${path.relative(vaultRoot, mdPath)}`);
  console.log(`✓ JSON analysis: ${path.relative(vaultRoot, jsonPath)}`);
  console.log("");
  console.log("Dependency summary:");
  console.log(`  - Critical path: ${jsonReport.critical_path.length} projects`);
  console.log(`  - Duration: ${jsonReport.total_duration_months} months`);
  console.log(`  - Dependencies: ${jsonReport.dependencies}`);
  console.log(`  - Bottlenecks: ${jsonReport.bottlenecks}`);
  console.log("");
  console.log(mdReport);
}

main();
