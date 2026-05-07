import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    year: "",
    month: "",
    member: "",
    title: "",
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--year") parsed.year = args[++i];
    else if (args[i] === "--month") parsed.month = args[++i];
    else if (args[i] === "--member") parsed.member = args[++i];
    else if (args[i] === "--title") parsed.title = args[++i];
    else if (args[i] === "--dry-run") parsed.dryRun = true;
  }

  return parsed;
}

function generateId(year, month, member) {
  return `q_${year}_${month}_${member}`.toLowerCase();
}

function formatFilename(year, month, member) {
  return `${year}_${month}_${member}_general_question.md`;
}

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function generateQuestionDate(year, month) {
  // Convert year (r4, r5, r6) to calendar year
  const baseYear = 2019; // Reiwa 1 = 2019
  const yearMatch = year.match(/r(\d+)/i);
  if (!yearMatch) return `${year}-${month}月`;

  const calendarYear = baseYear + parseInt(yearMatch[1]) - 1;
  const monthNum = parseInt(month.replace(/月/, ""));

  if (isNaN(monthNum)) return `${calendarYear}年${month}`;
  return `${calendarYear}年${monthNum}月`;
}

function getMeetingName(year, month) {
  const monthMap = {
    "03": "3月（3月定例会）",
    "06": "6月（6月定例会）",
    "09": "9月（9月定例会）",
    "12": "12月（12月定例会）",
  };

  const key = month.padStart(2, "0");
  return monthMap[key] || `${month}月定例会`;
}

function scaffold(opts) {
  if (!opts.year || !opts.month || !opts.member) {
    console.error("Error: --year, --month, --member are required");
    console.error(
      "Usage: scaffold_assembly_question.mjs --year r4 --month 12 --member hijikuro [--title \"Title\"] [--dry-run]"
    );
    process.exit(1);
  }

  const id = generateId(opts.year, opts.month, opts.member);
  const filename = formatFilename(opts.year, opts.month, opts.member);
  const questionDate = generateQuestionDate(opts.year, opts.month);
  const meetingName = getMeetingName(opts.year, opts.month);
  const createdDate = getCurrentDate();
  const title = opts.title || `${opts.year}-${opts.month} ${opts.member}議員一般質問`;

  // Read template
  const templatePath = path.join(
    vaultRoot,
    "04_DataLink",
    "01_ASSEMBLY",
    "_templates",
    "assembly_question_template.md"
  );

  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Template not found at ${templatePath}`);
    process.exit(1);
  }

  let content = fs.readFileSync(templatePath, "utf-8");

  // Replace placeholders
  content = content
    .replace(/TEMPLATE_MEETING_MEMBER/g, `${opts.year}_${opts.month}_${opts.member}`)
    .replace(/q_TEMPLATE_MEETING_MEMBER/g, id)
    .replace(/MEETING_NAME/g, meetingName)
    .replace(/MEETING_CODE/g, opts.year)
    .replace(/MEMBER_NAME/g, opts.member)
    .replace(/CREATED_DATE/g, createdDate)
    .replace(/QUESTION_DATE/g, questionDate)
    .replace(/QA_COUNT/g, "0");

  const outputPath = path.join(
    vaultRoot,
    "04_DataLink",
    "01_ASSEMBLY",
    "questions",
    filename
  );

  if (opts.dryRun) {
    console.log(`[DRY RUN] Would create: ${outputPath}`);
    console.log("---");
    console.log(content.split("\n").slice(0, 30).join("\n"));
    console.log("...");
    return;
  }

  // Write file
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content);

  console.log(`✓ Assembly question created: ${outputPath}`);
  console.log(`ID: ${id}`);
  console.log(`Filename: ${filename}`);
}

// Main
const args = parseArgs();
scaffold(args);
