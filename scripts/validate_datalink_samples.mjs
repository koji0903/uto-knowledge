import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const requiredPaths = [
  "decisions/dec_20260507_ai_handoff_operations",
  "projects/prj_regional_trading_pfu",
  "projects/prj_furusato_return_gift_boost",
  "logs/log_20260507_001",
  "logs/log_20260507_002",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const dryRun = buildFirestoreDryRun();
const paths = new Set(dryRun.documents.map((document) => document.path));

assert(dryRun.document_count === dryRun.documents.length, "document_count does not match documents length");
assert(dryRun.document_count > 0, "no DataLink Firestore documents found");

for (const requiredPath of requiredPaths) {
  assert(paths.has(requiredPath), `missing required DataLink document: ${requiredPath}`);
}

for (const document of dryRun.documents) {
  const sourcePath = path.join(vaultRoot, document.source);
  assert(fs.existsSync(sourcePath), `missing source file: ${document.source}`);
  assert(document.data.id === document.docId, `id/docId mismatch: ${document.path}`);
  assert(document.data.firestore_doc_id === document.docId, `firestore_doc_id/docId mismatch: ${document.path}`);
  assert(document.data.firestore_collection === document.collection, `firestore_collection mismatch: ${document.path}`);
  assert(document.data.obsidian_path === document.source, `obsidian_path mismatch: ${document.path}`);
}

console.log(`datalink sample validation passed: ${dryRun.document_count} documents checked`);
