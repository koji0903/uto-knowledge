import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const args = process.argv.slice(2);
const command = args[0] || "status";

function getCrontabEntry() {
  return `# Daily Firestore sync check (scheduled by datalink_to_firestore_schedule.mjs)
# Runs at 00:01 local time, dry-run verification
1 0 * * * cd "${vaultRoot}" && bash scripts/verify_firestore_all_documents.sh >> logs/firestore_sync_schedule.log 2>&1`;
}

function getHomeDir() {
  return process.env.HOME || process.env.USERPROFILE || process.env.HOMEPATH;
}

function parseCrontab() {
  try {
    const output = execSync("crontab -l", { encoding: "utf8" });
    return output;
  } catch {
    return "";
  }
}

function setCrontab(content) {
  const tempFile = path.join(getHomeDir(), `.crontab.${Date.now()}.tmp`);
  fs.writeFileSync(tempFile, content);
  try {
    execSync(`crontab "${tempFile}"`);
    fs.unlinkSync(tempFile);
  } catch (err) {
    fs.unlinkSync(tempFile);
    throw err;
  }
}

function install() {
  console.log("Installing daily Firestore sync schedule...");
  const currentCrontab = parseCrontab();
  const cronEntry = getCrontabEntry();
  const cronSignature = "# Firestore sync (datalink_to_firestore_schedule)";

  // Check if already installed
  if (currentCrontab.includes(cronSignature)) {
    console.log("✓ Cron job already installed");
    return;
  }

  // Ensure logs directory exists
  const logsDir = path.join(vaultRoot, "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  // Add new entry
  const newCrontab = currentCrontab.trim() + (currentCrontab.trim() ? "\n" : "") + cronEntry + "\n";
  setCrontab(newCrontab);

  console.log("✓ Daily Firestore sync installed");
  console.log("  Schedule: Every day at 00:01 (local time)");
  console.log("  Action: Run verify_firestore_all_documents.sh");
  console.log(`  Logs: ${path.relative(vaultRoot, path.join(logsDir, "firestore_sync_schedule.log"))}`);
  console.log("");
  console.log("Note: Verification will run daily and report any drift to the log file.");
  console.log("No automatic changes will be applied—review and apply manually when needed.");
}

function uninstall() {
  console.log("Removing Firestore sync schedule...");
  const currentCrontab = parseCrontab();
  const cronSignature = "# Firestore sync (datalink_to_firestore_schedule)";

  if (!currentCrontab.includes(cronSignature)) {
    console.log("✓ Cron job not installed");
    return;
  }

  // Remove entries related to firestore sync
  const lines = currentCrontab.split("\n");
  const filtered = lines.filter((line, idx) => {
    if (line.includes(cronSignature)) return false;
    if (line.includes("datalink_to_firestore_schedule")) return false;
    if (idx > 0 && lines[idx - 1].includes(cronSignature)) return false;
    return true;
  });

  const newCrontab = filtered.join("\n").trim() + "\n";
  setCrontab(newCrontab);

  console.log("✓ Firestore sync schedule removed");
}

function status() {
  const currentCrontab = parseCrontab();
  const cronSignature = "# Firestore sync (datalink_to_firestore_schedule)";

  if (currentCrontab.includes(cronSignature)) {
    console.log("✓ Firestore sync schedule is INSTALLED");
    console.log("");
    console.log("Cron entries:");
    const lines = currentCrontab.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(cronSignature) || lines[i].includes("datalink_to_firestore_schedule")) {
        console.log(`  ${lines[i]}`);
      }
    }
  } else {
    console.log("⊘ Firestore sync schedule is NOT installed");
    console.log("");
    console.log("To install daily sync, run:");
    console.log("  bash scripts/setup_firestore_schedule.sh install");
  }

  console.log("");
  console.log("Sync details:");
  console.log("  - Schedule: Daily at 00:01 (local time)");
  console.log("  - Mode: Dry-run verification only");
  console.log("  - Report: tmp/firestore_verification_report.md");
  console.log("  - Logs: logs/firestore_sync_schedule.log");
}

function manual() {
  console.log("Running manual Firestore sync verification...");
  console.log("");

  try {
    // Run verification
    execSync("bash scripts/verify_firestore_all_documents.sh", {
      cwd: vaultRoot,
      stdio: "inherit",
    });

    console.log("");
    console.log("✓ Manual verification completed");
    console.log("");

    // Check if there's drift
    const reportPath = path.join(vaultRoot, "tmp", "firestore_verification_report.json");
    if (fs.existsSync(reportPath)) {
      const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
      if (report.missing_in_firestore > 0 || report.with_drift > 0) {
        console.log("⚠️  Drift detected:");
        console.log(`  - Missing: ${report.missing_in_firestore}`);
        console.log(`  - With drift: ${report.with_drift}`);
        console.log("");
        console.log("View report: tmp/firestore_verification_report.md");
        console.log("");
        console.log("To apply changes to Firestore:");
        console.log("  bash scripts/datalink_to_firestore_apply.sh --dry-run");
        console.log("  bash scripts/datalink_to_firestore_apply.sh");
      } else {
        console.log("✓ All documents are synchronized");
      }
    }
  } catch (err) {
    console.error("✗ Verification failed");
    process.exit(1);
  }
}

async function main() {
  switch (command) {
    case "install":
      install();
      break;
    case "uninstall":
      uninstall();
      break;
    case "status":
      status();
      break;
    case "manual":
      manual();
      break;
    default:
      console.log("Firestore Sync Schedule Manager");
      console.log("");
      console.log("Usage: node datalink_to_firestore_schedule.mjs <command>");
      console.log("");
      console.log("Commands:");
      console.log("  status     - Show current schedule status");
      console.log("  install    - Install daily cron job (00:01 UTC)");
      console.log("  uninstall  - Remove cron job");
      console.log("  manual     - Run verification manually");
      process.exit(1);
  }
}

main();
