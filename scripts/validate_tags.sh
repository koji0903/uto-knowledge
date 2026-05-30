#!/usr/bin/env bash
# validate_tags.sh — Vault全体の frontmatter `tags:` を語彙集と照合
# 使い方: bash scripts/validate_tags.sh [--strict]
#
# 動作:
#   1. 全 *.md の frontmatter から tags を抽出
#   2. 00_System/tag_taxonomy.md に定義された語彙と照合
#   3. 未登録タグを警告（--strict 時は exit 1）
#
# 出力例:
#   ✅ 認知済みタグ: 142個
#   ⚠️  未登録タグ (3):
#       - 'foobar'  (使用: 2ファイル)
#         00_System/vision/example.md
#         civic/concepts/example.md

set -euo pipefail

VAULT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$VAULT_ROOT"

TAXONOMY="00_System/tag_taxonomy.md"
STRICT=0
if [[ "${1:-}" == "--strict" ]]; then
  STRICT=1
fi

if [[ ! -f "$TAXONOMY" ]]; then
  echo "❌ Taxonomy file not found: $TAXONOMY" >&2
  exit 2
fi

# 既知タグの抽出: バックティック内のタグを正規語彙とする
# 例: `os/childcare`, `civic`, `MOC` ...
echo "🔍 Loading vocabulary from $TAXONOMY ..."
KNOWN_TAGS=$(
  grep -oE '`[a-zA-Z0-9_/.-]+`' "$TAXONOMY" \
    | sed 's/^`//;s/`$//' \
    | grep -E '^[a-zA-Z][a-zA-Z0-9_/-]*$' \
    | sort -u
)

# 日本語の互換タグも追加（タグ統合計画より）
EXTRA_LEGACY=$(cat <<'EOF'
子育てOS
教育OS
産業OS
移住・定住OS
RMO
ウトマチ百貨店
宇土OS
市政
議会
財政
公共施設
人口減少
財政制約
地域経済
市民参加
DX
官民連携
マニフェスト
一般質問
議員
議員活動
概念
分析
reference
MOC
ナレッジハブ
EOF
)

KNOWN_TAGS=$(printf "%s\n%s\n" "$KNOWN_TAGS" "$EXTRA_LEGACY" | sort -u)
KNOWN_COUNT=$(echo "$KNOWN_TAGS" | grep -c . || true)

echo "✅ 認知済みタグ: ${KNOWN_COUNT}個"
echo ""

# 全 frontmatter tags を抽出 (tmpfile に "tag<TAB>file" を蓄積)
TMP_USAGE=$(mktemp -t validate_tags_usage.XXXXXX)
trap 'rm -f "$TMP_USAGE"' EXIT

while IFS= read -r -d '' file; do
  tags_line=$(awk '
    /^---$/ {fm++; next}
    fm == 1 && /^tags:/ {print; exit}
  ' "$file" 2>/dev/null || true)

  [[ -z "$tags_line" ]] && continue

  # [tag1, tag2] -> tag1 tag2
  tags=$(echo "$tags_line" \
    | sed -E 's/^tags:[[:space:]]*\[//;s/\][[:space:]]*$//;s/,/ /g;s/["'"'"']//g' \
    | tr -s ' ')

  for tag in $tags; do
    tag=$(echo "$tag" | xargs)
    [[ -z "$tag" ]] && continue
    if ! grep -qxF "$tag" <<< "$KNOWN_TAGS"; then
      printf "%s\t%s\n" "$tag" "$file" >> "$TMP_USAGE"
    fi
  done
done < <(find . -name "*.md" \
  -not -path "./.git/*" \
  -not -path "./.claude/*" \
  -not -path "./.claudian/*" \
  -not -path "./.obsidian/*" \
  -not -path "./node_modules/*" \
  -print0)

if [[ ! -s "$TMP_USAGE" ]]; then
  echo "🎉 全タグが語彙集に登録されています。"
  exit 0
fi

UNIQUE_TAGS=$(cut -f1 "$TMP_USAGE" | sort -u)
TAG_COUNT=$(echo "$UNIQUE_TAGS" | grep -c . || true)

echo "⚠️  未登録タグ (${TAG_COUNT}):"
while IFS= read -r tag; do
  file_count=$(awk -F'\t' -v t="$tag" '$1 == t' "$TMP_USAGE" | wc -l | xargs)
  echo "    - '${tag}'  (使用: ${file_count}ファイル)"
  awk -F'\t' -v t="$tag" '$1 == t {print $2}' "$TMP_USAGE" | sort -u | head -3 | sed 's/^/        /'
done <<< "$UNIQUE_TAGS"

echo ""
echo "💡 新規タグは 00_System/tag_taxonomy.md に追加するか、既存タグへ統合してください。"

if [[ $STRICT -eq 1 ]]; then
  exit 1
fi
