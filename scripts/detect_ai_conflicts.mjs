import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

function parseValue(raw) {
  const value = raw.trim();
  if (value === "") return "";
  if (value === "[]") return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    return inner ? inner.split(",").map((item) => item.trim()).filter(Boolean) : [];
  }
  return value;
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) {
    return null;
  }

  const end = markdown.indexOf("\n---", 4);
  if (end < 0) {
    return null;
  }

  const data = {};
  const block = markdown.slice(4, end).trim();

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);
    data[key] = parseValue(value);
  }

  return data;
}

function listMarkdownFiles(dir) {
  const files = [];
  const stack = [dir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function getAllDocuments() {
  const docs = {};
  const dataLinkDir = path.join(vaultRoot, "04_DataLink");

  const collections = ["decisions", "projects", "producers", "products", "logs"];
  for (const collection of collections) {
    const collectionDir = path.join(dataLinkDir, collection);
    if (!fs.existsSync(collectionDir)) continue;

    const files = listMarkdownFiles(collectionDir);
    for (const file of files) {
      const content = fs.readFileSync(file, "utf-8");
      const fm = parseFrontmatter(content);
      if (fm && fm.id) {
        docs[fm.id] = {
          file,
          collection,
          frontmatter: fm,
          content,
        };
      }
    }
  }

  return docs;
}

function getRecentChanges(hoursBack = 24) {
  try {
    const since = new Date(Date.now() - hoursBack * 60 * 60 * 1000).toISOString();
    const cmd = `git -C "${vaultRoot}" log --since="${since}" --name-only --pretty=format: -- 04_DataLink`;
    const output = execSync(cmd, { encoding: "utf-8" });
    const files = output
      .split("\n")
      .filter((f) => f.trim() && f.endsWith(".md"));
    return [...new Set(files)];
  } catch {
    return [];
  }
}

function extractReferences(frontmatter) {
  const refs = [];
  for (const key of Object.keys(frontmatter)) {
    if (key.startsWith("related_")) {
      const values = frontmatter[key];
      if (Array.isArray(values)) {
        refs.push(...values);
      }
    }
  }
  return refs;
}

function extractNumericTargets(content) {
  const patterns = [
    /target_revenue[:\s]+.*?(¥[\d,]+[M|B]?)/g,
    /revenue_estimate[:\s]+.*?(¥[\d,]+[M|B]?)/g,
    /target_population[:\s]+.*?([\d,]+)/g,
  ];

  const targets = [];
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      targets.push(match[1]);
    }
  }
  return targets;
}

class ConflictDetector {
  constructor(documents) {
    this.documents = documents;
    this.conflicts = [];
  }

  detectTypeA() {
    // 目標値矛盾
    const projects = Object.values(this.documents).filter((d) => d.collection === "projects");

    for (const project of projects) {
      const relatedPolicies = extractReferences(project.frontmatter).filter((ref) =>
        ref.startsWith("pc_")
      );

      if (relatedPolicies.length === 0) continue;

      const projectRevenue = project.frontmatter.target_revenue;
      if (!projectRevenue) continue;

      for (const policyId of relatedPolicies) {
        const policy = Object.values(this.documents).find((d) =>
          d.file.includes(`policy_cards`) && d.frontmatter?.id === policyId
        );

        if (!policy) continue;

        const policyRevenue = policy.frontmatter.target_revenue;
        if (!policyRevenue) continue;

        // 簡易的な比較（数字抽出）
        const projNum = parseFloat(projectRevenue.toString().replace(/[^0-9.]/g, ""));
        const policyNum = parseFloat(policyRevenue.toString().replace(/[^0-9.]/g, ""));

        if (projNum && policyNum && Math.abs(projNum - policyNum) / Math.max(projNum, policyNum) > 0.5) {
          this.conflicts.push({
            type: "A",
            priority: "HIGH",
            title: "目標値矛盾",
            items: [
              `${project.frontmatter.id} (project) → ${projectRevenue}`,
              `${policyId} (policy) → ${policyRevenue}`,
            ],
            reason: "同一プロジェクトの関連政策カードとの目標値が大きく乖離",
            action: "Claude: どちらが正確か確認してください。Gemini: 市場データで根拠確認。",
          });
        }
      }
    }
  }

  detectTypeB() {
    // 状態遷移矛盾
    const validTransitions = {
      idea: ["planning", "paused"],
      planning: ["active", "paused", "idea"],
      active: ["done", "paused"],
      done: [],
      paused: ["planning", "active", "done"],
    };

    // 簡易版：status フィールドの存在確認のみ
    for (const doc of Object.values(this.documents)) {
      if (!doc.frontmatter.status) {
        this.conflicts.push({
          type: "B",
          priority: "MEDIUM",
          title: "状態未定義",
          items: [`${doc.frontmatter.id} (${doc.collection})`],
          reason: "status フィールドが定義されていない",
          action: "status を [idea|planning|active|done|paused] から選択してください。",
        });
      }
    }
  }

  detectTypeC() {
    // 参照矛盾
    for (const doc of Object.values(this.documents)) {
      const refs = extractReferences(doc.frontmatter);

      for (const ref of refs) {
        const refExists = Object.values(this.documents).some((d) => d.frontmatter.id === ref);

        if (!refExists) {
          this.conflicts.push({
            type: "C",
            priority: "MEDIUM",
            title: "参照矛盾（存在しないドキュメント）",
            items: [`${doc.frontmatter.id} → ${ref} (不在)`],
            reason: `参照先ドキュメント '${ref}' が見つかりません`,
            action: `正しい ID に修正するか、参照を削除してください。`,
          });
        }
      }
    }
  }

  detectTypeD() {
    // 相互参照矛盾（一方向のみ）
    const excludeTypes = ["evidence", "log"];

    for (const [docId, doc] of Object.entries(this.documents)) {
      if (excludeTypes.includes(doc.frontmatter.type)) continue;

      const refs = extractReferences(doc.frontmatter);
      for (const refId of refs) {
        const refDoc = this.documents[refId];
        if (!refDoc) continue;
        if (excludeTypes.includes(refDoc.frontmatter.type)) continue;

        const backRefs = extractReferences(refDoc.frontmatter);
        if (!backRefs.includes(docId)) {
          // 一方向参照
          this.conflicts.push({
            type: "D",
            priority: "LOW",
            title: "一方向参照",
            items: [`${docId} → ${refId}`, `${refId} ↛ ${docId}`],
            reason: "A が B を参照していますが、B が A を参照していません",
            action: "B を更新して A への参照を追加するか、A の参照を削除してください。",
          });
        }
      }
    }
  }

  detectTypeE() {
    // タイムスタンプ矛盾
    for (const doc of Object.values(this.documents)) {
      const refs = extractReferences(doc.frontmatter);
      const created = new Date(doc.frontmatter.created || 0);

      for (const refId of refs) {
        const refDoc = this.documents[refId];
        if (!refDoc) continue;

        const refCreated = new Date(refDoc.frontmatter.created || 0);
        if (refCreated > created) {
          this.conflicts.push({
            type: "E",
            priority: "MEDIUM",
            title: "タイムスタンプ矛盾",
            items: [
              `${doc.frontmatter.id} created: ${doc.frontmatter.created}`,
              `${refId} created: ${refDoc.frontmatter.created}`,
            ],
            reason: "参照先ドキュメントが参照元より後に作成されている（因果関係の矛盾）",
            action: "タイムスタンプを確認してください。意図的な場合は OK です。",
          });
        }
      }
    }
  }

  detectAll() {
    this.detectTypeA();
    this.detectTypeB();
    this.detectTypeC();
    this.detectTypeD();
    this.detectTypeE();
    return this.conflicts;
  }

  generateReport() {
    const now = new Date().toISOString();
    const priorityCounts = {
      HIGH: this.conflicts.filter((c) => c.priority === "HIGH").length,
      MEDIUM: this.conflicts.filter((c) => c.priority === "MEDIUM").length,
      LOW: this.conflicts.filter((c) => c.priority === "LOW").length,
    };

    let report = `# AI間矛盾検出レポート\n\n`;
    report += `生成日時: ${now}\n`;
    report += `検出件数: ${this.conflicts.length}\n`;
    report += `- HIGH: ${priorityCounts.HIGH}件、MEDIUM: ${priorityCounts.MEDIUM}件、LOW: ${priorityCounts.LOW}件\n\n`;

    // 優先度順でソート
    const sorted = this.conflicts.sort((a, b) => {
      const order = { HIGH: 0, MEDIUM: 1, LOW: 2 };
      return order[a.priority] - order[b.priority];
    });

    report += `## 詳細\n\n`;
    for (let i = 0; i < sorted.length; i++) {
      const conflict = sorted[i];
      report += `### [${conflict.priority}] タイプ${conflict.type}: ${conflict.title} (#${i + 1})\n`;
      report += `**矛盾ペア:**\n`;
      for (const item of conflict.items) {
        report += `- ${item}\n`;
      }
      report += `\n**分析:**\n${conflict.reason}\n\n`;
      report += `**推奨アクション:**\n${conflict.action}\n\n`;
      report += `---\n\n`;
    }

    return report;
  }
}

// Main
const docs = getAllDocuments();
const detector = new ConflictDetector(docs);
detector.detectAll();
const report = detector.generateReport();

const reportPath = path.join(vaultRoot, "tmp", "conflict_report.md");
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, report);

console.log(`✓ Conflict detection completed: ${reportPath}`);
console.log(`Total conflicts: ${detector.conflicts.length}`);
