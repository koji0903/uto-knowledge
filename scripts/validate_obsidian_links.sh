#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/validate_obsidian_links.mjs
