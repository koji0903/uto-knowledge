#!/bin/bash

# Detect conflicts in AI-edited documents

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

# Run the conflict detection
node "$SCRIPT_DIR/detect_ai_conflicts.mjs"
