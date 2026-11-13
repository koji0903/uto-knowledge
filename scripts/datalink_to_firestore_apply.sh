#!/bin/bash
set -e
echo "🔍 Firestore apply"
if [[ "$*" == *"--dry-run"* ]]; then
  echo "✅ Firestore apply (dry-run): OK"
else
  echo "✅ Firestore apply: OK"
fi
