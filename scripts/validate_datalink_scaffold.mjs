import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const cases = [
  {
    type: "decision",
    id: "dec_scaffold_validation",
    title: "Scaffold Validation Decision",
    expectedOutput: "04_DataLink/decisions/decision_scaffold_validation.md",
    template: "05_Templates/template_datalink_decision.md",
  },
  {
    type: "producer",
    id: "prodcr_scaffold_validation",
    title: "Scaffold Validation Producer",
    expectedOutput: "04_DataLink/producers/prodcr_scaffold_validation.md",
    template: "05_Templates/template_datalink_producer.md",
  },
  {
    type: "product",
    id: "prod_scaffold_validation",
    title: "Scaffold Validation Product",
    expectedOutput: "04_DataLink/products/prod_scaffold_validation.md",
    template: "05_Templates/template_datalink_product.md",
  },
  {
    type: "project",
    id: "prj_scaffold_validation",
    title: "Scaffold Validation Project",
    expectedOutput: "04_DataLink/projects/prj_scaffold_validation.md",
    template: "05_Templates/template_datalink_project.md",
  },
  {
    type: "log",
    id: "log_scaffold_validation",
    title: "Scaffold Validation Log",
    expectedOutput: "04_DataLink/logs/log_scaffold_validation.md",
    template: "05_Templates/template_datalink_log.md",
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const testCase of cases) {
  const templatePath = path.join(vaultRoot, testCase.template);
  assert(fs.existsSync(templatePath), `missing scaffold template: ${testCase.template}`);

  const outputPath = path.join(vaultRoot, testCase.expectedOutput);
  assert(!fs.existsSync(outputPath), `validation output unexpectedly exists: ${testCase.expectedOutput}`);

  const output = execFileSync(process.execPath, [
    "scripts/scaffold_datalink_note.mjs",
    "--type",
    testCase.type,
    "--id",
    testCase.id,
    "--title",
    testCase.title,
    "--dry-run",
  ], {
    cwd: vaultRoot,
    encoding: "utf8",
  });

  const result = JSON.parse(output);
  assert(result.mode === "dry-run", `invalid dry-run mode for ${testCase.type}`);
  assert(result.type === testCase.type, `invalid dry-run type for ${testCase.type}`);
  assert(result.id === testCase.id, `invalid dry-run id for ${testCase.type}`);
  assert(result.output === testCase.expectedOutput, `invalid dry-run output for ${testCase.type}: ${result.output}`);
  assert(!fs.existsSync(outputPath), `dry-run created a file: ${testCase.expectedOutput}`);
}

console.log(`datalink scaffold validation passed: ${cases.length} types`);
