#!/bin/bash

# Visualize project dependencies and critical path analysis

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/visualize_project_dependency.mjs" "$@"
