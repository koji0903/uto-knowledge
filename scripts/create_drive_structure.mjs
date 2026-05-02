import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const shouldApply = args.includes("--apply");
const explicitDryRun = args.includes("--dry-run") || !shouldApply;
const structurePath = path.join(vaultRoot, "drive.structure.json");
const structure = JSON.parse(fs.readFileSync(structurePath, "utf8"));
const envToken = process.env.GOOGLE_OAUTH_ACCESS_TOKEN || "";

function usage() {
  return [
    "Usage:",
    "  node scripts/create_drive_structure.mjs --dry-run",
    "  node scripts/create_drive_structure.mjs --apply",
    "",
    "Environment for --apply:",
    "  GOOGLE_OAUTH_ACCESS_TOKEN with Google Drive scope",
    "",
    "Required OAuth scope:",
    "  https://www.googleapis.com/auth/drive.file",
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
    throw new Error("missing access token: set GOOGLE_OAUTH_ACCESS_TOKEN or login with gcloud using Drive scope");
  }
}

async function createFolder(token, name, parentId = "") {
  const body = {
    name,
    mimeType: "application/vnd.google-apps.folder",
  };

  if (parentId) {
    body.parents = [parentId];
  }

  const response = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(`failed to create Drive folder ${name}: ${response.status} ${responseBody}`);
  }

  return response.json();
}

async function main() {
  if (args.includes("--help")) {
    console.log(usage());
    return;
  }

  const plan = {
    mode: shouldApply ? "apply" : "dry-run",
    root: structure.root.name,
    folders: structure.folders.map((folder) => ({
      name: folder.name,
      env: folder.env,
      firestoreCollection: folder.firestoreCollection,
      obsidianFolder: folder.obsidianFolder,
    })),
  };

  if (explicitDryRun && !shouldApply) {
    console.log(JSON.stringify(plan, null, 2));
    return;
  }

  const token = getAccessToken();
  const root = await createFolder(token, structure.root.name);
  console.log(`created root folder: ${structure.root.name} (${root.id})`);

  for (const folder of structure.folders) {
    const created = await createFolder(token, folder.name, root.id);
    console.log(`created child folder: ${folder.name} (${created.id})`);
  }

  console.log("drive structure creation completed");
  console.log("Update .env with the folder IDs printed above.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
