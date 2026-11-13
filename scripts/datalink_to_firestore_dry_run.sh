#!/bin/bash
set -e
echo "🔍 Firestore dry-run export"
out_file="${1:---out}"
shift 2>/dev/null || true
echo '{"status": "dry-run", "items": 0}' > "${out_file:-tmp/datalink.firestore.json}"
echo "✅ Firestore dry-run export: OK"
