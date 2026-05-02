import { execFileSync } from "node:child_process";

const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || execFileSync("gcloud", ["auth", "print-access-token"], {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "ignore"],
}).trim();

const folders = [
  ["GOOGLE_DRIVE_ROOT_FOLDER_ID", "uto-knowledge-assets"],
  ["GOOGLE_DRIVE_PRODUCERS_FOLDER_ID", "producers"],
  ["GOOGLE_DRIVE_PRODUCTS_FOLDER_ID", "products"],
  ["GOOGLE_DRIVE_PROJECTS_FOLDER_ID", "projects"],
  ["GOOGLE_DRIVE_LOGS_FOLDER_ID", "logs"],
];

for (const [envName, expectedName] of folders) {
  const folderId = process.env[envName] || "";

  if (!folderId) {
    throw new Error(`missing ${envName}`);
  }

  const url = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(folderId)}?fields=id,name,mimeType,parents,webViewLink`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`failed to read ${envName}: ${response.status} ${body}`);
  }

  const file = await response.json();

  if (file.name !== expectedName) {
    throw new Error(`invalid folder name for ${envName}: expected ${expectedName}, got ${file.name}`);
  }

  console.log(`${envName} -> ${file.name} (${file.id})`);
}

console.log("drive structure verification passed");
