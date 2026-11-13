import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

function findMarkdownFiles(dir, excludeDirs = [".git", "node_modules", ".claude"]) {
  const files = [];

  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      if (excludeDirs.includes(entry.name)) continue;

      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files.sort();
}

function extractMetadata(markdown, filePath) {
  const frontmatter = {};
  const links = [];
  const headers = [];
  let isInFrontmatter = false;
  let frontmatterEnd = 0;

  const lines = markdown.split("\n");

  // Parse frontmatter
  if (lines[0] === "---") {
    isInFrontmatter = true;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") {
        frontmatterEnd = i;
        break;
      }
      const match = lines[i].match(/^(\w+):\s*(.*)/);
      if (match) {
        frontmatter[match[1]] = match[2];
      }
    }
  }

  // Extract content after frontmatter
  const content = lines.slice(frontmatterEnd + 1).join("\n");

  // Extract wikilinks [[...]]
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
  let match;
  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const linkText = match[1];
    const [target, alias] = linkText.includes("|")
      ? linkText.split("|")
      : [linkText, linkText];

    links.push({
      target: target.trim(),
      alias: alias.trim(),
      text: match[0],
    });
  }

  // Extract markdown links [...](...)
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    links.push({
      target: match[2],
      alias: match[1],
      text: match[0],
      type: "markdown",
    });
  }

  // Extract headers
  const headerRegex = /^(#{1,6})\s+(.+)$/gm;
  while ((match = headerRegex.exec(content)) !== null) {
    headers.push({
      level: match[1].length,
      text: match[2],
    });
  }

  return {
    path: filePath,
    fileName: path.basename(filePath),
    dir: path.dirname(filePath),
    frontmatter,
    links,
    headers,
    size: markdown.length,
    lineCount: lines.length,
  };
}

function analyzeKnowledge(files) {
  const docs = [];
  const allLinks = new Map(); // target -> sources
  const docsByName = new Map();
  const orphans = [];
  const hubs = [];

  console.log(`Analyzing ${files.length} files...`);

  // Parse all files
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const metadata = extractMetadata(content, file);
    docs.push(metadata);

    const relPath = path.relative(vaultRoot, file);
    docsByName.set(metadata.fileName.replace(".md", ""), metadata);

    // Track outgoing links
    for (const link of metadata.links) {
      if (!allLinks.has(link.target)) {
        allLinks.set(link.target, []);
      }
      allLinks.get(link.target).push(metadata.fileName);
    }
  }

  // Identify orphans (no incoming links)
  for (const doc of docs) {
    const fileName = doc.fileName.replace(".md", "");
    if (!allLinks.has(fileName) && !allLinks.has(doc.fileName)) {
      orphans.push(doc);
    }
  }

  // Identify hubs (many incoming links)
  for (const [target, sources] of allLinks) {
    if (sources.length >= 3) {
      const score = sources.length;
      hubs.push({
        target,
        incomingCount: sources.length,
        sources: sources.slice(0, 5),
      });
    }
  }

  hubs.sort((a, b) => b.incomingCount - a.incomingCount);

  return {
    docs,
    docCount: docs.length,
    totalLinks: Array.from(allLinks.values()).flat().length,
    uniqueTargets: allLinks.size,
    orphans,
    hubs,
    allLinks,
    docsByName,
  };
}

function categorizeDocuments(docs) {
  const categories = {
    datalink: [],
    policy: [],
    projects: [],
    logs: [],
    templates: [],
    config: [],
    home: [],
    other: [],
  };

  for (const doc of docs) {
    const path = doc.path.toLowerCase();

    if (path.includes("04_datalink")) categories.datalink.push(doc);
    else if (path.includes("policy") || path.includes("02_policy"))
      categories.policy.push(doc);
    else if (path.includes("project")) categories.projects.push(doc);
    else if (path.includes("log")) categories.logs.push(doc);
    else if (path.includes("template") || path.includes("06_templates"))
      categories.templates.push(doc);
    else if (
      path.includes("agent") ||
      path.includes("mcp") ||
      path.includes("script")
    )
      categories.config.push(doc);
    else if (
      doc.fileName === "README.md" ||
      doc.fileName === "ホーム.md" ||
      doc.fileName.includes("index")
    )
      categories.home.push(doc);
    else categories.other.push(doc);
  }

  return categories;
}

function generateReport(analysis) {
  const categories = categorizeDocuments(analysis.docs);

  let md = `# Obsidian ナレッジ分析レポート

**生成日時:** ${new Date().toISOString()}

---

## 📊 統計サマリー

| 指標 | 数値 |
|---|---|
| 総ドキュメント数 | ${analysis.docCount} |
| 総リンク数 | ${analysis.totalLinks} |
| ユニークリンク対象 | ${analysis.uniqueTargets} |
| ハブドキュメント | ${analysis.hubs.length} |
| 孤立ドキュメント | ${analysis.orphans.length} |

---

## 📚 カテゴリ別分類

`;

  for (const [category, docs] of Object.entries(categories)) {
    if (docs.length === 0) continue;

    const categoryLabel = {
      datalink: "🔗 DataLink（ナレッジベース）",
      policy: "📋 政策カード（L6層）",
      projects: "🎯 プロジェクト",
      logs: "📝 ログ・記録",
      templates: "📄 テンプレート",
      config: "⚙️ 設定・システム",
      home: "🏠 ホーム・インデックス",
      other: "🔹 その他",
    };

    md += `### ${categoryLabel[category]}\n\n`;
    md += `**ドキュメント数:** ${docs.length}\n\n`;

    for (const doc of docs.slice(0, 10)) {
      const relPath = path.relative(vaultRoot, doc.path);
      const linkCount = doc.links.length;
      md += `- \`${relPath}\` (リンク: ${linkCount})\n`;
    }

    if (docs.length > 10) {
      md += `- ... 他 ${docs.length - 10} 個\n`;
    }

    md += "\n";
  }

  // Hub documents
  if (analysis.hubs.length > 0) {
    md += `---\n\n## 🌟 ハブドキュメント（多く参照されている）\n\n`;
    md += `| ドキュメント | 参照数 | 参照元 |\n`;
    md += `|---|---|---|\n`;

    for (const hub of analysis.hubs.slice(0, 15)) {
      const sources = hub.sources.join(", ");
      md += `| ${hub.target} | ${hub.incomingCount} | ${sources}${hub.sources.length < hub.incomingCount ? ", ..." : ""} |\n`;
    }

    md += "\n";
  }

  // Orphan documents
  if (analysis.orphans.length > 0) {
    md += `---\n\n## 🔹 孤立ドキュメント（リンクされていない）\n\n`;
    md += `**${analysis.orphans.length} 個のドキュメントが他からリンクされていません。**\n\n`;

    for (const orphan of analysis.orphans.slice(0, 20)) {
      const relPath = path.relative(vaultRoot, orphan.path);
      const outgoingLinks = orphan.links.length;
      md += `- \`${relPath}\` (発信リンク: ${outgoingLinks})\n`;
    }

    if (analysis.orphans.length > 20) {
      md += `- ... 他 ${analysis.orphans.length - 20} 個\n`;
    }

    md += "\n";
  }

  // Recommendations
  md += `---\n\n## 💡 改善推奨\n\n`;
  md += `### 1. 孤立ドキュメント対策\n\n`;
  md += `孤立ドキュメントはナレッジベースの一部として活用されていません。以下の対応を検討：\n\n`;
  md += `- [ ] ホーム（index.md）から参照\n`;
  md += `- [ ] 適切なハブドキュメントから参照\n`;
  md += `- [ ] 不要なドキュメントの削除\n\n`;

  md += `### 2. ハブドキュメント強化\n\n`;
  md += `以下のハブドキュメントに関連リンクをさらに追加：\n\n`;
  for (const hub of analysis.hubs.slice(0, 5)) {
    md += `- [ ] \`${hub.target}\` (現在 ${hub.incomingCount} 個から参照)\n`;
  }

  md += `\n### 3. リンク構造の最適化\n\n`;
  md += `- [ ] 双方向リンクの追加（参照元から参照先へのリンク）\n`;
  md += `- [ ] カテゴリ内のクロスリンク強化\n`;
  md += `- [ ] タグの標準化\n\n`;

  md += `---\n\n## 📈 次のステップ\n\n`;
  md += `1. 孤立ドキュメント ${analysis.orphans.length} 個の精査\n`;
  md += `2. ハブドキュメントの中央化\n`;
  md += `3. リンク構造の自動修復スクリプト実行\n`;
  md += `4. メタデータ（frontmatter）の標準化\n\n`;

  md += `---\n`;
  md += `*Generated by analyze_obsidian_knowledge.mjs*\n`;

  return md;
}

function main() {
  console.log("Analyzing Obsidian knowledge structure...\n");

  const files = findMarkdownFiles(vaultRoot);
  const analysis = analyzeKnowledge(files);
  const report = generateReport(analysis);

  // Save report
  const reportPath = path.join(vaultRoot, "tmp", "obsidian_analysis.md");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, report);

  // Save detailed JSON
  const jsonPath = path.join(vaultRoot, "tmp", "obsidian_analysis.json");
  const jsonReport = {
    generated: new Date().toISOString(),
    stats: {
      totalDocs: analysis.docCount,
      totalLinks: analysis.totalLinks,
      uniqueTargets: analysis.uniqueTargets,
      hubs: analysis.hubs.length,
      orphans: analysis.orphans.length,
    },
    orphans: analysis.orphans.map(o => ({
      path: path.relative(vaultRoot, o.path),
      outgoingLinks: o.links.length,
    })),
    hubs: analysis.hubs.slice(0, 20),
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));

  console.log(`✓ Analysis complete`);
  console.log(`✓ Report: ${path.relative(vaultRoot, reportPath)}`);
  console.log(`✓ Details: ${path.relative(vaultRoot, jsonPath)}`);
  console.log("");
  console.log(report);
}

main();
