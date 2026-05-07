#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/detect_ai_conflicts.mjs "$@"
