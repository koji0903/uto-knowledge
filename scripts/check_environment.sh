#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "checking vault..."
bash scripts/validate_vault.sh

echo "checking mcp config..."
bash scripts/validate_mcp_config.sh

echo "checking datalink samples..."
bash scripts/validate_datalink_samples.sh

echo "checking datalink frontmatter..."
bash scripts/validate_datalink_frontmatter.sh

echo "checking firestore dry-run..."
bash scripts/datalink_to_firestore_dry_run.sh --out tmp/datalink.firestore.json

echo "checking firestore apply dry-run..."
bash scripts/datalink_to_firestore_apply.sh --dry-run >/dev/null

echo "checking drive structure dry-run..."
bash scripts/create_drive_structure.sh --dry-run >/dev/null

echo "checking mcp filesystem render..."
bash scripts/render_mcp_filesystem_config.sh >/dev/null

echo "generating status report..."
bash scripts/generate_status_report.sh >/dev/null

echo "checking git..."
git rev-parse --is-inside-work-tree >/dev/null
git status --short --branch

echo "checking optional CLIs..."

if command -v gcloud >/dev/null 2>&1; then
  echo "gcloud: found"
else
  echo "gcloud: not found"
fi

if command -v firebase >/dev/null 2>&1; then
  echo "firebase: found"
else
  echo "firebase: not found"
fi

if command -v gh >/dev/null 2>&1; then
  echo "gh: found"
else
  echo "gh: not found"
fi

if command -v npx >/dev/null 2>&1; then
  echo "npx: found"
else
  echo "npx: not found"
fi

echo "environment check completed"
