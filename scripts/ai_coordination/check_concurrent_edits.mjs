import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "../..");

// File lock state files
const codexLockFile = path.join(vaultRoot, "mcp/ai_environment_management/codex_lock_state.json");
const claudeLockFile = path.join(vaultRoot, "mcp/ai_environment_management/claude_lock_state.json");
const conflictManifestFile = path.join(vaultRoot, "mcp/ai_environment_management/conflict_manifest.json");

function initializeLockFiles() {
  if (!fs.existsSync(codexLockFile)) {
    fs.writeFileSync(codexLockFile, JSON.stringify({ locked_files: [], updated_at: new Date().toISOString() }, null, 2));
  }
  if (!fs.existsSync(claudeLockFile)) {
    fs.writeFileSync(claudeLockFile, JSON.stringify({ locked_files: [], updated_at: new Date().toISOString() }, null, 2));
  }
  if (!fs.existsSync(conflictManifestFile)) {
    fs.writeFileSync(conflictManifestFile, JSON.stringify({ conflicts: [], resolved: [] }, null, 2));
  }
}

function getLockState(ai) {
  const lockFile = ai === "codex" ? codexLockFile : claudeLockFile;
  try {
    return JSON.parse(fs.readFileSync(lockFile, "utf8"));
  } catch {
    return { locked_files: [], updated_at: new Date().toISOString() };
  }
}

function getConflictManifest() {
  try {
    return JSON.parse(fs.readFileSync(conflictManifestFile, "utf8"));
  } catch {
    return { conflicts: [], resolved: [] };
  }
}

function checkConcurrentEdits() {
  initializeLockFiles();

  const codexLocks = getLockState("codex");
  const claudeLocks = getLockState("claude");
  const conflicts = getConflictManifest();

  const codexFiles = new Set(codexLocks.locked_files.map(f => f.file));
  const claudeFiles = new Set(claudeLocks.locked_files.map(f => f.file));

  // Find overlapping files
  const overlappingFiles = [...codexFiles].filter(f => claudeFiles.has(f));

  if (overlappingFiles.length === 0) {
    console.log("✅ No concurrent edits detected");
    return { status: "OK", conflicts: [] };
  }

  // Report conflicts
  console.log(`\n⚠️  CONCURRENT EDIT CONFLICTS DETECTED: ${overlappingFiles.length}`);
  console.log("=".repeat(60));

  const newConflicts = [];

  for (const file of overlappingFiles) {
    const codexLock = codexLocks.locked_files.find(f => f.file === file);
    const claudeLock = claudeLocks.locked_files.find(f => f.file === file);

    console.log(`\n🔴 CONFLICT: ${file}`);
    console.log(`   Codex:      locked at ${codexLock.lock_time}`);
    console.log(`   Claude Code: locked at ${claudeLock.lock_time}`);
    console.log(`   Action: Priority rule applies (see access_control.json)`);

    newConflicts.push({
      file,
      ai_1: "Codex",
      ai_1_lock_time: codexLock.lock_time,
      ai_2: "Claude Code",
      ai_2_lock_time: claudeLock.lock_time,
      detected_at: new Date().toISOString(),
      status: "OPEN"
    });
  }

  // Save conflict to manifest
  conflicts.conflicts.push(...newConflicts);
  fs.writeFileSync(conflictManifestFile, JSON.stringify(conflicts, null, 2));

  return { status: "CONFLICT", conflicts: newConflicts };
}

function removeExpiredLocks() {
  const now = new Date();

  for (const ai of ["codex", "claude"]) {
    const lockData = getLockState(ai);
    const activeLocks = lockData.locked_files.filter(lock => {
      const lockUntil = new Date(lock.lock_until);
      return lockUntil > now;
    });

    if (activeLocks.length !== lockData.locked_files.length) {
      const lockFile = ai === "codex" ? codexLockFile : claudeLockFile;
      lockData.locked_files = activeLocks;
      lockData.updated_at = now.toISOString();
      fs.writeFileSync(lockFile, JSON.stringify(lockData, null, 2));

      console.log(`🔓 Released ${lockData.locked_files.length - activeLocks.length} expired locks for ${ai}`);
    }
  }
}

function generateReport() {
  removeExpiredLocks();

  const codexLocks = getLockState("codex");
  const claudeLocks = getLockState("claude");
  const conflicts = getConflictManifest();

  let report = `# AI Concurrent Edit Check Report

**Generated:** ${new Date().toISOString()}

---

## 📊 Current Lock Status

### Codex Locked Files: ${codexLocks.locked_files.length}
\`\`\`json
${JSON.stringify(codexLocks.locked_files, null, 2)}
\`\`\`

### Claude Code Locked Files: ${claudeLocks.locked_files.length}
\`\`\`json
${JSON.stringify(claudeLocks.locked_files, null, 2)}
\`\`\`

---

## 🔴 Active Conflicts: ${conflicts.conflicts.filter(c => c.status === "OPEN").length}

\`\`\`json
${JSON.stringify(conflicts.conflicts.filter(c => c.status === "OPEN"), null, 2)}
\`\`\`

---

## ✅ Resolved Conflicts: ${conflicts.resolved.length}

\`\`\`json
${JSON.stringify(conflicts.resolved.slice(0, 5), null, 2)}
\`\`\`

---

## 📋 Recommendations

`;

  const activeConflicts = conflicts.conflicts.filter(c => c.status === "OPEN");
  if (activeConflicts.length > 0) {
    report += `### 🚨 Immediate Actions Required\n\n`;
    activeConflicts.forEach((conflict, idx) => {
      report += `${idx + 1}. **${conflict.file}**\n`;
      report += `   - Apply priority rule from access_control.json\n`;
      report += `   - Release lock from lower-priority AI\n`;
      report += `   - Mark conflict as RESOLVED\n\n`;
    });
  } else {
    report += `✅ No active conflicts. Both AIs can proceed safely.\n\n`;
  }

  report += `---\n\n*Generated by scripts/ai_coordination/check_concurrent_edits.mjs*\n`;

  return report;
}

function main() {
  console.log("Checking for concurrent AI edits...\n");

  const result = checkConcurrentEdits();
  const report = generateReport();

  // Save report
  const reportPath = path.join(vaultRoot, "tmp", `concurrent_edits_${new Date().toISOString().split("T")[0]}.md`);
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, report);

  console.log(`\n📊 Report saved: ${path.relative(vaultRoot, reportPath)}`);
  console.log("\n" + "=".repeat(60));
  console.log(report);

  process.exit(result.status === "OK" ? 0 : 1);
}

export { checkConcurrentEdits, removeExpiredLocks, generateReport, getLockState, getConflictManifest };

main();
