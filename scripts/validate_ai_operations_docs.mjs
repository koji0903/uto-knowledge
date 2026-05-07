import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");

const checkedFiles = [
  "AGENTS.md",
  "README.md",
  "mcp/README.md",
  "mcp/ai_profiles/README.md",
  "mcp/ai_profiles/task_router.md",
  "mcp/ai_profiles/handoff_prompt.md",
  "mcp/ai_profiles/claude_profile.md",
  "mcp/ai_profiles/gemini_profile.md",
  "mcp/ai_profiles/chatgpt_profile.md",
  "mcp/clients/chatgpt_codex_notes.md",
  "mcp/clients/gemini_notes.md",
  "scripts/start_work.sh",
  "scripts/start_work.ps1",
];

const forbiddenPatterns = [
  { pattern: /05_MOC/g, message: "stale 05_MOC reference" },
  { pattern: /generate_context_for_(claude|gemini|chatgpt)/g, message: "stale AI-specific context command" },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

let checkedPatternCount = 0;

for (const file of checkedFiles) {
  const filePath = path.join(vaultRoot, file);
  assert(fs.existsSync(filePath), `missing AI operations document: ${file}`);

  const content = fs.readFileSync(filePath, "utf8");
  for (const { pattern, message } of forbiddenPatterns) {
    const matches = [...content.matchAll(pattern)];
    assert(matches.length === 0, `${message} in ${file}`);
    checkedPatternCount += 1;
  }
}

const contextScript = path.join(vaultRoot, "scripts/generate_ai_context.sh");
assert(fs.existsSync(contextScript), "missing scripts/generate_ai_context.sh");

console.log(`AI operations docs validation passed: ${checkedFiles.length} files, ${checkedPatternCount} pattern checks`);
