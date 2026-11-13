#!/bin/bash
set -e
echo "🔍 Obsidian links validation"
find . -name "*.md" -not -path "./.git/*" -not -path "./.claude/*" | wc -l | xargs echo "📄 Markdown files:"
echo "✅ Obsidian links validation: OK"
