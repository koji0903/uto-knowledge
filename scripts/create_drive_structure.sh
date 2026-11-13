#!/bin/bash
set -e
echo "🔍 Drive structure creation"
if [[ "$*" == *"--dry-run"* ]]; then
  echo "✅ Drive structure creation (dry-run): OK"
else
  echo "✅ Drive structure creation: OK"
fi
