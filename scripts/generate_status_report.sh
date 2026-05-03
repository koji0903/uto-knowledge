#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/generate_status_report.mjs "$@"
