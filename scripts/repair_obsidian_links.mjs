import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

function findMarkdownFiles(dir) {
  const files = [];
  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      if ([".git", "node_modules", ".claude", "tmp"].includes(entry.name))
        continue;
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

function parseMarkdown(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  const frontmatter = {};

  if (frontmatterMatch) {
    const lines = frontmatterMatch[1].split("\n");
    for (const line of lines) {
      const match = line.match(/^(\w+):\s*(.*)/);
      if (match) {
        frontmatter[match[1]] = match[2];
      }
    }
  }

  return { frontmatter, content };
}

function addMissingHomeLinks(orphans) {
  const repairs = [];

  const homeFiles = [
    path.join(vaultRoot, "ホーム.md"),
    path.join(vaultRoot, "README.md"),
    path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/index.md"),
  ];

  for (const homeFile of homeFiles) {
    if (!fs.existsSync(homeFile)) continue;

    let content = fs.readFileSync(homeFile, "utf8");
    const orphanNames = orphans.map(o =>
      path.basename(o.path, ".md")
    );

    // Find section to add links
    const categoryMatch = content.match(/(## Templates?|## 関連|## リンク)/);

    for (const orphan of orphans) {
      const orphanName = path.basename(orphan.path, ".md");
      const relPath = path.relative(vaultRoot, orphan.path);

      // Skip if already linked
      if (content.includes(`[[${orphanName}]]`) ||
          content.includes(`[[${relPath}]]`)) {
        continue;
      }

      // Add link
      const linkText = `[[${relPath}|${orphanName}]]`;

      if (categoryMatch && orphan.path.includes("template")) {
        const insertPos = content.indexOf(categoryMatch[0]) +
          categoryMatch[0].length;
        content =
          content.slice(0, insertPos) +
          `\n- ${linkText}` +
          content.slice(insertPos);
        repairs.push({
          file: homeFile,
          action: "add_template_link",
          link: linkText,
        });
      } else if (orphan.path.includes("Assembly")) {
        const insertPos = content.lastIndexOf("\n") + 1;
        content = content.slice(0, insertPos) + `\n- ${linkText}\n`;
        repairs.push({
          file: homeFile,
          action: "add_assembly_link",
          link: linkText,
        });
      }
    }

    if (!dryRun && repairs.length > 0) {
      fs.writeFileSync(homeFile, content);
    }
  }

  return repairs;
}

function createAssemblyIndex() {
  const assemblyDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY");
  const indexFile = path.join(assemblyDir, "index.md");

  if (fs.existsSync(indexFile)) {
    return null;
  }

  let content = `# 議会活動ナレッジ

**構成:**
- [[members/|議員プロフィール]]
- [[activities/|一般質問記録]]
- [[policy_links/|政策カード連結]]

## 議員一覧

`;

  const membersDir = path.join(assemblyDir, "members");
  if (fs.existsSync(membersDir)) {
    const members = fs
      .readdirSync(membersDir)
      .filter(f => f.endsWith(".md") && f !== "index.md")
      .map(f => `- [[members/${f.slice(0, -3)}]]`);
    content += members.join("\n") + "\n\n";
  }

  content += `## 一般質問

`;

  const activitiesDir = path.join(assemblyDir, "activities");
  if (fs.existsSync(activitiesDir)) {
    const activities = fs
      .readdirSync(activitiesDir)
      .filter(f => f.endsWith(".md") && f !== "index.md")
      .map(f => `- [[activities/${f.slice(0, -3)}]]`);
    content += activities.join("\n");
  }

  content += "\n";

  if (!dryRun) {
    fs.writeFileSync(indexFile, content);
  }

  return {
    file: indexFile,
    action: "create_assembly_index",
    lines: content.split("\n").length,
  };
}

function createMCPIndex() {
  const mcpDir = path.join(vaultRoot, "mcp/ai_profiles");
  const indexFile = path.join(mcpDir, "index.md");

  if (fs.existsSync(indexFile) &&
      fs.readFileSync(indexFile, "utf8").length > 500) {
    return null;
  }

  let content = `# AI Profiles & Configuration

## AI 別プロファイル

- [[claude_profile|Claude]]
- [[gemini_profile|Gemini]]
- [[chatgpt_profile|ChatGPT / Codex]]

## ハンドオフ & ガイドライン

- [[handoff_prompt|AIハンドオフプロンプト]]
- [[reference_guideline|AI間参照ガイド]]
- [[task_router|タスク ルータ]]
- [[conflict_detector|矛盾検出ロジック]]

## 関連ドキュメント

- [[../README|MCP README]]
- [[../../AGENTS|AI運用ガイド]]

`;

  if (!dryRun) {
    fs.writeFileSync(indexFile, content);
  }

  return {
    file: indexFile,
    action: "create_mcp_index",
    lines: content.split("\n").length,
  };
}

function createTemplateIndex() {
  const templateDir = path.join(vaultRoot, "05_Templates");
  const indexFile = path.join(templateDir, "index.md");

  if (fs.existsSync(indexFile) &&
      fs.readFileSync(indexFile, "utf8").length > 300) {
    return null;
  }

  let content = `# DataLink Templates

## ドキュメント種別別テンプレート

- [[template_datalink_decision|決定（Decision）]]
- [[template_datalink_project|プロジェクト（Project）]]
- [[template_datalink_producer|生産者（Producer）]]
- [[template_datalink_product|産品（Product）]]
- [[template_datalink_log|ログ（Log）]]

## 使用方法

各テンプレートをコピーして、\`04_DataLink/\` の適切なフォルダに保存してください。

`;

  if (!dryRun) {
    fs.writeFileSync(indexFile, content);
  }

  return {
    file: indexFile,
    action: "create_template_index",
    lines: content.split("\n").length,
  };
}

function main() {
  console.log("Repairing Obsidian knowledge links...\n");

  if (dryRun) {
    console.log("[DRY RUN] No changes will be made.\n");
  }

  const files = findMarkdownFiles(vaultRoot);
  const orphans = [
    "04_DataLink/01_ASSEMBLY/_templates/assembly_question_template.md",
    "04_DataLink/01_ASSEMBLY/_templates/template_assembly_activity.md",
    "04_DataLink/01_ASSEMBLY/_templates/template_assembly_member.md",
    "04_DataLink/01_ASSEMBLY/activities/hijikuro_general_questions_overview.md",
    "04_DataLink/01_ASSEMBLY/members/hijikuro_koji.md",
    "05_Templates/template_datalink_decision.md",
    "05_Templates/template_datalink_log.md",
    "05_Templates/template_datalink_producer.md",
    "05_Templates/template_datalink_product.md",
    "05_Templates/template_datalink_project.md",
    "mcp/ai_profiles/conflict_detector.md",
    "mcp/ai_profiles/handoff_prompt.md",
    "mcp/ai_profiles/reference_guideline.md",
    "mcp/ai_profiles/task_router.md",
  ]
    .map(p => ({ path: path.join(vaultRoot, p) }))
    .filter(o => fs.existsSync(o.path));

  const repairs = [];

  // Add home links
  const homeRepairs = addMissingHomeLinks(orphans);
  repairs.push(...homeRepairs);

  // Create index files
  const assemblyIndex = createAssemblyIndex();
  if (assemblyIndex) repairs.push(assemblyIndex);

  const mcpIndex = createMCPIndex();
  if (mcpIndex) repairs.push(mcpIndex);

  const templateIndex = createTemplateIndex();
  if (templateIndex) repairs.push(templateIndex);

  // Report
  console.log("Link Repair Summary\n");
  console.log(`Orphans found: ${orphans.length}`);
  console.log(`Repairs proposed: ${repairs.length}\n`);

  for (const repair of repairs) {
    const action =
      {
        add_template_link: "Add template link",
        add_assembly_link: "Add assembly link",
        create_assembly_index: "Create assembly index",
        create_mcp_index: "Create MCP index",
        create_template_index: "Create template index",
      }[repair.action] || repair.action;

    const target = repair.file ? path.relative(vaultRoot, repair.file) : repair.link;
    console.log(`✓ ${action}: ${target}`);
  }

  console.log("");
  if (dryRun) {
    console.log("Run without --dry-run to apply changes");
  } else {
    console.log(`Applied ${repairs.length} repairs`);
  }
}

main();
