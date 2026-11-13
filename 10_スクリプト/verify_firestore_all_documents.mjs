import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "uto-os";
const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || getAccessToken();

function getAccessToken() {
  try {
    return execFileSync("gcloud", ["auth", "print-access-token"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    console.error("Error: Could not get access token from gcloud");
    console.error("Please run: gcloud auth application-default login");
    process.exit(1);
  }
}

function loadSchema() {
  const schemaPath = path.join(vaultRoot, "firestore.schema.json");
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  return schema;
}

function validateFieldType(value, fieldDef) {
  if (value === undefined || value === null || value === "") {
    return { valid: true, error: null };
  }

  switch (fieldDef.type) {
    case "string":
      if (typeof value !== "string") {
        return { valid: false, error: `Expected string, got ${typeof value}` };
      }
      if (fieldDef.pattern) {
        const regex = new RegExp(fieldDef.pattern);
        if (!regex.test(value)) {
          return { valid: false, error: `Does not match pattern ${fieldDef.pattern}` };
        }
      }
      return { valid: true, error: null };

    case "date":
      if (typeof value !== "string") {
        return { valid: false, error: `Expected date string, got ${typeof value}` };
      }
      if (fieldDef.format === "YYYY-MM-DD") {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return { valid: false, error: "Date must be in YYYY-MM-DD format" };
        }
      }
      return { valid: true, error: null };

    case "enum":
      if (!fieldDef.values.includes(value)) {
        return { valid: false, error: `Must be one of: ${fieldDef.values.join(", ")}` };
      }
      return { valid: true, error: null };

    case "array":
      if (!Array.isArray(value)) {
        return { valid: false, error: `Expected array, got ${typeof value}` };
      }
      if (fieldDef.items === "string" && !value.every(v => typeof v === "string")) {
        return { valid: false, error: "All array items must be strings" };
      }
      if (fieldDef.pattern) {
        const regex = new RegExp(fieldDef.pattern);
        for (const item of value) {
          if (!regex.test(item)) {
            return { valid: false, error: `Array item "${item}" does not match pattern ${fieldDef.pattern}` };
          }
        }
      }
      return { valid: true, error: null };

    case "boolean":
      if (typeof value !== "boolean") {
        return { valid: false, error: `Expected boolean, got ${typeof value}` };
      }
      return { valid: true, error: null };

    default:
      return { valid: true, error: null };
  }
}

async function fetchFromFirestore(path) {
  const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/${encodeURIComponent(databaseId)}/documents`;
  const url = `${baseUrl}/${path}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return { exists: false, data: null, error: null };
      }
      const body = await response.text();
      return { exists: false, data: null, error: `HTTP ${response.status}: ${body}` };
    }

    const document = await response.json();
    return { exists: true, data: document, error: null };
  } catch (err) {
    return { exists: false, data: null, error: err.message };
  }
}

function convertFirestoreDocument(firestoreDoc) {
  const fields = firestoreDoc.fields || {};
  const data = {};

  for (const [key, fieldValue] of Object.entries(fields)) {
    if (fieldValue.stringValue !== undefined) {
      data[key] = fieldValue.stringValue;
    } else if (fieldValue.integerValue !== undefined) {
      data[key] = parseInt(fieldValue.integerValue);
    } else if (fieldValue.doubleValue !== undefined) {
      data[key] = parseFloat(fieldValue.doubleValue);
    } else if (fieldValue.booleanValue !== undefined) {
      data[key] = fieldValue.booleanValue;
    } else if (fieldValue.arrayValue) {
      data[key] = (fieldValue.arrayValue.values || []).map(v => {
        if (v.stringValue) return v.stringValue;
        if (v.integerValue) return parseInt(v.integerValue);
        if (v.doubleValue) return parseFloat(v.doubleValue);
        if (v.booleanValue) return v.booleanValue;
        return v;
      });
    } else if (fieldValue.mapValue) {
      data[key] = convertFirestoreDocument({ fields: fieldValue.mapValue.fields });
    } else if (fieldValue.timestampValue) {
      data[key] = fieldValue.timestampValue;
    }
  }

  return data;
}

async function verifyDocument(dryRunDoc, schema, collectionDef) {
  const driftDetected = [];
  const errors = [];

  // Check required fields
  for (const requiredField of collectionDef.required) {
    if (!(requiredField in dryRunDoc.data)) {
      errors.push({
        severity: "error",
        field: requiredField,
        message: `Required field missing in source`,
      });
    }
  }

  // Fetch from Firestore
  const { exists, data: firestoreDoc, error: fetchError } = await fetchFromFirestore(dryRunDoc.path);

  if (fetchError) {
    errors.push({
      severity: "error",
      message: `Firestore fetch error: ${fetchError}`,
    });
    return { driftDetected, errors, exists: false };
  }

  if (!exists) {
    driftDetected.push({
      type: "missing_in_firestore",
      message: `Document exists in DataLink but not in Firestore`,
    });
    return { driftDetected, errors, exists: false };
  }

  const firestoreData = convertFirestoreDocument(firestoreDoc);

  // Compare all fields
  const allKeys = new Set([...Object.keys(dryRunDoc.data), ...Object.keys(firestoreData)]);

  for (const key of allKeys) {
    const sourceValue = dryRunDoc.data[key];
    const firestoreValue = firestoreData[key];

    // Skip obsidian_path and id fields for comparison as they're auto-added
    if (key === "obsidian_path" || (key === "id" && sourceValue === firestoreValue)) {
      continue;
    }

    // Compare values
    const sourceJson = JSON.stringify(sourceValue);
    const firestoreJson = JSON.stringify(firestoreValue);

    if (sourceJson !== firestoreJson) {
      driftDetected.push({
        type: "value_mismatch",
        field: key,
        source: sourceValue,
        firestore: firestoreValue,
      });
    }

    // Validate against schema if field is defined
    if (collectionDef.fields[key]) {
      const validation = validateFieldType(sourceValue, collectionDef.fields[key]);
      if (!validation.valid) {
        errors.push({
          severity: "warning",
          field: key,
          message: validation.error,
        });
      }
    }
  }

  return { driftDetected, errors, exists: true };
}

async function main() {
  console.log("Building Firestore dry-run from DataLink...");
  const dryRun = buildFirestoreDryRun();
  const schema = loadSchema();

  console.log(`Found ${dryRun.document_count} documents to verify`);
  console.log("");

  const results = {
    generated_at: new Date().toISOString(),
    total_documents: dryRun.document_count,
    verified: 0,
    with_drift: 0,
    missing_in_firestore: 0,
    with_errors: 0,
    documents: [],
  };

  const driftDetails = [];

  for (const doc of dryRun.documents) {
    const collectionDef = schema.collections[doc.collection];
    if (!collectionDef) {
      console.warn(`⚠️  Unknown collection: ${doc.collection}`);
      continue;
    }

    console.log(`Verifying ${doc.path}...`);
    const { driftDetected, errors, exists } = await verifyDocument(doc, schema, collectionDef);

    results.verified++;

    if (!exists) {
      results.missing_in_firestore++;
      results.documents.push({
        path: doc.path,
        exists: false,
        drift: driftDetected,
        errors,
      });
      console.log(`  ❌ Missing in Firestore`);
    } else if (driftDetected.length > 0 || errors.length > 0) {
      results.with_drift++;
      results.documents.push({
        path: doc.path,
        exists: true,
        drift: driftDetected,
        errors,
      });
      console.log(`  ⚠️  Drift detected (${driftDetected.length} fields, ${errors.length} errors)`);
      driftDetails.push({
        path: doc.path,
        driftDetected,
        errors,
      });
    } else {
      results.documents.push({
        path: doc.path,
        exists: true,
        drift: [],
        errors: [],
      });
      console.log(`  ✓ OK`);
    }

    if (errors.length > 0) {
      results.with_errors++;
    }

    // Rate limiting for API calls
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log("");
  console.log("=".repeat(60));
  console.log("VERIFICATION SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total documents: ${results.total_documents}`);
  console.log(`Verified: ${results.verified}`);
  console.log(`Missing in Firestore: ${results.missing_in_firestore}`);
  console.log(`With drift: ${results.with_drift}`);
  console.log(`With errors: ${results.with_errors}`);
  console.log("");

  if (driftDetails.length > 0) {
    console.log("DRIFT DETAILS:");
    console.log("=".repeat(60));
    for (const detail of driftDetails) {
      console.log(`\n📄 ${detail.path}`);
      if (detail.driftDetected.length > 0) {
        console.log("  Drift:");
        for (const drift of detail.driftDetected) {
          if (drift.type === "value_mismatch") {
            console.log(`    - ${drift.field}: source=${JSON.stringify(drift.source)} vs firestore=${JSON.stringify(drift.firestore)}`);
          } else {
            console.log(`    - ${drift.type}: ${drift.message}`);
          }
        }
      }
      if (detail.errors.length > 0) {
        console.log("  Errors:");
        for (const err of detail.errors) {
          console.log(`    - [${err.severity}] ${err.field || 'general'}: ${err.message}`);
        }
      }
    }
  }

  // Write report
  const reportPath = path.join(vaultRoot, "tmp", "firestore_verification_report.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Write markdown report
  const mdReportPath = path.join(vaultRoot, "tmp", "firestore_verification_report.md");
  const mdContent = generateMarkdownReport(results);
  fs.writeFileSync(mdReportPath, mdContent);

  console.log("");
  console.log(`✓ Report saved to: ${path.relative(vaultRoot, reportPath)}`);
  console.log(`✓ Markdown report saved to: ${path.relative(vaultRoot, mdReportPath)}`);

  if (results.missing_in_firestore > 0 || results.with_drift > 0) {
    process.exit(1);
  }
}

function generateMarkdownReport(results) {
  let md = `# Firestore Verification Report

**Generated:** ${results.generated_at}

## Summary

| Metric | Count |
|--------|-------|
| Total Documents | ${results.total_documents} |
| Verified | ${results.verified} |
| Missing in Firestore | ${results.missing_in_firestore} |
| With Drift | ${results.with_drift} |
| With Errors | ${results.with_errors} |

## Status

`;

  if (results.missing_in_firestore === 0 && results.with_drift === 0) {
    md += "✅ **All documents synchronized and valid**\n\n";
  } else {
    md += `⚠️ **${results.missing_in_firestore + results.with_drift} issues detected**\n\n`;
  }

  // Group by status
  const missing = results.documents.filter(d => !d.exists);
  const withDrift = results.documents.filter(d => d.exists && d.drift.length > 0);
  const ok = results.documents.filter(d => d.exists && d.drift.length === 0);

  if (missing.length > 0) {
    md += "### Missing in Firestore\n\n";
    for (const doc of missing) {
      md += `- ${doc.path}\n`;
    }
    md += "\n";
  }

  if (withDrift.length > 0) {
    md += "### Documents with Drift\n\n";
    for (const doc of withDrift) {
      md += `- ${doc.path}\n`;
      for (const drift of doc.drift) {
        if (drift.type === "value_mismatch") {
          md += `  - **${drift.field}**: \`${JSON.stringify(drift.source)}\` → \`${JSON.stringify(drift.firestore)}\`\n`;
        } else {
          md += `  - ${drift.message}\n`;
        }
      }
    }
    md += "\n";
  }

  md += `### Documents OK\n\n${ok.length} documents are synchronized and valid.\n`;

  return md;
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
