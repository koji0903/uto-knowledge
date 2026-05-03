import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outPath = outIndex >= 0 ? args[outIndex + 1] : "tmp/mcp.filesystem.json";

const config = {
  mcpServers: {
    "uto-knowledge-filesystem": {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        vaultRoot,
      ],
    },
  },
};

const resolvedOut = path.resolve(vaultRoot, outPath);
fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
fs.writeFileSync(resolvedOut, `${JSON.stringify(config, null, 2)}\n`, "utf8");

console.log(`wrote MCP filesystem config: ${path.relative(vaultRoot, resolvedOut)}`);
console.log(`vault path: ${vaultRoot}`);
