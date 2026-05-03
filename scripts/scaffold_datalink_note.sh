#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/scaffold_datalink_note.mjs "$@"
