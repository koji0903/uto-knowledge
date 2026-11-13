#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node -e "JSON.parse(require('fs').readFileSync('mcp/mcp.servers.example.json','utf8')); console.log('mcp config validation passed')"
node -e "JSON.parse(require('fs').readFileSync('mcp/clients/claude_desktop.example.json','utf8')); JSON.parse(require('fs').readFileSync('mcp/clients/generic_mcp_client.example.json','utf8')); console.log('mcp client config validation passed')"
