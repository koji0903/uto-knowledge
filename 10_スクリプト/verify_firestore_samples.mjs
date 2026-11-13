import { execFileSync } from "node:child_process";

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "uto-os";
const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || execFileSync("gcloud", ["auth", "print-access-token"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "ignore"],
}).trim();

const documents = [
  "producers/prodcr_001",
  "products/prod_001",
  "projects/prj_001",
  "logs/log_20260503_001",
];

const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/${encodeURIComponent(databaseId)}/documents`;

for (const documentPath of documents) {
  const response = await fetch(`${baseUrl}/${documentPath}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`failed to read ${documentPath}: ${response.status} ${body}`);
  }

  const document = await response.json();
  console.log(`${documentPath} -> ${document.name}`);
}

console.log("firestore sample verification passed");
