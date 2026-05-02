#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node -e "JSON.parse(require('fs').readFileSync('mcp/mcp.servers.example.json','utf8')); console.log('mcp config validation passed')"
