#!/usr/bin/env node

/**
 * parse_chatgpt_export.mjs
 * ChatGPT JSON エクスポートをパース・検証し、正規化された会話配列を出力
 *
 * 用途：
 *   node scripts/parse_chatgpt_export.mjs --input chatgpt_export_raw.json --output parsed.json --validate
 *
 * 処理内容：
 *   1. JSON ファイルをパース
 *   2. 各会話のスキーマを検証
 *   3. conversation_id で重複排除
 *   4. タイムスタンプを ISO 8601 形式に正規化
 *   5. メッセージ数をカウント
 *   6. 出力形式に統一
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CLI arguments
const args = process.argv.slice(2);
let inputFile = null;
let outputFile = null;
let validateOnly = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && args[i + 1]) inputFile = args[++i];
  if (args[i] === '--output' && args[i + 1]) outputFile = args[++i];
  if (args[i] === '--validate') validateOnly = true;
}

if (!inputFile) {
  console.error('❌ 使用方法：node parse_chatgpt_export.mjs --input <file> --output <file> [--validate]');
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

async function parseExport() {
  log.info(`\n🚀 ChatGPT エクスポート パース開始\n`);

  // 1. ファイル読み込み
  log.info(`ファイル読み込み: ${inputFile}`);
  if (!fs.existsSync(inputFile)) {
    log.error(`ファイルが見つかりません: ${inputFile}`);
    process.exit(1);
  }

  let data;
  try {
    const content = fs.readFileSync(inputFile, 'utf8');
    data = JSON.parse(content);
    log.success(`JSON パース成功`);
  } catch (error) {
    log.error(`JSON パース失敗: ${error.message}`);
    process.exit(1);
  }

  // 2. 配列かどうか確認
  if (!Array.isArray(data)) {
    log.error(`エクスポートは配列である必要があります`);
    process.exit(1);
  }

  log.info(`合計会話数: ${data.length}`);

  // 3. 会話を検証・正規化
  const conversations = [];
  const seenIds = new Set();
  let validCount = 0;
  let duplicateCount = 0;
  let errorCount = 0;

  console.log('\n📋 会話を処理中...');
  const progressInterval = Math.ceil(data.length / 20); // 20 steps の進捗表示

  for (let i = 0; i < data.length; i++) {
    if (i % progressInterval === 0) {
      process.stdout.write(
        `\r  進捗: ${Math.round((i / data.length) * 100)}% (${i}/${data.length})`
      );
    }

    const conv = data[i];

    try {
      // スキーマ検証
      if (!conv.title || typeof conv.title !== 'string') {
        throw new Error('title が存在しないまたは不正です');
      }
      if (!conv.create_time || typeof conv.create_time !== 'number') {
        throw new Error('create_time が存在しないまたは不正です');
      }
      if (!conv.mapping || typeof conv.mapping !== 'object') {
        throw new Error('mapping が存在しないまたは不正です');
      }

      // ID を検出（最初のメッセージ ID）
      const mappingKeys = Object.keys(conv.mapping);
      if (mappingKeys.length === 0) {
        throw new Error('mapping が空です');
      }

      const convId = mappingKeys[0];
      if (seenIds.has(convId)) {
        duplicateCount++;
        continue;
      }

      seenIds.add(convId);

      // メッセージ数をカウント
      let messageCount = 0;
      for (const msgId of mappingKeys) {
        if (conv.mapping[msgId].message !== null) {
          messageCount++;
        }
      }

      // 正規化済み会話オブジェクト
      const normalized = {
        id: convId,
        title: conv.title.trim(),
        create_time: conv.create_time,
        create_time_iso: new Date(conv.create_time * 1000).toISOString(),
        update_time: conv.update_time || conv.create_time,
        update_time_iso: new Date((conv.update_time || conv.create_time) * 1000).toISOString(),
        message_count: messageCount,
        mapping_keys: mappingKeys.length,
        is_archived: conv.is_archived || false,
        is_starred: conv.is_starred || false,
        original: conv, // 元データを保持（後処理用）
      };

      conversations.push(normalized);
      validCount++;
    } catch (error) {
      errorCount++;
      if (errorCount <= 5) {
        // 最初の 5 件のエラーのみログ
        log.warn(`会話 #${i} エラー: ${error.message}`);
      }
    }
  }

  console.log(`\r  進捗: 100% (${data.length}/${data.length})\n`);

  // 4. 結果サマリー
  console.log(`\n📊 処理結果:`);
  log.success(`有効な会話: ${validCount} 件`);
  if (duplicateCount > 0) {
    log.warn(`重複: ${duplicateCount} 件`);
  }
  if (errorCount > 0) {
    log.warn(`エラー: ${errorCount} 件`);
  }

  // 5. 統計情報
  const dates = conversations.map((c) => c.create_time_iso.split('T')[0]);
  const oldestDate = dates[dates.length - 1];
  const newestDate = dates[0];

  const avgMessages = (
    conversations.reduce((sum, c) => sum + c.message_count, 0) /
    conversations.length
  ).toFixed(1);

  const titleLengths = conversations.map((c) => c.title.length);
  const avgTitleLength = (
    titleLengths.reduce((a, b) => a + b, 0) /
    titleLengths.length
  ).toFixed(1);

  console.log(`\n📈 統計情報:`);
  console.log(`  日付範囲: ${oldestDate} ～ ${newestDate}`);
  console.log(`  平均メッセージ数: ${avgMessages}`);
  console.log(`  平均タイトル長: ${avgTitleLength} 文字`);
  console.log(`  最短タイトル: ${Math.min(...titleLengths)} 文字`);
  console.log(`  最長タイトル: ${Math.max(...titleLengths)} 文字`);

  // Validate only mode
  if (validateOnly) {
    log.success(`\n✅ 検証完了 - エラーなし\n`);
    return;
  }

  // 6. 出力ファイル生成
  if (!outputFile) {
    outputFile = inputFile.replace(/\.json$/, '_parsed.json');
  }

  log.info(`\n出力ファイルを生成中: ${outputFile}`);
  try {
    fs.writeFileSync(outputFile, JSON.stringify(conversations, null, 2), 'utf8');
    log.success(`出力完了: ${conversations.length} 件の会話`);
  } catch (error) {
    log.error(`出力失敗: ${error.message}`);
    process.exit(1);
  }

  // 7. メタデータ出力
  const metadataFile = outputFile.replace(/\.json$/, '_metadata.json');
  const metadata = {
    parsed_at: new Date().toISOString(),
    input_file: inputFile,
    output_file: outputFile,
    total_input: data.length,
    total_valid: validCount,
    total_duplicate: duplicateCount,
    total_error: errorCount,
    date_range: {
      oldest: oldestDate,
      newest: newestDate,
    },
    statistics: {
      avg_message_count: parseFloat(avgMessages),
      avg_title_length: parseFloat(avgTitleLength),
      min_title_length: Math.min(...titleLengths),
      max_title_length: Math.max(...titleLengths),
    },
  };

  try {
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2), 'utf8');
    log.success(`メタデータ出力: ${metadataFile}`);
  } catch (error) {
    log.warn(`メタデータ出力失敗: ${error.message}`);
  }

  console.log(`\n🎉 完了！\n`);
}

parseExport().catch((error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});
