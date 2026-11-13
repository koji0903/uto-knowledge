# 🏥 Health Dashboard

**Generated:** 2026-05-30 23:23:02 UTC

---

## 📊 システム状態サマリー

```
🟢 Overall: Healthy
   - Critical Issues: 
   - Warnings: 
   - Total DataLink: 8
```

---

## 📈 主要メトリクス

### DataLink 統計

| カテゴリ | 数 |
|---------|-----|
| **Producers** | 1 |
| **Products** | 1 |
| **Projects** | 3 |
| **Logs** | 3 |
| **Total** | 8 |

### ステータス分布

| ステータス | 数 |
|-----------|-----|
| Active | 0 |
| Archived | 0 |

### Firestore 同期

| 状態 | 数 |
|------|-----|
| Synced | 8 |
| Drifted | 0 |

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

- **24時間:** 10 commits
- **7日間:** 10 commits

### 最新のコミット

```
ec35a0f fix(ci): Update stale paths in DataLink logs and inbound references
225fde7 vault backup: 2026-05-31 07:39:07
8945f7a fix(ci): Sync validate_vault.sh with tmp/index.md → 00_System/一時ファイル_ライフサイクル.md move
```

---

## ⚠️ 課題（現在）

### Critical Issues

✅ Critical issue なし

### Warnings

✅ Warning なし

---

## ✅ アクション項目

### 優先度: Critical

- [ ] Drift report の詳細を確認 → `tmp/drift_report.json`
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

```
tmp/drift_report.json
```

### Drift Report の見方

- **type:** issue の種類
  - `missing_in_firestore` - Markdown にはあるが Firestore にない
  - `missing_in_markdown` - Firestore にはあるが Markdown にない
  - `id_mismatch` - id が不一致
  - `timestamp_skew` - 更新日時がズレている

- **severity:** 重大度
  - 🔴 `critical` - 即座に対応が必須
  - 🟡 `warning` - 確認・対応が必要
  - 🟢 `info` - 情報のみ

---

## 🔧 メンテナンス

### 定期実行

このダッシュボードは自動生成されます：

```bash
# 手動実行
bash scripts/generate_health_dashboard.sh

# 自動実行（GitHub Actions）
# .github/workflows/daily_health_check.yml
```

### トラブルシューティング

**Q: Drift が検出され続ける**
- A: `tmp/drift_report.json` を確認して、 Markdown または Firestore を修正してください

**Q: セキュリティチェックが失敗する**
- A: Git の staging area を確認し、秘密情報を削除してください

**Q: コミット数が多すぎる**
- A: 通常の動作です。過去のデータは自動的に削除されます

---

## 📞 サポート

ダッシュボード生成に関する問題：

- 仕様：`AI運用ガイド.md` と `scripts/maintenance_check.sh`
- スクリプト：`scripts/generate_health_dashboard.sh`
- 差分検出：`scripts/firestore_markdown_drift_detection.mjs`

---

**Last Updated:** 2026-05-31 08:23:02
