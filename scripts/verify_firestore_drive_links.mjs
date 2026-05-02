import { execFileSync } from "node:child_process";

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "uto-os";
const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || execFileSync("gcloud", ["auth", "print-access-token"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "ignore"],
}).trim();

const expected = [
  ["producers/prodcr_001", "https://drive.google.com/drive/folders/1rVL-YyzUc5h3DCyvUZ-UWveJQu_ki1Z7"],
  ["products/prod_001", "https://drive.google.com/drive/folders/1JRI_gJb7Ko5gML4KVzspgP8aALOObEwg"],
  ["projects/prj_001", "https://drive.google.com/drive/folders/1DgsDPQNP8oM8Sg1ULfPfPjv27fP_QNsf"],
  ["logs/log_20260503_001", "https://drive.google.com/drive/folders/17H4YW7snnfFMNI9pK_S8TOzqku7Mo2fQ"],
];

const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/${encodeURIComponent(databaseId)}/documents`;

for (const [documentPath, expectedUrl] of expected) {
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
  const actualUrl = document.fields?.drive_url?.stringValue || "";

  if (actualUrl !== expectedUrl) {
    throw new Error(`invalid drive_url for ${documentPath}: expected ${expectedUrl}, got ${actualUrl}`);
  }

  console.log(`${documentPath} -> ${actualUrl}`);
}

console.log("firestore drive link verification passed");
