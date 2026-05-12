#!/bin/bash

# Generate AI-specific interactive handoff with context, questions, and templates

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/generate_interactive_handoff.mjs" "$@"
