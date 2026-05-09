#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mode="${1:-local}"

case "$mode" in
  local)
    bash scripts/check_environment.sh
    ;;
  full)
    bash scripts/verify_all.sh
    ;;
  *)
    echo "usage: bash scripts/maintenance_check.sh [local|full]"
    exit 1
    ;;
esac

bash scripts/generate_status_report.sh >/dev/null
bash scripts/generate_changelog.sh >/dev/null
bash scripts/generate_operations_brief.sh >/dev/null

echo "maintenance check completed: $mode"
