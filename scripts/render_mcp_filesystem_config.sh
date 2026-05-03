#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/render_mcp_filesystem_config.mjs "$@"
