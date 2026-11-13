#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

const groups = [
  {
    dir: '04_DataLink/projects',
    title: 'ChatGPT Import Projects',
    description: 'Admin (A) と Regional (B) グループから移行されたプロジェクト',
    groups: ['A', 'B'],
  },
  {
    dir: '03_Knowledge/business',
    title: 'Business Knowledge',
    description: 'ビジネス・マーケティング (C) グループの知識ノート',
    groups: ['C'],
  },
  {
    dir: '03_Knowledge/tech',
    title: 'Tech & General Knowledge',
    description: '技術 (D) と情報整理 (E) グループの知識ノート',
    groups: ['D', 'E'],
  },
];

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

    // タイトルを抽出
    const titleMatch = content.match(/^# (.+)$/m);
    const title = frontmatter.title || (titleMatch ? titleMatch[1] : 'Untitled');

    return {
      file: path.basename(filePath),
      title,
      sourceId: frontmatter.source_id,
      sourceGroup: frontmatter.source_group,
      created: frontmatter.created,
      domain: frontmatter.domain,
    };
  } catch (error) {
    return null;
  }
}

function generateIndex(groupConfig) {
  const fullDir = path.join(projectRoot, groupConfig.dir);
  if (!fs.existsSync(fullDir)) {
    console.error(`Directory not found: ${fullDir}`);
    return;
  }

  // マークダウンファイルをリストアップ
  const files = fs
    .readdirSync(fullDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => path.join(fullDir, f))
    .map(parseMarkdownFile)
    .filter(f => f !== null)
    .sort((a, b) => b.created.localeCompare(a.created));

  // グループ別に集計
  const byGroup = {};
  for (const file of files) {
    if (!byGroup[file.sourceGroup]) {
      byGroup[file.sourceGroup] = [];
    }
    byGroup[file.sourceGroup].push(file);
  }

  // インデックスの生成
  let indexContent = `---
id: index_${Date.now()}
type: index
created: ${new Date().toISOString().split('T')[0]}
---

# ${groupConfig.title}

${groupConfig.description}

**統計:**
- 総ファイル数: ${files.length}
- グループ数: ${Object.keys(byGroup).length}

---

## グループ別ファイル一覧

`;

  // グループIDマップ
  const groupNames = {
    A: '行政・議会関連',
    B: '地域活性化・企画',
    C: 'ビジネス・マーケティング',
    D: '技術・IT',
    E: '情報整理・ナレッジ',
  };

  for (const groupId of Object.keys(byGroup).sort()) {
    const groupFiles = byGroup[groupId];
    indexContent += `\n### グループ ${groupId}: ${groupNames[groupId]} (${groupFiles.length}件)\n\n`;

    for (const file of groupFiles) {
      const link = `[[${file.file.replace(/\.md$/, '')}|${file.title}]]`;
      indexContent += `- ${link} \`${file.created}\`\n`;
    }
  }

  // タイムスタンプ付きインデックスファイルを保存
  const indexPath = path.join(fullDir, 'index.md');
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`✅ Created: ${path.relative(projectRoot, indexPath)} (${files.length} files)`);
}

console.log('\n🚀 ChatGPT インデックス生成開始\n');
for (const groupConfig of groups) {
  generateIndex(groupConfig);
}
console.log('\n✅ インデックス生成完了\n');
