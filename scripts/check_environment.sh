#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "checking vault..."
bash scripts/validate_vault.sh

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

echo "environment check completed"
