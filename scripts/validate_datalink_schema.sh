#!/bin/bash

# Validate DataLink frontmatter against schema definitions

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/validate_datalink_schema.mjs" "$@"
