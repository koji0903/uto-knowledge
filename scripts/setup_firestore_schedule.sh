#!/bin/bash

# Setup Firestore daily sync schedule

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/datalink_to_firestore_schedule.mjs" "$@"
