#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// 相似度を計算（Business の場合は低めの閾値）
function calculateSimilarity(title1, title2) {
  const words1 = title1.toLowerCase().split(/[_\s\-()]+/).filter(w => w.length > 2);
  const words2 = title2.toLowerCase().split(/[_\s\-()]+/).filter(w => w.length > 2);
  
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
      filePath,
      fileName: path.basename(filePath),
      fileId: path.basename(filePath, '.md'),
      title,
      content,
    };
  } catch (error) {
    return null;
  }
}

function findRelatedFiles(targetFile, allFiles, threshold = 0.25) {
  const related = [];
  for (const file of allFiles) {
    if (file.fileName === targetFile.fileName) continue;
    const similarity = calculateSimilarity(targetFile.title, file.title);
    if (similarity >= threshold) {
      related.push({
        file,
        similarity,
      });
    }
  }
  return related.sort((a, b) => b.similarity - a.similarity).slice(0, 5);
}

function addRelatedLinksToFile(fileData, relatedFiles) {
  const content = fileData.content;
  
  // 既に関連ファイルセクションがあるかチェック
  if (content.includes('## 🔗 関連ファイル')) {
    return content;
  }

  // JSON コードブロックの前に関連ファイルセクションを挿入
  const jsonBlockIndex = content.indexOf('```json');
  if (jsonBlockIndex === -1) {
    return content;
  }

  const relatedSection = buildRelatedSection(relatedFiles);
  return (
    content.slice(0, jsonBlockIndex) +
    relatedSection +
    '\n' +
    content.slice(jsonBlockIndex)
  );
}

function buildRelatedSection(relatedFiles) {
  if (relatedFiles.length === 0) {
    return '';
  }

  let section = '\n---\n\n## 🔗 関連ファイル\n\n';
  for (const { file, similarity } of relatedFiles) {
    const percentSimilarity = (similarity * 100).toFixed(0);
    section += `- [[${file.fileId}|${file.title}]] (相似度: ${percentSimilarity}%)\n`;
  }

  return section;
}

console.log('\n🔗 Business ナレッジのリンク張り開始...\n');

const businessDir = path.join(projectRoot, '03_Knowledge/business');
const files = fs
  .readdirSync(businessDir)
  .filter(f => f.endsWith('.md') && f !== 'index.md')
  .map(f => path.join(businessDir, f))
  .map(parseMarkdownFile)
  .filter(f => f !== null);

console.log(`📁 ${files.length}個のビジネスファイルを処理中...`);

let updatedCount = 0;

for (let i = 0; i < files.length; i++) {
  process.stdout.write(`\r  進捗: ${Math.round((i / files.length) * 100)}% (${i}/${files.length})`);

  const file = files[i];
  const relatedFiles = findRelatedFiles(file, files, 0.25);
  
  if (relatedFiles.length > 0) {
    const updatedContent = addRelatedLinksToFile(file, relatedFiles);
    if (updatedContent !== file.content) {
      fs.writeFileSync(file.filePath, updatedContent, 'utf8');
      updatedCount++;
    }
  }
}

console.log(`\r  進捗: 100% (${files.length}/${files.length})\n`);

console.log(`\n✅ 完了！`);
console.log(`   更新されたファイル: ${updatedCount}/${files.length}個`);
console.log(`   追加されたリンク: ${updatedCount > 0 ? '約' + (updatedCount * 2) : '0'}個\n`);
