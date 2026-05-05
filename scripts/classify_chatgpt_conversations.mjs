#!/usr/bin/env node

/**
 * classify_chatgpt_conversations.mjs
 * ChatGPT 会話をタイトルと内容で分類し、ターゲットディレクトリを推奨
 *
 * 用途：
 *   node scripts/classify_chatgpt_conversations.mjs --input parsed.json --output classified.json
 *
 * 分類グループ：
 *   A: 行政・議会関連
 *   B: 地域活性化・企画
 *   C: ビジネス・マーケティング
 *   D: 技術・IT
 *   E: 情報整理・ナレッジ
 *   F: その他
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CLI arguments
const args = process.argv.slice(2);
let inputFile = null;
let outputFile = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && args[i + 1]) inputFile = args[++i];
  if (args[i] === '--output' && args[i + 1]) outputFile = args[++i];
}

if (!inputFile) {
  console.error('❌ 使用方法：node classify_chatgpt_conversations.mjs --input <file> --output <file>');
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

// 分類キーワード定義
const classifications = {
  A: {
    name: '行政・議会関連',
    keywords: [
      '議員',
      '議会',
      '市',
      '自治体',
      '地方',
      'PFI',
      '条例',
      '委員会',
      '首長',
      '政策',
      'LMO',
      '市民参加',
    ],
    target_dir: ['02_Project', '04_DataLink/projects'],
  },
  B: {
    name: '地域活性化・企画',
    keywords: [
      '企画',
      '提案',
      '交流',
      '活性化',
      '整備',
      'マリーナ',
      '物産',
      'イベント',
      '施設',
      'スクーゾーン',
      '観光',
      '地域づくり',
    ],
    target_dir: ['02_Project', '04_DataLink/projects'],
  },
  C: {
    name: 'ビジネス・マーケティング',
    keywords: [
      'SNS',
      'Instagram',
      '広告',
      '価格設定',
      'マーケティング',
      'ビジネス',
      'E-commerce',
      'セールス',
      '営業',
      'ブランド',
      'GaiXer',
      '販売',
    ],
    target_dir: ['03_Knowledge/business', '02_Project'],
  },
  D: {
    name: '技術・IT',
    keywords: [
      'AI',
      'コード',
      'スクリプト',
      'プログラム',
      '実装',
      'API',
      'データベース',
      'ツール',
      'システム',
      '分析',
      'Git',
      'Python',
      'JavaScript',
    ],
    target_dir: ['03_Knowledge/tech', '02_Project'],
  },
  E: {
    name: '情報整理・ナレッジ',
    keywords: [
      '要約',
      '整理',
      'リサーチ',
      '調査',
      'インタビュー',
      '農園',
      '農業',
      '学習',
      '知識',
      '参考',
      '情報',
      'ドキュメント',
    ],
    target_dir: ['03_Knowledge', '00_Inbox'],
  },
};

function classifyConversation(conversation) {
  const title = conversation.title.toLowerCase();
  const scores = {};

  // 各カテゴリーのスコアを計算
  for (const [groupId, group] of Object.entries(classifications)) {
    scores[groupId] = 0;

    for (const keyword of group.keywords) {
      if (title.includes(keyword.toLowerCase())) {
        scores[groupId] += 1;
      }
    }
  }

  // スコアが最高のグループを選定
  let bestGroup = 'E'; // デフォルトは情報整理
  let bestScore = 0;

  for (const [groupId, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestGroup = groupId;
    }
  }

  const classification = classifications[bestGroup];

  return {
    group: bestGroup,
    group_name: classification.name,
    confidence: bestScore > 0 ? Math.min(bestScore * 0.33, 0.99) : 0.1, // 簡易信頼度
    target_dirs: classification.target_dir,
    scores,
  };
}

async function classify() {
  log.info(`\n🚀 会話分類開始\n`);

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
    log.success(`${conversations.length} 件の会話を読み込み`);
  } catch (error) {
    log.error(`ファイル読み込み失敗: ${error.message}`);
    process.exit(1);
  }

  // 会話を分類
  console.log('\n📊 分類処理中...');
  const classified = [];
  const groupCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

  const progressInterval = Math.ceil(conversations.length / 20);

  for (let i = 0; i < conversations.length; i++) {
    if (i % progressInterval === 0) {
      process.stdout.write(
        `\r  進捗: ${Math.round((i / conversations.length) * 100)}% (${i}/${conversations.length})`
      );
    }

    const conv = conversations[i];
    const classification = classifyConversation(conv);

    classified.push({
      ...conv,
      classification,
    });

    groupCounts[classification.group]++;
  }

  console.log(`\r  進捗: 100% (${conversations.length}/${conversations.length})\n`);

  // 分類結果のサマリー
  console.log(`\n📈 分類結果:`);
  for (const [groupId, group] of Object.entries(classifications)) {
    const count = groupCounts[groupId];
    const percentage = ((count / conversations.length) * 100).toFixed(1);
    console.log(
      `  ${groupId}: ${group.name.padEnd(20)} ${count.toString().padStart(5)} 件 (${percentage}%)`
    );
  }

  // 出力ファイル生成
  if (!outputFile) {
    outputFile = inputFile.replace(/\.json$/, '_classified.json');
  }

  log.info(`\n出力ファイルを生成中: ${outputFile}`);
  try {
    fs.writeFileSync(outputFile, JSON.stringify(classified, null, 2), 'utf8');
    log.success(`出力完了: ${classified.length} 件の分類済み会話`);
  } catch (error) {
    log.error(`出力失敗: ${error.message}`);
    process.exit(1);
  }

  // サマリー出力
  const summaryFile = outputFile.replace(/\.json$/, '_summary.json');
  const summary = {
    classified_at: new Date().toISOString(),
    total_conversations: conversations.length,
    by_group: {
      A: { name: classifications.A.name, count: groupCounts.A },
      B: { name: classifications.B.name, count: groupCounts.B },
      C: { name: classifications.C.name, count: groupCounts.C },
      D: { name: classifications.D.name, count: groupCounts.D },
      E: { name: classifications.E.name, count: groupCounts.E },
    },
  };

  try {
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2), 'utf8');
    log.success(`サマリー出力: ${summaryFile}`);
  } catch (error) {
    log.warn(`サマリー出力失敗: ${error.message}`);
  }

  console.log(`\n🎉 分類完了！\n`);
}

classify().catch((error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});
