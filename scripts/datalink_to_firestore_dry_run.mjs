import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const dataLinkRoot = path.join(vaultRoot, "04_DataLink");

const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "";

const collectionDirs = [
  ["producers", "producer"],
  ["products", "product"],
  ["projects", "project"],
  ["logs", "log"],
];

function parseValue(raw) {
  const value = raw.trim();

  if (value === "") return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "[]") return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (inner === "") return [];
    return inner.split(",").map((item) => item.trim()).filter(Boolean);
  }

  return value;
}

function parseFrontmatter(markdown, file) {
  if (!markdown.startsWith("---\n")) {
    throw new Error(`missing frontmatter: ${file}`);
  }

  const end = markdown.indexOf("\n---", 4);
  if (end < 0) {
    throw new Error(`unterminated frontmatter: ${file}`);
  }

  const block = markdown.slice(4, end).trim();
  const data = {};

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator < 0) continue;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);
    data[key] = parseValue(value);
  }

  return data;
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

const documents = [];

for (const [collection, expectedType] of collectionDirs) {
  const dir = path.join(dataLinkRoot, collection);

  for (const file of listMarkdownFiles(dir)) {
    const markdown = fs.readFileSync(file, "utf8");
    const frontmatter = parseFrontmatter(markdown, file);
    const relativePath = path.relative(vaultRoot, file).replaceAll(path.sep, "/");
    const id = frontmatter.firestore_doc_id || frontmatter.id;

    if (!id) {
      throw new Error(`missing id/firestore_doc_id: ${relativePath}`);
    }

    if (frontmatter.type !== expectedType) {
      throw new Error(`invalid type in ${relativePath}: expected ${expectedType}, got ${frontmatter.type}`);
    }

    if (frontmatter.firestore_collection !== collection) {
      throw new Error(`invalid firestore_collection in ${relativePath}: expected ${collection}, got ${frontmatter.firestore_collection}`);
    }

    documents.push({
      collection,
      docId: id,
      path: `${collection}/${id}`,
      source: relativePath,
      data: {
        ...frontmatter,
        id,
        obsidian_path: relativePath,
      },
    });
  }
}

const result = {
  mode: "dry-run",
  generated_at: new Date().toISOString(),
  document_count: documents.length,
  documents,
};

const json = `${JSON.stringify(result, null, 2)}\n`;

if (outPath) {
  const resolvedOut = path.resolve(vaultRoot, outPath);
  fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
  fs.writeFileSync(resolvedOut, json, "utf8");
  console.log(`wrote dry-run output: ${path.relative(vaultRoot, resolvedOut)}`);
} else {
  process.stdout.write(json);
}
