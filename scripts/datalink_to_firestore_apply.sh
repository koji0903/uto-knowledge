#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

node scripts/datalink_to_firestore_apply.mjs "$@"
