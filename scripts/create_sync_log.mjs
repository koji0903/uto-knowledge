import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);

function getArg(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : "";
}

function hasArg(name) {
  return args.includes(name);
}

function usage() {
  return [
    "Usage:",
    "  node scripts/create_sync_log.mjs --event git_push --summary \"Pushed vault update\"",
    "",
    "Options:",
    "  --id log_YYYYMMDD_999",
    "  --date YYYY-MM-DD",
    "  --actor chatgpt",
    "  --target-system github",
    "  --target-id main",
    "  --git-commit abc1234",
    "  --summary \"Short summary\"",
    "  --changes \"Changed A;Changed B\"",
    "  --results \"Validated locally\"",
    "  --next-action \"None\"",
    "  --tags \"sync,github\"",
    "  --print-path",
  ].join("\n");
}

function run(command, commandArgs = []) {
  try {
    return execFileSync(command, commandArgs, {
      cwd: vaultRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

function today() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatter.format(new Date());
}

function compactDate(date) {
  return date.replaceAll("-", "");
}

function parseFrontmatterId(markdown) {
  if (!markdown.startsWith("---\n")) return "";

  const end = markdown.indexOf("\n---", 4);
  if (end < 0) return "";

  const block = markdown.slice(4, end).trim();
  const line = block.split("\n").find((item) => item.startsWith("id:"));
  return line ? line.slice("id:".length).trim() : "";
}

function nextLogId(date) {
  const logsDir = path.join(vaultRoot, "04_DataLink/logs");
  const prefix = `log_${compactDate(date)}_`;
  const max = fs.readdirSync(logsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => fs.readFileSync(path.join(logsDir, entry.name), "utf8"))
    .map((markdown) => parseFrontmatterId(markdown))
    .filter((id) => id.startsWith(prefix))
    .map((id) => Number(id.slice(prefix.length)))
    .filter((value) => Number.isInteger(value))
    .reduce((current, value) => Math.max(current, value), 0);

  return `${prefix}${String(max + 1).padStart(3, "0")}`;
}

function markdownList(value, fallback) {
  const items = value
    ? value.split(";").map((item) => item.trim()).filter(Boolean)
    : [fallback];

  return items.map((item) => `- ${item}`).join("\n");
}

const date = getArg("--date") || today();
const id = getArg("--id") || nextLogId(date);
const event = getArg("--event");
const summary = getArg("--summary");

if (!event || !summary) {
  console.error(usage());
  process.exit(1);
}

if (!id.startsWith("log_")) {
  console.error("invalid id prefix: expected log_");
  process.exit(1);
}

const outputPath = path.join(vaultRoot, "04_DataLink/logs", `${id}.md`);

if (fs.existsSync(outputPath)) {
  console.error(`file already exists: ${path.relative(vaultRoot, outputPath)}`);
  process.exit(1);
}

const actor = getArg("--actor") || "ai";
const targetSystem = getArg("--target-system") || "obsidian";
const targetId = getArg("--target-id") || "";
const gitCommit = getArg("--git-commit") || run("git", ["rev-parse", "--short", "HEAD"]);
const tags = getArg("--tags") || "sync";

const content = `---
id: ${id}
type: log
event: ${event}
actor: ${actor}
target_system: ${targetSystem}
target_id: ${targetId}
firestore_collection: logs
firestore_doc_id: ${id}
drive_file_id: 
drive_url: 
git_commit: ${gitCommit}
tags: [${tags}]
created: ${date}
status: active
---

# 同期ログ

## 概要

${summary}

## 変更内容

${markdownList(getArg("--changes"), summary)}

## 影響範囲

${getArg("--impact") || "Obsidian Vault と Git 管理対象ファイル。"}

## 確認結果

${markdownList(getArg("--results"), "未確認")}

## 次アクション

${getArg("--next-action") || "なし"}
`;

fs.writeFileSync(outputPath, content, "utf8");

const relativePath = path.relative(vaultRoot, outputPath).replaceAll(path.sep, "/");
if (hasArg("--print-path")) {
  process.stdout.write(`${relativePath}\n`);
} else {
  console.log(`created ${relativePath}`);
}
