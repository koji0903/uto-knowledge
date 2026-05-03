import { execFileSync } from "node:child_process";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "uto-os";
const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || execFileSync("gcloud", ["auth", "print-access-token"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "ignore"],
}).trim();

const comparedFields = [
  "id",
  "type",
  "firestore_collection",
  "firestore_doc_id",
  "drive_folder_id",
  "drive_url",
  "created",
  "updated",
  "status",
  "obsidian_path",
];

function fromFirestoreValue(value) {
  if (!value) return "";
  if ("stringValue" in value) return value.stringValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("arrayValue" in value) {
    return (value.arrayValue.values || []).map(fromFirestoreValue);
  }
  if ("mapValue" in value) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields || {}).map(([key, item]) => [key, fromFirestoreValue(item)]),
    );
  }
  return "";
}

function normalize(value) {
  if (Array.isArray(value)) return JSON.stringify(value);
  if (value && typeof value === "object") return JSON.stringify(value);
  return String(value ?? "");
}

async function fetchDocument(document) {
  const url = [
    `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}`,
    `databases/${encodeURIComponent(databaseId)}`,
    "documents",
    encodeURIComponent(document.collection),
    encodeURIComponent(document.docId),
  ].join("/");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`failed to read ${document.path}: ${response.status} ${body}`);
  }

  const firestoreDocument = await response.json();
  return Object.fromEntries(
    Object.entries(firestoreDocument.fields || {}).map(([key, value]) => [key, fromFirestoreValue(value)]),
  );
}

const dryRun = buildFirestoreDryRun();
const drift = [];

for (const document of dryRun.documents) {
  const remote = await fetchDocument(document);

  for (const field of comparedFields) {
    const expected = normalize(document.data[field]);
    const actual = normalize(remote[field]);

    if (expected !== actual) {
      drift.push({
        path: document.path,
        field,
        expected,
        actual,
      });
    }
  }
}

if (drift.length > 0) {
  console.error(JSON.stringify({ drift_count: drift.length, drift }, null, 2));
  process.exit(1);
}

console.log(`firestore drift check passed: ${dryRun.document_count} documents`);
