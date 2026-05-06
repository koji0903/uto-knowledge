import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const sourceDir = path.join(
  "/Users/hijikuro/Library/CloudStorage/GoogleDrive-koji0903@gmail.com/マイドライブ",
  "tsuchi" + "guro_by_meeting",
);

const questionsDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/questions");
const evidenceDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/evidence");
const activitiesDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/activities");
const policyLinksDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/policy_links");
const membersDir = path.join(vaultRoot, "04_DataLink/01_ASSEMBLY/members");

function slugFromMeeting(code) {
  return code.toLowerCase().replace("-", "_");
}

function normalizeText(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

function extractMetadata(markdown, fileName) {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] || fileName.replace(/\.md$/, "");
  const pdf = markdown.match(/^- PDF:\s+`([^`]+)`/m)?.[1] || "";
  const qaCount = markdown.match(/^- 抽出した一般質問Q&A数:\s+(.+)$/m)?.[1] || "";
  const themes = markdown.match(/^- 一般質問通告テーマ:\s+(.+)$/m)?.[1] || "";
  const meetingCode = fileName.match(/^(R\d-\d{2})_/)?.[1] || fileName.replace(/\.md$/, "");
  const meetingName = fileName.match(/^[^_]+_([^_]+)_/)?.[1] || "";
  const convened = fileName.match(/招集\)/) ? meetingName.match(/令和.+?招集\)/)?.[0]?.replace(/[()]/g, "") || "" : "";
  const questionTitles = [...markdown.matchAll(/^## 質問 \d+:\s+(.+)$/gm)].map((match) => match[1]);

  return {
    title,
    sourceFileName: fileName,
    pdf,
    qaCount,
    themes,
    meetingCode,
    meetingName,
    convened,
    questionTitles,
  };
}

function inferLinks(text) {
  const links = new Set(["[[L6_policy_layer]]"]);

  const rules = [
    [/こども|子ども|子育て|保育|児童|不妊|不育|給食|放課後児童/i, ["[[childcare_os_specification]]"]],
    [/学校|教育|GIGA|ＩＣＴ|ICT|不登校|授業|小中|中学生|高校生/i, ["[[education_os_specification]]"]],
    [/産業|商工|観光|ブランド|ふるさと納税|事業者|農業|漁業|地域商社|販路|EC|物産/i, ["[[industry_os_specification]]", "[[utomachi_100_store_specification]]", "[[L4_finance_layer]]"]],
    [/防災|災害|避難|通学路|見守り|安全/i, ["[[L5_infrastructure_layer]]", "[[L2_issue_layer]]"]],
    [/移住|定住|空き家|関係人口/i, ["[[relocation_os_specification]]", "[[L2_issue_layer]]"]],
    [/自治会|地域|協議会|実行委員会|団体|PFU|横断|連携/i, ["[[rmo_os_specification]]", "[[L3_organization_pfu]]"]],
    [/財政|予算|補助金|施設|公共施設|図書館|公園/i, ["[[L4_finance_layer]]", "[[L5_infrastructure_layer]]"]],
  ];

  for (const [pattern, targets] of rules) {
    if (pattern.test(text)) {
      for (const target of targets) links.add(target);
    }
  }

  return [...links];
}

function yamlList(items) {
  return `[${items.map((item) => item.replace(/^\[\[/, "").replace(/\]\]$/, "")).join(", ")}]`;
}

function writeFile(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${content.trim()}\n`, "utf8");
}

const files = fs.readdirSync(sourceDir)
  .filter((file) => file.endsWith(".md") && file.includes("土黒功司一般質問答弁"))
  .sort();

const imported = [];

for (const fileName of files) {
  const sourcePath = path.join(sourceDir, fileName);
  const markdown = normalizeText(fs.readFileSync(sourcePath, "utf8"));
  const meta = extractMetadata(markdown, fileName);
  const slug = slugFromMeeting(meta.meetingCode);
  const links = inferLinks(`${meta.themes}\n${markdown}`);
  const noteId = `q_${slug}_hijikuro`;
  const evidenceId = `ev_${slug}_hijikuro_question_source`;

  const questionFile = path.join(questionsDir, `${slug}_hijikuro_general_question.md`);
  const evidenceFile = path.join(evidenceDir, `${slug}_hijikuro_question_source.md`);

  writeFile(questionFile, `---
id: ${noteId}
type: assembly_question
title: "${meta.title}"
created: 2026-05-06
question_date: ${meta.convened || ""}
status: active
member: 土黒功司
meeting_code: ${meta.meetingCode}
meeting_name: "${meta.meetingName}"
source_pdf: "${meta.pdf}"
source_file: "${meta.sourceFileName}"
qa_count: "${meta.qaCount}"
related_layers: ${yamlList(links.filter((link) => /L\d_|vision_uto_os/.test(link)))}
related_os: ${yamlList(links.filter((link) => /_os_|utomachi|rmo/.test(link)))}
related_activities: [act_hijikuro_general_questions_overview]
related_evidence: [${evidenceId}]
tags: [一般質問, 議会, 土黒功司, 宇土市議会]
---

# ${meta.title}

## 概要

- 会期: ${meta.meetingName || meta.meetingCode}
- 質問者: 土黒功司
- Q&A数: ${meta.qaCount}
- 通告テーマ: ${meta.themes || "未記載"}

## 宇土OSとの紐づけ

${links.map((link) => `- ${link}`).join("\n")}

## 質問テーマ一覧

${meta.questionTitles.map((title, index) => `${index + 1}. ${title}`).join("\n")}

## 出典

- [[../evidence/${slug}_hijikuro_question_source|出典ノート]]
- 元ファイル: \`${meta.sourceFileName}\`

## 原文

${markdown}
`);

  writeFile(evidenceFile, `---
id: ${evidenceId}
type: evidence
title: "${meta.title} 出典"
created: 2026-05-06
status: active
source_type: meeting_minutes_markdown
source_owner: 土黒功司
source_pdf: "${meta.pdf}"
source_file: "${meta.sourceFileName}"
related_question: ${noteId}
tags: [議会, 一般質問, 根拠資料, 土黒功司]
---

# ${meta.title} 出典

## 出典情報

| 項目 | 内容 |
| --- | --- |
| 会期 | ${meta.meetingName || meta.meetingCode} |
| 質問者 | 土黒功司 |
| PDF | ${meta.pdf || "未記載"} |
| 元ファイル | \`${meta.sourceFileName}\` |
| Q&A数 | ${meta.qaCount} |

## 関連リンク

- [[../questions/${slug}_hijikuro_general_question|一般質問ノート]]
- [[../policy_links/hijikuro_general_questions_policy_map|宇土OS対応表]]
`);

  imported.push({
    slug,
    noteId,
    evidenceId,
    title: meta.title,
    meetingCode: meta.meetingCode,
    meetingName: meta.meetingName,
    qaCount: meta.qaCount,
    themes: meta.themes,
    links,
  });
}

writeFile(path.join(membersDir, "hijikuro_koji.md"), `---
id: member_hijikuro_koji
type: assembly_member
title: 土黒功司
created: 2026-05-06
status: active
faction: 
committees: []
focus_layers: [L2_issue_layer, L6_policy_layer, vision_uto_os]
focus_os: [childcare_os_specification, education_os_specification, industry_os_specification, relocation_os_specification, rmo_os_specification]
tags: [議員, 土黒功司, 宇土市議会]
---

# 議員: 土黒功司

## 基本情報

宇土市議会における土黒功司の一般質問、活動ログ、政策テーマを集約する。

## 主な政策関心

- [[industry_os_specification]] - 産業、観光、ブランド、ふるさと納税、地域商社
- [[childcare_os_specification]] - 子育て支援、こどもまんなか
- [[education_os_specification]] - GIGAスクール、ICT、不登校、教育環境
- [[rmo_os_specification]] - 地域連携、協議会、横断体制
- [[relocation_os_specification]] - 移住・定住、空き家
- [[L4_finance_layer]] / [[L5_infrastructure_layer]] - 財源、公共施設、防災

## 一般質問

${imported.map((item) => `- [[../questions/${item.slug}_hijikuro_general_question|${item.meetingCode} ${item.meetingName}]]`).join("\n")}

## 関連リンク

- [[../activities/hijikuro_general_questions_overview|一般質問活動サマリー]]
- [[../policy_links/hijikuro_general_questions_policy_map|宇土OS対応表]]
- [[../questions/index|一般質問・質疑]]
`);

writeFile(path.join(activitiesDir, "hijikuro_general_questions_overview.md"), `---
id: act_hijikuro_general_questions_overview
type: assembly_activity
title: 土黒功司 一般質問活動サマリー
created: 2026-05-06
activity_date: 2022-11-30
status: active
member: 土黒功司
activity_type: 一般質問
related_layers: [L2_issue_layer, L6_policy_layer, vision_uto_os]
related_os: [childcare_os_specification, education_os_specification, industry_os_specification, relocation_os_specification, rmo_os_specification]
related_questions: [${imported.map((item) => item.noteId).join(", ")}]
related_decisions: []
related_evidence: [${imported.map((item) => item.evidenceId).join(", ")}]
tags: [議員活動, 一般質問, 土黒功司]
---

# 土黒功司 一般質問活動サマリー

## 概要

令和4年12月定例会から令和6年12月定例会までの一般質問・答弁を統合した活動サマリー。

## 会期別ノート

| 会期 | Q&A数 | 主なテーマ | ノート |
| --- | ---: | --- | --- |
${imported.map((item) => `| ${item.meetingCode} ${item.meetingName} | ${item.qaCount || ""} | ${item.themes || ""} | [[../questions/${item.slug}_hijikuro_general_question|開く]] |`).join("\n")}

## 宇土OSとの主な接続

- [[L2_issue_layer]] - 一般質問で扱った構造的課題
- [[L6_policy_layer]] - 質問・答弁を政策パッケージへ変換する入口
- [[industry_os_specification]] - 産業、観光、ブランド、地域商社
- [[childcare_os_specification]] - 子育て支援、こどもまんなか
- [[education_os_specification]] - GIGAスクール、ICT、不登校、教育環境
- [[rmo_os_specification]] - 地域連携、横断組織
- [[relocation_os_specification]] - 移住・定住、空き家

## 次アクション

- 各質問を政策テーマ別に分解する
- 答弁から行政の現状、課題、約束、未解決事項を抽出する
- [[../policy_links/hijikuro_general_questions_policy_map|宇土OS対応表]] を更新する
`);

writeFile(path.join(policyLinksDir, "hijikuro_general_questions_policy_map.md"), `---
id: policy_map_hijikuro_general_questions
type: policy_link_map
title: 土黒功司 一般質問と宇土OSの対応表
created: 2026-05-06
status: active
member: 土黒功司
tags: [議会, 一般質問, 宇土OS, 土黒功司]
---

# 土黒功司 一般質問と宇土OSの対応表

## 会期別対応

| 会期 | 通告テーマ | 関連レイヤ・OS | 質問ノート |
| --- | --- | --- | --- |
${imported.map((item) => `| ${item.meetingCode} ${item.meetingName} | ${item.themes || ""} | ${item.links.join("<br>")} | [[../questions/${item.slug}_hijikuro_general_question|開く]] |`).join("\n")}

## 集約視点

### 産業・賑わい

- [[industry_os_specification]]
- [[utomachi_100_store_specification]]
- [[L4_finance_layer]]

### 子育て・教育

- [[childcare_os_specification]]
- [[education_os_specification]]
- [[L6_policy_layer]]

### 地域運営・防災・公共施設

- [[rmo_os_specification]]
- [[L3_organization_pfu]]
- [[L5_infrastructure_layer]]

### 移住・定住

- [[relocation_os_specification]]
- [[L2_issue_layer]]

## 関連リンク

- [[../members/hijikuro_koji|土黒功司]]
- [[../activities/hijikuro_general_questions_overview|一般質問活動サマリー]]
- [[../questions/index|一般質問・質疑]]
`);

const questionsIndex = path.join(questionsDir, "index.md");
const existingQuestionsIndex = fs.readFileSync(questionsIndex, "utf8").trim();
const generatedQuestionsSection = `\n\n## 土黒功司 一般質問\n\n${imported.map((item) => `- [[${item.slug}_hijikuro_general_question|${item.meetingCode} ${item.meetingName}]]`).join("\n")}\n`;
writeFile(questionsIndex, existingQuestionsIndex.replace(/\n## 土黒功司 一般質問[\s\S]*$/m, "") + generatedQuestionsSection);

const evidenceIndex = path.join(evidenceDir, "index.md");
const existingEvidenceIndex = fs.readFileSync(evidenceIndex, "utf8").trim();
const generatedEvidenceSection = `\n\n## 土黒功司 一般質問 出典\n\n${imported.map((item) => `- [[${item.slug}_hijikuro_question_source|${item.meetingCode} ${item.meetingName} 出典]]`).join("\n")}\n`;
writeFile(evidenceIndex, existingEvidenceIndex.replace(/\n## 土黒功司 一般質問 出典[\s\S]*$/m, "") + generatedEvidenceSection);

console.log(`imported ${imported.length} Hijikuro question files`);
