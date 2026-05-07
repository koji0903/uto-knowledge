#!/bin/bash

# Generate AI-specific learning context

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

TARGET_AI="${1:-claude}"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/generate_ai_learning_context.mjs" "$TARGET_AI"
