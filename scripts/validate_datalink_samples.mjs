import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const requiredConfigPath = path.join(vaultRoot, "datalink.required.json");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function loadRequiredPaths() {
  assert(fs.existsSync(requiredConfigPath), "missing datalink.required.json");

  const config = JSON.parse(fs.readFileSync(requiredConfigPath, "utf8"));
  assert(Array.isArray(config.required_documents), "required_documents must be an array");

  return config.required_documents.map((document, index) => {
    assert(document && typeof document === "object", `required_documents[${index}] must be an object`);
    assert(typeof document.path === "string" && document.path.includes("/"), `invalid required document path at index ${index}`);
    assert(typeof document.reason === "string" && document.reason.trim(), `missing required document reason at index ${index}`);
    return document.path;
  });
}

const dryRun = buildFirestoreDryRun();
const requiredPaths = loadRequiredPaths();
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

console.log(`datalink sample validation passed: ${dryRun.document_count} documents checked, ${requiredPaths.length} required documents`);
