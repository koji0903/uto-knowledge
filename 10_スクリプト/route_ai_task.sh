#!/bin/bash

# Route tasks to appropriate AI workflow chain

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$VAULT_ROOT" || exit 1

node "$SCRIPT_DIR/route_ai_task.mjs" "$@"
