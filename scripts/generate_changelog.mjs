import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/changelog.md";
const limitIndex = args.indexOf("--limit");
const limit = limitIndex >= 0 ? args[limitIndex + 1] : "20";

function run(command, args = []) {
  return execFileSync(command, args, {
    cwd: vaultRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

function parseFrontmatter(file) {
  const content = fs.readFileSync(path.join(vaultRoot, file), "utf8");
  if (!content.startsWith("---\n")) return {};

  const end = content.indexOf("\n---", 4);
  if (end < 0) return {};

  const data = {};
  const block = content.slice(4, end).trim();

  for (const line of block.split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    data[key] = value;
  }

  return data;
}

const gitLog = run("git", ["log", "--oneline", `--max-count=${limit}`])
  .split("\n")
  .filter(Boolean);

const logDir = path.join(vaultRoot, "04_DataLink/logs");
const operationLogs = fs.existsSync(logDir) ? fs.readdirSync(logDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  .filter((entry) => entry.name !== "index.md")
  .map((entry) => {
    const file = `04_DataLink/logs/${entry.name}`;
    const frontmatter = parseFrontmatter(file);
    return {
      file,
      id: frontmatter.id || "",
      event: frontmatter.event_type || frontmatter.event || "",
      target: frontmatter.summary || frontmatter.target_system || "",
      created: frontmatter.created || "",
    };
  })
  .sort((a, b) => `${b.created}:${b.id}`.localeCompare(`${a.created}:${a.id}`)) : [];

const report = `# uto-knowledge Changelog

Generated: ${new Date().toISOString()}

## Recent Git Commits

${gitLog.map((line) => `- ${line}`).join("\n")}

## Operation Logs

| created | id | event | target | file |
| --- | --- | --- | --- | --- |
${operationLogs.map((log) => `| ${log.created} | ${log.id} | ${log.event} | ${log.target} | ${log.file} |`).join("\n")}
`;

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, report, "utf8");

console.log(`wrote changelog: ${path.relative(vaultRoot, resolvedOut)}`);
