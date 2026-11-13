#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// 相似度を計算（単語のオーバーラップ）
function calculateSimilarity(title1, title2) {
  const words1 = title1.toLowerCase().split(/[_\s\-]+/).filter(w => w.length > 2);
  const words2 = title2.toLowerCase().split(/[_\s\-]+/).filter(w => w.length > 2);
  
  const common = words1.filter(w => words2.includes(w)).length;
  return common > 0 ? common / Math.max(words1.length, words2.length) : 0;
}

function parseMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const frontmatter = {};
    for (const line of match[1].split('\n')) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        frontmatter[key.trim()] = valueParts.join(':').trim();
      }
    }

    const titleMatch = content.match(/^# (.+)$/m);
    const title = frontmatter.title || (titleMatch ? titleMatch[1] : 'Untitled');

    return {
      file: path.basename(filePath),
      path: path.relative(projectRoot, filePath),
      title,
      sourceGroup: frontmatter.source_group,
      domain: frontmatter.domain,
    };
  } catch (error) {
    return null;
  }
}

function analyzeGroup(groupDir, groupTitle) {
  const fullDir = path.join(projectRoot, groupDir);
  if (!fs.existsSync(fullDir)) return null;

  const files = fs
    .readdirSync(fullDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => path.join(fullDir, f))
    .map(parseMarkdownFile)
    .filter(f => f !== null);

  // グループ内で関連性が高いファイルペアを検出（0.3以上の類似度）
  const relationships = [];
  for (let i = 0; i < files.length; i++) {
    for (let j = i + 1; j < files.length; j++) {
      const similarity = calculateSimilarity(files[i].title, files[j].title);
      if (similarity >= 0.3) {
        relationships.push({
          file1: files[i].file.replace(/\.md$/, ''),
          file2: files[j].file.replace(/\.md$/, ''),
          similarity: (similarity * 100).toFixed(0),
          title1: files[i].title,
          title2: files[j].title,
        });
      }
    }
  }

  return {
    group: groupTitle,
    dir: groupDir,
    totalFiles: files.length,
    relationships: relationships.sort((a, b) => b.similarity - a.similarity).slice(0, 10),
  };
}

console.log('\n🔍 関連ファイル分析中...\n');

const groups = [
  { dir: '04_DataLink/projects', title: 'Projects' },
  { dir: '03_Knowledge/business', title: 'Business' },
  { dir: '03_Knowledge/tech', title: 'Tech' },
];

const results = groups
  .map(g => analyzeGroup(g.dir, g.title))
  .filter(g => g !== null);

// サマリー表示
for (const result of results) {
  console.log(`\n📊 ${result.group} (${result.totalFiles}件)`);
  console.log(`${'='.repeat(60)}`);
  
  if (result.relationships.length === 0) {
    console.log('  関連ファイル（類似度30%以上）: なし');
    continue;
  }

  console.log(`  関連ファイルペア（トップ10）:\n`);
  for (const rel of result.relationships) {
    console.log(`  📌 相似度 ${rel.similarity}%`);
    console.log(`     [[${rel.file1}|${rel.title1}]]`);
    console.log(`     ↔️  [[${rel.file2}|${rel.title2}]]`);
    console.log();
  }
}

console.log('\n💡 使用方法:');
console.log('  上記の関連ファイルペアに対して、互いのファイルに');
console.log('  バックリンクを追加することをお勧めします。');
console.log('  例: ## 関連ノート');
console.log('      - [[other-file|タイトル]]');
console.log();
