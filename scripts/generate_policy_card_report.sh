#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/generate_policy_card_report.mjs "$@"
