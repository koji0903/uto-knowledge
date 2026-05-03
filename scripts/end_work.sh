#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== local maintenance =="
bash scripts/maintenance_check.sh local

echo
echo "== git status =="
git status --short --branch --ignored

echo
echo "== recent commits =="
git log --oneline -5

echo
echo "end work completed"
echo "next:"
echo "  - commit/push any remaining tracked changes"
echo "  - run: gh run list --repo koji0903/uto-knowledge --workflow validate.yml --limit 3"
echo "  - if DataLink changed, run: bash scripts/datalink_to_firestore_apply.sh --dry-run"
echo "  - after Firestore apply, run: bash scripts/check_firestore_drift.sh"
