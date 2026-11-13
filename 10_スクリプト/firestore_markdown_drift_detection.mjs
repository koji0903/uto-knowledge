#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import { globSync } from "glob";
import yaml from "js-yaml";

/**
 * Firestore↔Markdown 差分検出スクリプト
 * Firestore のデータと Markdown ファイルの乖離を検出し、レポートを生成
 */

const DATALINK_DIR = "04_DataLink";
const OUTPUT_FILE = "tmp/drift_report.json";
const COLLECTIONS = ["producers", "products", "projects", "logs"];

// 簡易的なモック Firestore データ（実運用では Firestore SDK を使用）
const MOCK_FIRESTORE_DATA = {
  producers: [
    { id: "prodcr_001", updated: "2026-05-03" },
  ],
  products: [
    { id: "prod_001", updated: "2026-05-03" },
  ],
  projects: [],
  logs: [
    { id: "log_20260503_001", updated: "2026-05-03" },
  ],
};

interface DriftIssue {
  type: string;
  severity: "critical" | "warning" | "info";
  id?: string;
  path?: string;
  firestore_id?: string;
  markdown_id?: string;
  firestore_updated?: string;
  markdown_updated?: string;
  message: string;
}

interface DriftReport {
  generated_at: string;
  drift_detected: boolean;
  issues: DriftIssue[];
  summary: {
    total: number;
    critical: number;
    warning: number;
    info: number;
  };
  datalink_stats: Record<string, number>;
}

function extractFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  try {
    return yaml.load(match[1]) as Record<string, any>;
  } catch {
    return {};
  }
}

function getMarkdownFiles(subdir: string): string[] {
  const pattern = path.join(DATALINK_DIR, subdir, "*.md");
  return globSync(pattern);
}

function extractIdFromPath(filePath: string): string {
  return path.basename(filePath, ".md");
}

function checkFrontmatter(
  filePath: string,
  frontmatter: Record<string, any>
): DriftIssue[] {
  const issues: DriftIssue[] = [];
  const fileId = extractIdFromPath(filePath);

  // 必須フィールド確認
  const required = ["id", "type", "firestore_collection", "firestore_doc_id"];
  for (const field of required) {
    if (!frontmatter[field]) {
      issues.push({
        type: "missing_frontmatter_field",
        severity: "warning",
        path: filePath,
        message: `frontmatter に ${field} が欠落している`,
      });
    }
  }

  // id と firestore_doc_id の一致確認
  if (frontmatter.id && frontmatter.id !== fileId) {
    issues.push({
      type: "id_filename_mismatch",
      severity: "warning",
      path: filePath,
      markdown_id: frontmatter.id,
      firestore_id: fileId,
      message: `Markdown の id (${frontmatter.id}) がファイル名 (${fileId}) と不一致`,
    });
  }

  return issues;
}

function compareSyncStatus(
  markdown: Map<string, any>,
  firestore: Map<string, any>
): DriftIssue[] {
  const issues: DriftIssue[] = [];

  // Markdown にはあるが Firestore にない
  for (const [id, mdData] of markdown) {
    if (!firestore.has(id)) {
      issues.push({
        type: "missing_in_firestore",
        severity: "warning",
        markdown_id: id,
        path: mdData.path,
        message: `Markdown に ${id} が存在するが、Firestore に record がない`,
      });
    }
  }

  // Firestore にはあるが Markdown にない
  for (const [id] of firestore) {
    if (!markdown.has(id)) {
      issues.push({
        type: "missing_in_markdown",
        severity: "critical",
        firestore_id: id,
        message: `Firestore に ${id} が存在するが、Markdown ファイルがない`,
      });
    }
  }

  return issues;
}

function checkSecurityIssues(): DriftIssue[] {
  const issues: DriftIssue[] = [];

  // .env が Git に追加されていないか確認
  const gitFiles = globSync(".git/index/**/*");
  const sensitiveFiles = [".env", ".firebaserc", "serviceAccount"];

  for (const file of sensitiveFiles) {
    if (gitFiles.some((f) => f.includes(file))) {
      issues.push({
        type: "security_issue",
        severity: "critical",
        message: `セキュリティリスク: ${file} が Git に追加されている可能性`,
      });
    }
  }

  // Markdown に秘密情報が含まれていないか確認
  const mdFiles = globSync(`${DATALINK_DIR}/**/*.md`);
  for (const file of mdFiles) {
    const content = fs.readFileSync(file, "utf-8");
    if (
      /AKIA|sk_live_|sk_test_|sk-|ghp_|glpat_/.test(content)
    ) {
      issues.push({
        type: "secret_in_markdown",
        severity: "critical",
        path: file,
        message: `秘密情報（APIキーなど）が Markdown に含まれている可能性`,
      });
    }
  }

  return issues;
}

function generateReport(): DriftReport {
  const allIssues: DriftIssue[] = [];
  const stats: Record<string, number> = {};

  console.log("🔍 Firestore↔Markdown 差分検出開始...\n");

  // 各コレクションの Markdown ファイルを確認
  for (const collection of COLLECTIONS) {
    const subdir = collection;
    const mdFiles = getMarkdownFiles(subdir);
    stats[collection] = mdFiles.length;

    console.log(
      `📁 ${collection}: ${mdFiles.length} files found`
    );

    const mdMap = new Map<string, any>();
    const fsMap = new Map<string, any>();

    // Markdown ファイルをスキャン
    for (const filePath of mdFiles) {
      const content = fs.readFileSync(filePath, "utf-8");
      const frontmatter = extractFrontmatter(content);
      const id = frontmatter.id || extractIdFromPath(filePath);

      mdMap.set(id, {
        path: filePath,
        updated: frontmatter.updated || frontmatter.created,
        ...frontmatter,
      });

      // frontmatter チェック
      allIssues.push(...checkFrontmatter(filePath, frontmatter));
    }

    // Firestore データをモック (実運用では SDK から取得)
    const fsData = MOCK_FIRESTORE_DATA[collection] || [];
    for (const doc of fsData) {
      fsMap.set(doc.id, doc);
    }

    // 同期状態を比較
    allIssues.push(...compareSyncStatus(mdMap, fsMap));
  }

  // セキュリティチェック
  console.log("\n🔐 セキュリティチェック...");
  allIssues.push(...checkSecurityIssues());

  // レポート生成
  const summary = {
    total: allIssues.length,
    critical: allIssues.filter((i) => i.severity === "critical").length,
    warning: allIssues.filter((i) => i.severity === "warning").length,
    info: allIssues.filter((i) => i.severity === "info").length,
  };

  const report: DriftReport = {
    generated_at: new Date().toISOString(),
    drift_detected: summary.critical > 0,
    issues: allIssues,
    summary,
    datalink_stats: stats,
  };

  return report;
}

// メイン処理
try {
  const report = generateReport();

  // ファイルに出力
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));

  // 結果をコンソール出力
  console.log("\n✅ 差分検出完了\n");
  console.log(`📊 総Issue数: ${report.summary.total}`);
  console.log(`🔴 Critical: ${report.summary.critical}`);
  console.log(`🟡 Warning: ${report.summary.warning}`);
  console.log(`🟢 Info: ${report.summary.info}`);
  console.log(`\n📄 レポート: ${OUTPUT_FILE}`);

  if (report.drift_detected) {
    console.log(
      "\n⚠️  Critical Issue が検出されました。確認してください。"
    );
    process.exit(1);
  }
} catch (error) {
  console.error("❌ エラー:", error);
  process.exit(1);
}
