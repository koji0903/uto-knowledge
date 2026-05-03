import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const trackedFiles = execFileSync("git", ["ls-files"], {
  cwd: vaultRoot,
  encoding: "utf8",
}).trim().split("\n").filter(Boolean);

const forbiddenPathPatterns = [
  /^\.env$/,
  /^\.env\.local$/,
  /^\.firebaserc$/,
  /^\.obsidian\/workspace\.json$/,
  /^\.obsidian\/graph\.json$/,
  /^tmp\//,
  /serviceAccount.*\.json$/i,
  /firebase-adminsdk.*\.json$/i,
  /\.local\.json$/i,
];

const forbiddenContentPatterns = [
  { name: "private key", pattern: /-----BEGIN PRIVATE KEY-----/ },
  { name: "google oauth access token", pattern: /ya29\.[A-Za-z0-9_-]+/ },
  { name: "github token", pattern: /gh[pousr]_[A-Za-z0-9_]{20,}/ },
  { name: "firebase private key id", pattern: /"private_key_id"\s*:/ },
  { name: "client secret", pattern: /"client_secret"\s*:/ },
];

const allowedSecretExampleFiles = new Set([
  ".env.example",
  ".env.local.example",
  ".env.mac",
  ".env.windows",
  ".firebaserc.example",
  "scripts/security_check.mjs",
]);

const findings = [];

for (const file of trackedFiles) {
  for (const pattern of forbiddenPathPatterns) {
    if (pattern.test(file)) {
      findings.push(`forbidden tracked path: ${file}`);
    }
  }

  const absolutePath = path.join(vaultRoot, file);
  if (!fs.existsSync(absolutePath) || fs.statSync(absolutePath).size > 1024 * 1024) {
    continue;
  }

  const content = fs.readFileSync(absolutePath, "utf8");

  for (const { name, pattern } of forbiddenContentPatterns) {
    if (pattern.test(content) && !allowedSecretExampleFiles.has(file)) {
      findings.push(`possible secret content (${name}): ${file}`);
    }
  }
}

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`security check passed: ${trackedFiles.length} tracked files`);
