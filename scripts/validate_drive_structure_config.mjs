import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const structurePath = path.join(vaultRoot, "drive.structure.json");
const envExamplePath = path.join(vaultRoot, ".env.example");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    throw new Error(`invalid JSON: ${path.relative(vaultRoot, file)} (${error.message})`);
  }
}

function readEnvKeys(file) {
  const keys = new Set();
  const content = fs.readFileSync(file, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 0) continue;
    keys.add(trimmed.slice(0, separator));
  }

  return keys;
}

function assertEnvName(name, context) {
  assert(typeof name === "string" && name.length > 0, `missing env in ${context}`);
  assert(/^[A-Z0-9_]+$/.test(name), `invalid env name in ${context}: ${name}`);
}

const structure = readJson(structurePath);
const envKeys = readEnvKeys(envExamplePath);

assert(structure.root && typeof structure.root === "object", "missing root in drive.structure.json");
assert(typeof structure.root.name === "string" && structure.root.name.length > 0, "missing root.name");
assertEnvName(structure.root.env, "root");
assert(envKeys.has(structure.root.env), `.env.example missing ${structure.root.env}`);

assert(Array.isArray(structure.folders), "folders must be an array");
assert(structure.folders.length > 0, "folders must not be empty");

const seenNames = new Set();
const seenEnvs = new Set([structure.root.env]);
const seenObsidianFolders = new Set();

for (const [index, folder] of structure.folders.entries()) {
  const context = `folders[${index}]`;
  assert(typeof folder.name === "string" && folder.name.length > 0, `missing name in ${context}`);
  assert(!seenNames.has(folder.name), `duplicate folder name: ${folder.name}`);
  seenNames.add(folder.name);

  assertEnvName(folder.env, context);
  assert(!seenEnvs.has(folder.env), `duplicate env: ${folder.env}`);
  seenEnvs.add(folder.env);
  assert(envKeys.has(folder.env), `.env.example missing ${folder.env}`);

  assert(typeof folder.firestoreCollection === "string", `missing firestoreCollection in ${context}`);
  assert(typeof folder.obsidianFolder === "string" && folder.obsidianFolder.length > 0, `missing obsidianFolder in ${context}`);
  assert(folder.obsidianFolder.startsWith("04_DataLink/"), `obsidianFolder must be under 04_DataLink in ${context}: ${folder.obsidianFolder}`);
  assert(!seenObsidianFolders.has(folder.obsidianFolder), `duplicate obsidianFolder: ${folder.obsidianFolder}`);
  seenObsidianFolders.add(folder.obsidianFolder);

  const obsidianPath = path.join(vaultRoot, folder.obsidianFolder);
  assert(fs.existsSync(obsidianPath), `obsidianFolder does not exist: ${folder.obsidianFolder}`);
  assert(fs.statSync(obsidianPath).isDirectory(), `obsidianFolder is not a directory: ${folder.obsidianFolder}`);

  const indexPath = path.join(obsidianPath, "index.md");
  assert(fs.existsSync(indexPath), `obsidianFolder missing index.md: ${folder.obsidianFolder}`);

  if (folder.firestoreCollection) {
    const expectedFolder = `04_DataLink/${folder.firestoreCollection}`;
    assert(folder.obsidianFolder === expectedFolder, `firestore collection folder mismatch for ${folder.firestoreCollection}: expected ${expectedFolder}, got ${folder.obsidianFolder}`);
  }
}

console.log(`drive structure config validation passed: ${structure.folders.length} folders`);
