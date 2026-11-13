#!/bin/bash
set -e
echo "🔍 Changelog generation"
git log --oneline | head -20 > 11_テンポラリ/変更ログ.md || true
echo "✅ Changelog generated"
