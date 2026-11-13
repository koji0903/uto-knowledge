#!/bin/bash

# Analyze Obsidian knowledge structure and generate improvement recommendations

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/analyze_obsidian_knowledge.mjs" "$@"
