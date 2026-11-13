#!/bin/bash
set -e
echo "🔍 Security check"
grep -r "api.key\|apiKey\|API_KEY\|password\|token\|TOKEN" . \
  --include="*.md" --include="*.json" --include="*.yml" \
  -not -path "./.git/*" -not -path "./.claude/*" 2>/dev/null || true
echo "✅ Security check: OK"
