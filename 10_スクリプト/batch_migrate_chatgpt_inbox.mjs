#!/usr/bin/env node

/**
 * batch_migrate_chatgpt_inbox.mjs
 * 00_Inbox 内の全 ChatGPT インポートを本体位置に一括移行
 *
 * 用途：
 *   node scripts/batch_migrate_chatgpt_inbox.mjs --source-dir 00_Inbox --target project --dry-run
 *   node scripts/batch_migrate_chatgpt_inbox.mjs --source-dir 00_Inbox --target project --apply
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// CLI arguments
const args = process.argv.slice(2);
let sourceDir = null;
let targetType = 'project';
let dryRun = false;
let apply = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--source-dir' && args[i + 1]) sourceDir = args[++i];
  if (args[i] === '--target' && args[i + 1]) targetType = args[++i];
  if (args[i] === '--dry-run') dryRun = true;
  if (args[i] === '--apply') apply = true;
}

if (!sourceDir) {
  console.error(
    '❌ 使用方法：node batch_migrate_chatgpt_inbox.mjs --source-dir <dir> --target <type> [--dry-run | --apply]'
  );
  process.exit(1);
}

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

function generateId(type) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
  const timeStr = now.toISOString().split('T')[1].split(':').join('').substring(0, 4);
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `${type}_${dateStr}${timeStr}_${random}`;
}

function generateFrontmatter(type, sourceId, title, groupId) {
  const id = generateId(type);
  const now = new Date().toISOString().split('T')[0];

  // グループIDからドメインを決定
  const domainMap = {
    A: 'admin',
    B: 'regional',
    C: 'business',
    D: 'tech',
    E: 'tech',
    F: 'other',
  };
  const domain = domainMap[groupId] || 'tech';

  const templates = {
    project: `---
id: ${id}
type: project
firestore_collection: projects
firestore_doc_id: ${id}
title: ${title}
source: chatgpt_import
source_id: ${sourceId}
source_group: ${groupId}
created: ${now}
status: active
tags: [imported_from_chatgpt, group-${groupId}]
---`,
    knowledge: `---
id: ${id}
type: knowledge_note
domain: ${domain}
source: chatgpt_import
source_id: ${sourceId}
source_group: ${groupId}
created: ${now}
status: active
tags: [chatgpt, ${domain}, group-${groupId}]
---`,
    decision: `---
id: ${id}
type: decision
firestore_collection: decisions
firestore_doc_id: ${id}
decision_category: strategy
priority: medium
status: approved
proposed_by: chatgpt_import
created: ${now}
source_id: ${sourceId}
source_group: ${groupId}
tags: [imported_from_chatgpt]
---`,
  };

  return templates[type] || templates.project;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { matter: {}, body: content };

  const matterStr = match[1];
  const body = content.slice(match[0].length);

  const matter = {};
  for (const line of matterStr.split('\n')) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      matter[key.trim()] = valueParts.join(':').trim();
    }
  }

  return { matter, body };
}

async function batchMigrate() {
  log.info(`\n🚀 ChatGPT Inbox 一括移行処理開始\n`);

  // ソースディレクトリ確認
  const fullSourceDir = path.join(projectRoot, sourceDir);
  log.info(`ソースディレクトリ: ${sourceDir}`);

  if (!fs.existsSync(fullSourceDir)) {
    log.error(`ディレクトリが見つかりません: ${fullSourceDir}`);
    process.exit(1);
  }

  // Inbox ファイルを検出
  const files = fs
    .readdirSync(fullSourceDir)
    .filter((f) => f.startsWith('chatgpt_import_') && f.endsWith('.md'));

  log.info(`検出されたファイル: ${files.length} 件`);

  if (files.length === 0) {
    log.warn(`移行対象ファイルがありません`);
    process.exit(0);
  }

  // グループ別に分類
  const grouped = {};
  for (const file of files) {
    const match = file.match(/chatgpt_import_\d+_(\w+)_\d+/);
    if (match) {
      const group = match[1];
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(file);
    }
  }

  console.log(`\n📊 グループ別ファイル数:`);
  for (const [group, groupFiles] of Object.entries(grouped)) {
    console.log(`  ${group}: ${groupFiles.length} 件`);
  }

  // 移行対象を決定（グループIDは A-E の文字コード）
  const targetDirs = {
    A: '04_DataLink/projects',    // admin
    B: '04_DataLink/projects',    // regional
    C: '03_Knowledge/business',   // business
    D: '03_Knowledge/tech',       // tech
    E: '03_Knowledge/tech',       // knowledge
    F: '03_Knowledge/other',      // other
  };

  const targetTypes = {
    A: 'project',
    B: 'project',
    C: 'knowledge',
    D: 'knowledge',
    E: 'knowledge',
    F: 'knowledge',
  };

  // ドライランまたは適用
  const mode = dryRun ? 'DRY-RUN' : apply ? 'APPLY' : 'CHECK';
  log.info(`\nモード: ${mode}`);

  if (!dryRun && !apply) {
    log.warn(`ドライラン情報のみ表示。実際に移行するには --apply を指定してください`);
  }

  // 移行処理
  console.log(`\n📄 移行処理中...`);
  const results = {
    success: 0,
    error: 0,
    targetDirs: {},
  };

  let processed = 0;
  const progressInterval = Math.ceil(files.length / 20);

  for (const file of files) {
    if (processed % progressInterval === 0) {
      process.stdout.write(
        `\r  進捗: ${Math.round((processed / files.length) * 100)}% (${processed}/${files.length})`
      );
    }

    try {
      const filePath = path.join(fullSourceDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { matter, body } = parseFrontmatter(content);

      const sourceId = matter.source_id;
      const groupId = matter.source_group || 'unknown';
      const title = matter.title || file.replace(/\.md$/, '');

      // ターゲットディレクトリを決定（グループIDはA-E）
      let targetDir = targetDirs[groupId] || '03_Knowledge/tech';
      let targetType = targetTypes[groupId] || 'knowledge';

      const fullTargetDir = path.join(projectRoot, targetDir);

      // ドライランモードでのみカウント
      if (dryRun || apply) {
        if (!results.targetDirs[targetDir]) {
          results.targetDirs[targetDir] = 0;
        }
        results.targetDirs[targetDir]++;

        if (apply) {
          // 実際のディレクトリ作成と移行
          if (!fs.existsSync(fullTargetDir)) {
            fs.mkdirSync(fullTargetDir, { recursive: true });
          }

          const newFrontmatter = generateFrontmatter(targetType, sourceId, title, groupId);
          const newContent = `${newFrontmatter}\n\n# ${title}\n\n${body}`;

          const id = generateId(targetType);
          const newFileName = `${targetType === 'project' ? 'prj_' : 'know_'}${id.substring(id.length - 8)}.md`;
          const newFilePath = path.join(fullTargetDir, newFileName);

          fs.writeFileSync(newFilePath, newContent, 'utf8');

          // 元ファイルは削除しない（Obsidian で手動削除するため）
        }

        results.success++;
      } else {
        // CHECKモード：ドライランなしで予測のみ
        if (!results.targetDirs[targetDir]) {
          results.targetDirs[targetDir] = 0;
        }
        results.targetDirs[targetDir]++;
        results.success++;
      }
    } catch (error) {
      results.error++;
      if (results.error <= 5) {
        log.warn(`  ファイル移行エラー (${file}): ${error.message}`);
      }
    }

    processed++;
  }

  console.log(`\r  進捗: 100% (${files.length}/${files.length})\n`);

  // 結果レポート
  console.log(`\n📊 移行結果:`);
  log.success(`成功: ${results.success} 件`);
  if (results.error > 0) {
    log.warn(`エラー: ${results.error} 件`);
  }

  console.log(`\n📁 ターゲットディレクトリ別:`);
  for (const [dir, count] of Object.entries(results.targetDirs)) {
    console.log(`  ${dir}: ${count} ファイル`);
  }

  if (dryRun) {
    console.log(`\n${colors.yellow}📋 ドライラン完了。実際に移行するには --apply を指定してください${colors.reset}`);
  } else if (apply) {
    log.success(`\n🎉 移行完了！${results.success} 件のファイルを本体位置に配置しました`);
  } else {
    log.info(`\n💡 実行するには以下を実行してください:`);
    console.log(`   node scripts/batch_migrate_chatgpt_inbox.mjs --source-dir ${sourceDir} --target ${targetType} --apply`);
  }

  console.log('');
}

batchMigrate().catch((error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});
