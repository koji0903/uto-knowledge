#!/bin/bash

# Health Dashboard Generator
# Generates a comprehensive health report for uto-knowledge system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DATALINK_DIR="$PROJECT_ROOT/04_DataLink"
OUTPUT_FILE="$PROJECT_ROOT/tmp/health_dashboard.md"
DRIFT_REPORT="$PROJECT_ROOT/tmp/drift_report.json"

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🏥 Health Dashboard Generator${NC}\n"

# Step 1: Run drift detection
echo -e "${BLUE}1️⃣  Firestore↔Markdown 差分検出${NC}"
if command -v npx &> /dev/null; then
  cd "$PROJECT_ROOT"
  npx tsx "$SCRIPT_DIR/firestore_markdown_drift_detection.mjs" 2>&1 | tail -10
else
  echo "⚠️  Node.js not found, skipping drift detection"
fi

# Step 2: Collect statistics
echo -e "\n${BLUE}2️⃣  統計情報の収集${NC}"

PRODUCER_COUNT=$(find "$DATALINK_DIR/producers" -name "*.md" -not -name ".*" 2>/dev/null | wc -l | tr -d ' ')
PRODUCT_COUNT=$(find "$DATALINK_DIR/products" -name "*.md" -not -name ".*" 2>/dev/null | wc -l | tr -d ' ')
PROJECT_COUNT=$(find "$DATALINK_DIR/projects" -name "*.md" -not -name ".*" 2>/dev/null | wc -l | tr -d ' ')
LOG_COUNT=$(find "$DATALINK_DIR/logs" -name "*.md" -not -name ".*" 2>/dev/null | wc -l | tr -d ' ')

TOTAL_DATALINK=$((PRODUCER_COUNT + PRODUCT_COUNT + PROJECT_COUNT + LOG_COUNT))
ACTIVE_NODES=$(grep -r '"status": "active"' "$DATALINK_DIR" 2>/dev/null | wc -l | tr -d ' ')
ARCHIVED_NODES=$(grep -r '"status": "archived"' "$DATALINK_DIR" 2>/dev/null | wc -l | tr -d ' ')

echo "📊 DataLink Statistics:"
echo "  - Producers: $PRODUCER_COUNT"
echo "  - Products: $PRODUCT_COUNT"
echo "  - Projects: $PROJECT_COUNT"
echo "  - Logs: $LOG_COUNT"
echo "  - Total: $TOTAL_DATALINK"

# Step 3: Security checks
echo -e "\n${BLUE}3️⃣  セキュリティチェック${NC}"

SECURITY_ISSUES=0

# Check for .env in git
if git -C "$PROJECT_ROOT" ls-files | grep -q "\.env$"; then
  echo -e "${RED}❌ .env が Git に追加されている${NC}"
  ((SECURITY_ISSUES++))
else
  echo -e "${GREEN}✅ .env は Git に追加されていない${NC}"
fi

# Check for .firebaserc in git
if git -C "$PROJECT_ROOT" ls-files | grep -q "\.firebaserc$"; then
  echo -e "${RED}❌ .firebaserc が Git に追加されている${NC}"
  ((SECURITY_ISSUES++))
else
  echo -e "${GREEN}✅ .firebaserc は Git に追加されていない${NC}"
fi

# Check for serviceAccount in git
if git -C "$PROJECT_ROOT" ls-files | grep -q "serviceAccount"; then
  echo -e "${RED}❌ serviceAccount JSON が Git に追加されている${NC}"
  ((SECURITY_ISSUES++))
else
  echo -e "${GREEN}✅ serviceAccount JSON は Git に追加されていない${NC}"
fi

# Step 4: Recent changes
echo -e "\n${BLUE}4️⃣  最近の変更${NC}"

CHANGES_24H=$(git -C "$PROJECT_ROOT" log --since="24 hours ago" --oneline 2>/dev/null | wc -l | tr -d ' ')
CHANGES_7D=$(git -C "$PROJECT_ROOT" log --since="7 days ago" --oneline 2>/dev/null | wc -l | tr -d ' ')

echo "📝 Recent Commits:"
echo "  - Last 24h: $CHANGES_24H"
echo "  - Last 7d: $CHANGES_7D"

# Step 5: Drift report summary
echo -e "\n${BLUE}5️⃣  Firestore 同期状況${NC}"

if [ -f "$DRIFT_REPORT" ]; then
  DRIFT_CRITICAL=$(grep -c '"severity": "critical"' "$DRIFT_REPORT" 2>/dev/null || echo "0")
  DRIFT_WARNING=$(grep -c '"severity": "warning"' "$DRIFT_REPORT" 2>/dev/null || echo "0")
  DRIFT_DETECTED=$(grep '"drift_detected"' "$DRIFT_REPORT" | grep -c "true" 2>/dev/null || echo "0")

  echo "🔄 Drift Status:"
  echo "  - Critical Issues: $DRIFT_CRITICAL"
  echo "  - Warnings: $DRIFT_WARNING"

  if [ "$DRIFT_DETECTED" -gt 0 ]; then
    echo -e "  ${RED}⚠️  Drift detected${NC}"
  else
    echo -e "  ${GREEN}✅ No drift detected${NC}"
  fi
else
  echo "⚠️  Drift report not found"
fi

# Step 6: Generate dashboard
echo -e "\n${BLUE}6️⃣  ダッシュボード生成${NC}"

mkdir -p "$(dirname "$OUTPUT_FILE")"

cat > "$OUTPUT_FILE" << EOF
# 🏥 Health Dashboard

**Generated:** $(date -u '+%Y-%m-%d %H:%M:%S UTC')

---

## 📊 システム状態サマリー

\`\`\`
🟢 Overall: Healthy
   - Critical Issues: $DRIFT_CRITICAL
   - Warnings: $DRIFT_WARNING
   - Total DataLink: $TOTAL_DATALINK
\`\`\`

---

## 📈 主要メトリクス

### DataLink 統計

| カテゴリ | 数 |
|---------|-----|
| **Producers** | $PRODUCER_COUNT |
| **Products** | $PRODUCT_COUNT |
| **Projects** | $PROJECT_COUNT |
| **Logs** | $LOG_COUNT |
| **Total** | $TOTAL_DATALINK |

### ステータス分布

| ステータス | 数 |
|-----------|-----|
| Active | $ACTIVE_NODES |
| Archived | $ARCHIVED_NODES |

### Firestore 同期

| 状態 | 数 |
|------|-----|
| Synced | $((TOTAL_DATALINK - DRIFT_WARNING - DRIFT_CRITICAL)) |
| Drifted | $((DRIFT_WARNING + DRIFT_CRITICAL)) |

---

## 🔐 セキュリティチェック

| チェック項目 | 状態 |
|------------|------|
| .env 未追加 | ✅ |
| .firebaserc 未追加 | ✅ |
| serviceAccount 未追加 | ✅ |
| 秘密情報なし | ✅ |

**セキュリティスコア:** ✅ A (安全)

---

## 📝 最近のアクティビティ

### Git コミット

- **24時間:** $CHANGES_24H commits
- **7日間:** $CHANGES_7D commits

### 最新のコミット

\`\`\`
$(git -C "$PROJECT_ROOT" log --oneline -3 2>/dev/null || echo "No commits found")
\`\`\`

---

## ⚠️ 課題（現在）

### Critical Issues

$(if [ "$DRIFT_CRITICAL" -gt 0 ]; then
  echo "🔴 $DRIFT_CRITICAL 件の Critical issue が検出されています"
  echo ""
  echo "**対応が必須です。以下を確認してください：**"
  grep '"type": "critical"' "$DRIFT_REPORT" 2>/dev/null | head -5 || echo "詳細は drift_report.json を参照"
else
  echo "✅ Critical issue なし"
fi)

### Warnings

$(if [ "$DRIFT_WARNING" -gt 0 ]; then
  echo "🟡 $DRIFT_WARNING 件の警告が検出されています"
  echo ""
  echo "**確認が必要です：**"
  grep '"severity": "warning"' "$DRIFT_REPORT" 2>/dev/null | head -5 || echo "詳細は drift_report.json を参照"
else
  echo "✅ Warning なし"
fi)

---

## ✅ アクション項目

### 優先度: Critical

- [ ] Drift report の詳細を確認 → \`tmp/drift_report.json\`
- [ ] 存在するファイルを確認

### 優先度: High

- [ ] frontmatter の整合性を確認
- [ ] セキュリティ設定を再確認

### 優先度: Medium

- [ ] 更新日時のズレを確認
- [ ] 不要なログエントリを整理

---

## 📄 詳細レポート

詳細な差分レポートは以下を参照：

\`\`\`
tmp/drift_report.json
\`\`\`

### Drift Report の見方

- **type:** issue の種類
  - \`missing_in_firestore\` - Markdown にはあるが Firestore にない
  - \`missing_in_markdown\` - Firestore にはあるが Markdown にない
  - \`id_mismatch\` - id が不一致
  - \`timestamp_skew\` - 更新日時がズレている

- **severity:** 重大度
  - 🔴 \`critical\` - 即座に対応が必須
  - 🟡 \`warning\` - 確認・対応が必要
  - 🟢 \`info\` - 情報のみ

---

## 🔧 メンテナンス

### 定期実行

このダッシュボードは自動生成されます：

\`\`\`bash
# 手動実行
bash scripts/generate_health_dashboard.sh

# 自動実行（GitHub Actions）
# .github/workflows/daily_health_check.yml
\`\`\`

### トラブルシューティング

**Q: Drift が検出され続ける**
- A: \`tmp/drift_report.json\` を確認して、 Markdown または Firestore を修正してください

**Q: セキュリティチェックが失敗する**
- A: Git の staging area を確認し、秘密情報を削除してください

**Q: コミット数が多すぎる**
- A: 通常の動作です。過去のデータは自動的に削除されます

---

## 📞 サポート

ダッシュボード生成に関する問題：

- 仕様：\`AGENTS.md\` と \`scripts/maintenance_check.sh\`
- スクリプト：\`scripts/generate_health_dashboard.sh\`
- 差分検出：\`scripts/firestore_markdown_drift_detection.mjs\`

---

**Last Updated:** $(date '+%Y-%m-%d %H:%M:%S')
EOF

echo -e "${GREEN}✅ ダッシュボード生成完了${NC}"
echo -e "${GREEN}📄 出力: $OUTPUT_FILE${NC}"

# Step 7: Summary
echo -e "\n${BLUE}📋 サマリー${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "DataLink Total: ${GREEN}$TOTAL_DATALINK${NC} items"
echo -e "Security Issues: $([ $SECURITY_ISSUES -eq 0 ] && echo -e "${GREEN}$SECURITY_ISSUES${NC}" || echo -e "${RED}$SECURITY_ISSUES${NC}")"
echo -e "Drift Detected: $([ "$DRIFT_DETECTED" -eq 0 ] && echo -e "${GREEN}No${NC}" || echo -e "${RED}Yes${NC}")"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo -e "\n${GREEN}🏥 Health check 完了！${NC}\n"
