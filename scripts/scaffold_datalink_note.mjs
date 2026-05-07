import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);

function getArg(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : "";
}

const type = getArg("--type");
const id = getArg("--id");
const title = getArg("--title") || id;
const date = getArg("--date") || new Date().toISOString().slice(0, 10);
const dryRun = args.includes("--dry-run");

const config = {
  decision: {
    collection: "decisions",
    folder: "04_DataLink/decisions",
    template: "06_Templates/template_datalink_decision.md",
    idPrefix: "dec_",
    fileName(id) {
      return `${id.replace(/^dec_/, "decision_")}.md`;
    },
  },
  producer: {
    collection: "producers",
    folder: "04_DataLink/producers",
    template: "06_Templates/template_datalink_producer.md",
    idPrefix: "prodcr_",
  },
  product: {
    collection: "products",
    folder: "04_DataLink/products",
    template: "06_Templates/template_datalink_product.md",
    idPrefix: "prod_",
  },
  project: {
    collection: "projects",
    folder: "04_DataLink/projects",
    template: "06_Templates/template_datalink_project.md",
    idPrefix: "prj_",
  },
  log: {
    collection: "logs",
    folder: "04_DataLink/logs",
    template: "06_Templates/template_datalink_log.md",
    idPrefix: "log_",
  },
};

function usage() {
  return [
    "Usage:",
    "  node scripts/scaffold_datalink_note.mjs --type project --id prj_002 --title \"Project Name\"",
    "  node scripts/scaffold_datalink_note.mjs --type project --id prj_002 --title \"Project Name\" --dry-run",
    "",
    "Types:",
    "  decision, producer, product, project, log",
  ].join("\n");
}

if (!type || !id || !config[type]) {
  console.error(usage());
  process.exit(1);
}

const selected = config[type];

if (!id.startsWith(selected.idPrefix)) {
  console.error(`invalid id prefix for ${type}: expected ${selected.idPrefix}`);
  process.exit(1);
}

const templatePath = path.join(vaultRoot, selected.template);
const fileName = selected.fileName ? selected.fileName(id) : `${id}.md`;
const outputPath = path.join(vaultRoot, selected.folder, fileName);

if (fs.existsSync(outputPath)) {
  console.error(`file already exists: ${path.relative(vaultRoot, outputPath)}`);
  process.exit(1);
}

let content = fs.readFileSync(templatePath, "utf8");

content = content
  .replaceAll("{{date}}", date)
  .replace(/^id: .*/m, `id: ${id}`)
  .replace(/^firestore_doc_id: .*/m, `firestore_doc_id: ${id}`)
  .replace(/^firestore_collection: .*/m, `firestore_collection: ${selected.collection}`);

const titleReplacements = {
  decision: "# 決定: 決定内容",
  producer: "# 生産者名",
  product: "# 商品名",
  project: "# プロジェクト名",
  log: "# 活動ログ",
};

if (type === "decision") {
  content = content.replace(titleReplacements[type], `# 決定: ${title}`);
} else {
  content = content.replace(titleReplacements[type], `# ${title}`);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
if (dryRun) {
  console.log(JSON.stringify({
    mode: "dry-run",
    type,
    id,
    output: path.relative(vaultRoot, outputPath).replaceAll(path.sep, "/"),
  }, null, 2));
  process.exit(0);
}

fs.writeFileSync(outputPath, content, "utf8");
console.log(`created ${path.relative(vaultRoot, outputPath)}`);
