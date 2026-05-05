#!/usr/bin/env node

/**
 * generate_chatgpt_inbox_imports.mjs
 * 分類済み会話を Markdown ファイルに変換し、00_Inbox に配置
 *
 * 用途：
 *   node scripts/generate_chatgpt_inbox_imports.mjs --input classified.json --output-dir 00_Inbox
 *
 * 出力形式：
 *   00_Inbox/chatgpt_import_YYYYMMDD_groupname_seq.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// CLI arguments
const args = process.argv.slice(2);
let inputFile = null;
let outputDir = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && args[i + 1]) inputFile = args[++i];
  if (args[i] === '--output-dir' && args[i + 1]) outputDir = args[++i];
}

if (!inputFile || !outputDir) {
  console.error(
    '❌ 使用方法：node generate_chatgpt_inbox_imports.mjs --input <file> --output-dir <dir>'
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

const groupNames = {
  A: 'admin',
  B: 'regional',
  C: 'business',
  D: 'tech',
  E: 'knowledge',
  F: 'other',
};

function generateMarkdown(conversation, groupId) {
  const createDate = new Date(conversation.create_time * 1000);
  const dateStr = createDate.toISOString().split('T')[0];
  const timeStr = createDate.toISOString().split('T')[1].split('.')[0];

  const id = `inbox_chatgpt_${dateStr.replace(/-/g, '')}_${conversation.id.substring(0, 8)}`;

  const frontmatter = `---
id: ${id}
type: note
source: chatgpt
source_id: ${conversation.id}
source_group: ${groupId}
group_classification: ${conversation.classification.group_name}
created: ${dateStr}
imported: ${new Date().toISOString().split('T')[0]}
status: inbox
tags: [chatgpt, inbox, group-${groupId}, imported]
---`;

  const summary = `## 📋 要約

- **元タイトル:** ${conversation.title}
- **グループ:** ${conversation.classification.group} (${conversation.classification.group_name})
- **信頼度:** ${(conversation.classification.confidence * 100).toFixed(0)}%
- **メッセージ数:** ${conversation.message_count}
- **作成日時:** ${dateStr} ${timeStr}
- **推奨移行先:** ${conversation.classification.target_dirs.join(' または ')}
- **タグ候補:** ${conversation.classification.group}

## 📝 原文コンテンツ

> ChatGPT との会話ログ（フルコンテンツ）

詳細は下記の **会話履歴** セクションを参照してください。

---`;

  const conversationHistory = `## 💬 会話履歴

*このセクションには ChatGPT エクスポートの全内容が保存されています*

### 構造情報
- Mapping keys: ${conversation.mapping_keys}
- Valid messages: ${conversation.message_count}

---`;

  const rawJson = `\`\`\`json
${JSON.stringify(conversation.original, null, 2)}
\`\`\``;

  return {
    frontmatter,
    content: [frontmatter, summary, conversationHistory, rawJson].join('\n\n'),
    id,
    groupId,
    createdDate: dateStr,
  };
}

async function generate() {
  log.info(`\n🚀 Markdown 生成開始\n`);

  // ファイル読み込み
  log.info(`ファイル読み込み: ${inputFile}`);
  if (!fs.existsSync(inputFile)) {
    log.error(`ファイルが見つかりません: ${inputFile}`);
    process.exit(1);
  }

  let conversations;
  try {
    const content = fs.readFileSync(inputFile, 'utf8');
    conversations = JSON.parse(content);
    log.success(`${conversations.length} 件の分類済み会話を読み込み`);
  } catch (error) {
    log.error(`ファイル読み込み失敗: ${error.message}`);
    process.exit(1);
  }

  // 出力ディレクトリ確認
  const fullOutputDir = path.join(projectRoot, outputDir);
  if (!fs.existsSync(fullOutputDir)) {
    log.warn(`出力ディレクトリが存在しません: ${fullOutputDir}`);
    log.info(`ディレクトリを作成します...`);
    fs.mkdirSync(fullOutputDir, { recursive: true });
  }

  // Markdown ファイルを生成
  console.log('\n📄 Markdown ファイルを生成中...');
  const generatedFiles = [];
  const groupSequence = {};
  const progressInterval = Math.ceil(conversations.length / 20);

  for (let i = 0; i < conversations.length; i++) {
    if (i % progressInterval === 0) {
      process.stdout.write(
        `\r  進捗: ${Math.round((i / conversations.length) * 100)}% (${i}/${conversations.length})`
      );
    }

    const conv = conversations[i];
    const groupId = conv.classification.group;

    // グループごとのシーケンス番号
    if (!groupSequence[groupId]) {
      groupSequence[groupId] = 0;
    }
    groupSequence[groupId]++;

    const markdown = generateMarkdown(conv, groupId);

    // ファイル名生成
    const dateStr = markdown.createdDate.replace(/-/g, '');
    const groupName = groupNames[groupId] || 'misc';
    const seq = String(groupSequence[groupId]).padStart(3, '0');
    const filename = `chatgpt_import_${dateStr}_${groupName}_${seq}.md`;
    const filepath = path.join(fullOutputDir, filename);

    // ファイル書き込み
    try {
      fs.writeFileSync(filepath, markdown.content, 'utf8');
      generatedFiles.push({
        filename,
        group: groupId,
        title: conv.title,
        id: conv.id,
      });
    } catch (error) {
      log.error(`ファイル書き込み失敗 (${filename}): ${error.message}`);
    }
  }

  console.log(`\r  進捗: 100% (${conversations.length}/${conversations.length})\n`);

  // 結果サマリー
  console.log(`\n📊 生成結果:`);
  log.success(`${generatedFiles.length} 件の Markdown ファイルを生成`);

  // グループ別統計
  const groupStats = {};
  for (const file of generatedFiles) {
    if (!groupStats[file.group]) {
      groupStats[file.group] = 0;
    }
    groupStats[file.group]++;
  }

  console.log('\n📈 グループ別分布:');
  for (const [group, count] of Object.entries(groupStats)) {
    const percentage = ((count / generatedFiles.length) * 100).toFixed(1);
    console.log(`  グループ ${group}: ${count} ファイル (${percentage}%)`);
  }

  // マニフェスト出力
  const manifestFile = path.join(fullOutputDir, '_chatgpt_import_manifest.json');
  const manifest = {
    generated_at: new Date().toISOString(),
    output_directory: fullOutputDir,
    total_files: generatedFiles.length,
    by_group: groupStats,
    files: generatedFiles,
  };

  try {
    fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2), 'utf8');
    log.success(`マニフェスト生成: ${manifestFile}`);
  } catch (error) {
    log.warn(`マニフェスト生成失敗: ${error.message}`);
  }

  console.log(`\n✅ 出力先: ${fullOutputDir}`);
  console.log(`\n🎉 生成完了！\n`);
}

generate().catch((error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});
