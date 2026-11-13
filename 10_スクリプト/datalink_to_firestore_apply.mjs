import { execFileSync } from "node:child_process";
import { buildFirestoreDryRun } from "./datalink_to_firestore_dry_run.mjs";

const args = process.argv.slice(2);
const shouldApply = args.includes("--apply");
const explicitDryRun = args.includes("--dry-run") || !shouldApply;

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "";
const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
const envToken = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || "";

function usage() {
  return [
    "Usage:",
    "  node scripts/datalink_to_firestore_apply.mjs --dry-run",
    "  node scripts/datalink_to_firestore_apply.mjs --apply",
    "",
    "Environment for --apply:",
    "  GOOGLE_CLOUD_PROJECT",
    "  FIRESTORE_DATABASE_ID=(default)",
    "  GOOGLE_OAUTH_ACCESS_TOKEN or gcloud application/default credentials",
  ].join("\n");
}

function getAccessToken() {
  if (envToken) return envToken;

  try {
    return execFileSync("gcloud", ["auth", "print-access-token"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    throw new Error("missing access token: set GOOGLE_OAUTH_ACCESS_TOKEN or install/login gcloud");
  }
}

function toFirestoreValue(value) {
  if (Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map(toFirestoreValue),
      },
    };
  }

  if (typeof value === "boolean") {
    return { booleanValue: value };
  }

  if (typeof value === "number") {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  }

  if (value && typeof value === "object") {
    return {
      mapValue: {
        fields: Object.fromEntries(
          Object.entries(value).map(([key, item]) => [key, toFirestoreValue(item)]),
        ),
      },
    };
  }

  return { stringValue: String(value ?? "") };
}

function toFirestoreDocument(data) {
  return {
    fields: Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, toFirestoreValue(value)]),
    ),
  };
}

async function applyDocuments(documents) {
  if (!projectId) {
    throw new Error("GOOGLE_CLOUD_PROJECT is required for --apply");
  }

  const token = getAccessToken();
  const encodedDatabase = encodeURIComponent(databaseId);

  for (const document of documents) {
    const url = [
      "https://firestore.googleapis.com/v1/projects",
      encodeURIComponent(projectId),
      "databases",
      encodedDatabase,
      "documents",
      encodeURIComponent(document.collection),
      encodeURIComponent(document.docId),
    ].join("/");

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toFirestoreDocument(document.data)),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`failed to write ${document.path}: ${response.status} ${body}`);
    }

    console.log(`wrote ${document.path}`);
  }
}

async function main() {
  if (args.includes("--help")) {
    console.log(usage());
    return;
  }

  const result = buildFirestoreDryRun();

  if (explicitDryRun && !shouldApply) {
    console.log(JSON.stringify({
      ...result,
      mode: "apply-dry-run",
      planned_writes: result.documents.map((document) => document.path),
    }, null, 2));
    return;
  }

  await applyDocuments(result.documents);
  console.log(`firestore apply completed: ${result.document_count} documents`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
