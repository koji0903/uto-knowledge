#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== git status =="
git status --short --branch --ignored

echo
echo "== generate AI context =="
bash scripts/generate_ai_context.sh

echo
echo "== local maintenance =="
bash scripts/maintenance_check.sh local

echo
echo "start work completed"
echo "next: read tmp/ai_context.md and 05_MOC/32_command_catalog.md"
