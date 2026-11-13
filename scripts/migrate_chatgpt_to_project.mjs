#!/usr/bin/env node

/**
 * migrate_chatgpt_to_project.mjs
 * Inbox 内の ChatGPT インポートを本体位置に移行
 *
 * 用途：
 *   node scripts/migrate_chatgpt_to_project.mjs --source 00_Inbox/chatgpt_import_*.md --target-type project --target-id prj_001
 *
 * ターゲットタイプ：
 *   - project: 04_DataLink/projects/prj_###.md
 *   - knowledge: 03_Knowledge/{domain}/know_###.md
 *   - decision: 04_DataLink/decisions/dec_###.md
 *   - archived: 99_Archive/...
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// CLI arguments
const args = process.argv.slice(2);
let sourceFile = null;
let targetType = null;
let targetId = null;
let domain = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--source' && args[i + 1]) sourceFile = args[++i];
  if (args[i] === '--target-type' && args[i + 1]) targetType = args[++i];
  if (args[i] === '--target-id' && args[i + 1]) targetId = args[++i];
  if (args[i] === '--domain' && args[i + 1]) domain = args[++i];
}

if (!sourceFile || !targetType) {
  console.error(
    '❌ 使用方法：node migrate_chatgpt_to_project.mjs --source <file> --target-type <type> [--target-id <id>] [--domain <domain>]'
  );
  process.exit(1);
}

// Color codes
const colors = {
  reset: '\x1b[0m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
};

// Frontmatter パーサー
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { matter: {}, body: content };

  const matterStr = match[1];
  const body = content.slice(match[0].length);

  // 簡易 YAML パーサー
  const matter = {};
  for (const line of matterStr.split('\n')) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      matter[key.trim()] = valueParts.join(':').trim();
    }
  }

  return { matter, body };
}

function generateId(type) {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `${type}_${timestamp}_${random}`;
}

function generateProjectFrontmatter(sourceId, title) {
  const id = targetId || generateId('prj');
  return `---
id: ${id}
type: project
firestore_collection: projects
firestore_doc_id: ${id}
title: ${title}
source: chatgpt_import
source_id: ${sourceId}
created: ${new Date().toISOString().split('T')[0]}
status: active
tags: [imported_from_chatgpt]
---`;
}

function generateKnowledgeFrontmatter(sourceId, title) {
  const id = generateId('know');
  const selectedDomain = domain || 'tech';
  return `---
id: ${id}
type: knowledge_note
domain: ${selectedDomain}
source: chatgpt_import
source_id: ${sourceId}
created: ${new Date().toISOString().split('T')[0]}
status: active
tags: [chatgpt, ${selectedDomain}]
---`;
}

function generateDecisionFrontmatter(sourceId, title) {
  const id = targetId || generateId('dec');
  return `---
id: ${id}
type: decision
firestore_collection: decisions
firestore_doc_id: ${id}
decision_category: strategy
priority: medium
status: approved
proposed_by: chatgpt_import
proposed_at: ${new Date().toISOString().split('T')[0]}
source_id: ${sourceId}
tags: [imported_from_chatgpt]
---`;
}

async function migrate() {
  log.info(`\n🚀 移行処理開始\n`);

  // ソースファイル読み込み
  const fullSourcePath = path.join(projectRoot, sourceFile);
  log.info(`ソースファイル読み込み: ${sourceFile}`);

  if (!fs.existsSync(fullSourcePath)) {
    log.error(`ファイルが見つかりません: ${fullSourcePath}`);
    process.exit(1);
  }

  let content;
  try {
    content = fs.readFileSync(fullSourcePath, 'utf8');
    log.success(`ファイル読み込み完了`);
  } catch (error) {
    log.error(`ファイル読み込み失敗: ${error.message}`);
    process.exit(1);
  }

  // Frontmatter パース
  const { matter, body } = parseFrontmatter(content);
  const title = matter.title || 'Migrated from ChatGPT';
  const sourceId = matter.source_id || 'unknown';

  log.info(`タイトル: ${title}`);
  log.info(`ターゲットタイプ: ${targetType}`);

  // ターゲット frontmatter を生成
  let newFrontmatter;
  let targetPath;

  switch (targetType) {
    case 'project': {
      newFrontmatter = generateProjectFrontmatter(sourceId, title);
      const id = targetId || generateId('prj');
      targetPath = path.join(projectRoot, '04_DataLink', 'projects', `${id}.md`);
      break;
    }

    case 'knowledge': {
      newFrontmatter = generateKnowledgeFrontmatter(sourceId, title);
      const id = generateId('know');
      const selectedDomain = domain || 'tech';
      targetPath = path.join(projectRoot, '03_Knowledge', selectedDomain, `${id}.md`);
      break;
    }

    case 'decision': {
      newFrontmatter = generateDecisionFrontmatter(sourceId, title);
      const id = targetId || generateId('dec');
      targetPath = path.join(projectRoot, '04_DataLink', 'decisions', `${id}.md`);
      break;
    }

    default:
      log.error(`未知のターゲットタイプ: ${targetType}`);
      process.exit(1);
  }

  // ターゲットディレクトリ確認
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    log.warn(`ターゲットディレクトリが存在しません: ${targetDir}`);
    log.info(`ディレクトリを作成します...`);
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // ファイル書き込み
  const migratedContent = `${newFrontmatter}\n\n# ${title}\n\n## 概要\n\n*ChatGPT インポートから自動生成されたドキュメント*\n\n---\n\n${body}`;

  try {
    fs.writeFileSync(targetPath, migratedContent, 'utf8');
    log.success(`移行完了: ${path.relative(projectRoot, targetPath)}`);
  } catch (error) {
    log.error(`ファイル書き込み失敗: ${error.message}`);
    process.exit(1);
  }

  // 移行レコード生成
  const migrationLog = {
    migrated_at: new Date().toISOString(),
    source_file: sourceFile,
    target_file: path.relative(projectRoot, targetPath),
    target_type: targetType,
    source_id: sourceId,
    title,
  };

  console.log(`\n📊 移行結果:`);
  console.log(`  ソース: ${sourceFile}`);
  console.log(`  移行先: ${path.relative(projectRoot, targetPath)}`);
  console.log(`  タイプ: ${targetType}`);

  console.log(`\n✅ 移行完了！\n`);
}

migrate().catch((error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});
