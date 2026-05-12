import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const dataLinkRoot = path.join(vaultRoot, "04_DataLink");

const args = process.argv.slice(2);
const strict = args.includes("--strict");

const collectionDirs = [
  ["decisions", "decision"],
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
    .filter((entry) => entry.name !== "index.md")
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

function loadSchema(collection, type) {
  // Try to load schema using type name (singular)
  const schemaPath = path.join(dataLinkRoot, "schema", `${type}_schema.json`);
  if (!fs.existsSync(schemaPath)) {
    throw new Error(`schema not found: ${schemaPath}`);
  }
  return JSON.parse(fs.readFileSync(schemaPath, "utf8"));
}

function validateValue(value, schema, fieldPath) {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  if (schema.type === "string") {
    if (typeof value !== "string") {
      return `${fieldPath}: expected string, got ${typeof value}`;
    }
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
      return `${fieldPath}: does not match pattern ${schema.pattern}`;
    }
    if (schema.enum && !schema.enum.includes(value)) {
      return `${fieldPath}: must be one of ${schema.enum.join(", ")}`;
    }
    return null;
  }

  if (schema.type === "array") {
    if (!Array.isArray(value)) {
      return `${fieldPath}: expected array, got ${typeof value}`;
    }
    if (schema.items && schema.items.type === "string") {
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] !== "string") {
          return `${fieldPath}[${i}]: expected string, got ${typeof value[i]}`;
        }
        if (schema.items.pattern && !new RegExp(schema.items.pattern).test(value[i])) {
          return `${fieldPath}[${i}]: does not match pattern ${schema.items.pattern}`;
        }
      }
    }
    return null;
  }

  return null;
}

function validateDocument(file, frontmatter, schema) {
  const errors = [];
  const warnings = [];

  // Check required fields
  for (const required of schema.required) {
    if (!(required in frontmatter)) {
      errors.push(`missing required field: ${required}`);
    }
  }

  // Validate each property
  for (const [key, value] of Object.entries(frontmatter)) {
    if (key === "obsidian_path") continue;

    const propSchema = schema.properties[key];
    if (!propSchema) {
      if (schema.additionalProperties === false) {
        warnings.push(`unknown field: ${key}`);
      }
      continue;
    }

    const error = validateValue(value, propSchema, key);
    if (error) {
      if (schema.required.includes(key)) {
        errors.push(error);
      } else {
        warnings.push(error);
      }
    }
  }

  return { errors, warnings };
}

async function main() {
  console.log("Validating DataLink frontmatter schemas...\n");

  const results = {
    total: 0,
    valid: 0,
    warnings: 0,
    errors: 0,
    files: [],
  };

  for (const [collection, expectedType] of collectionDirs) {
    const dir = path.join(dataLinkRoot, collection);
    const schema = loadSchema(collection, expectedType);

    const files = listMarkdownFiles(dir);
    if (files.length === 0) {
      console.log(`⊘ ${collection}: no files found`);
      continue;
    }

    console.log(`📁 ${collection}/ (${files.length} files)`);

    for (const file of files) {
      const markdown = fs.readFileSync(file, "utf8");
      const frontmatter = parseFrontmatter(markdown, file);
      const relativePath = path.relative(vaultRoot, file);

      results.total++;

      // Validate type
      if (frontmatter.type !== expectedType) {
        console.log(`  ✗ ${path.basename(file)}`);
        console.log(`    - type mismatch: expected ${expectedType}, got ${frontmatter.type}`);
        results.errors++;
        results.files.push({
          path: relativePath,
          errors: [`type mismatch: expected ${expectedType}, got ${frontmatter.type}`],
          warnings: [],
        });
        continue;
      }

      const { errors, warnings } = validateDocument(file, frontmatter, schema);

      if (errors.length === 0 && warnings.length === 0) {
        console.log(`  ✓ ${path.basename(file)}`);
        results.valid++;
        results.files.push({
          path: relativePath,
          errors: [],
          warnings: [],
        });
      } else if (strict && errors.length > 0) {
        console.log(`  ✗ ${path.basename(file)}`);
        for (const err of errors) {
          console.log(`    - ${err}`);
        }
        results.errors++;
        results.files.push({
          path: relativePath,
          errors,
          warnings,
        });
      } else {
        console.log(`  ⚠  ${path.basename(file)}`);
        for (const warn of warnings) {
          console.log(`    - ${warn}`);
        }
        for (const err of errors) {
          console.log(`    - ERROR: ${err}`);
        }
        if (errors.length > 0) {
          results.errors++;
        } else {
          results.warnings++;
        }
        results.files.push({
          path: relativePath,
          errors,
          warnings,
        });
      }
    }

    console.log("");
  }

  console.log("=".repeat(60));
  console.log("VALIDATION SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total documents: ${results.total}`);
  console.log(`Valid: ${results.valid}`);
  console.log(`With warnings: ${results.warnings}`);
  console.log(`With errors: ${results.errors}`);
  console.log("");

  // Write report
  const reportPath = path.join(vaultRoot, "tmp", "datalink_validation_report.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`✓ Report saved to: ${path.relative(vaultRoot, reportPath)}`);

  if (strict && results.errors > 0) {
    console.log(`\n✗ Validation failed with ${results.errors} errors (--strict mode)`);
    process.exit(1);
  }

  if (results.errors > 0) {
    console.log(`\n⚠  Validation completed with ${results.errors} errors`);
    process.exit(1);
  }

  console.log("\n✓ Validation passed");
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
