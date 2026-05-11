# Phase 4 REST API クイックリファレンス

**フレームワーク:** FastAPI  
**ベースURL:** `http://localhost:8000`  
**ドキュメント:** `/docs` (Swagger UI) / `/redoc` (ReDoc)

---

## 📍 エンドポイント一覧

### 1️⃣ サーバーステータス確認

```
GET /api/v1/status
```

**応答例:**
```json
{
  "status": "running",
  "timestamp": "2026-05-12T10:30:45.123456Z",
  "version": "1.0.0",
  "prediction_count": 5456,
  "uptime_seconds": 86400
}
```

---

### 2️⃣ 観測地点一覧

```
GET /api/v1/stations
```

**応答例:**
```json
{
  "total": 11,
  "stations": [
    {
      "id": "kawachi",
      "name": "河内",
      "prefecture": "佐賀県",
      "latitude": 33.1833,
      "longitude": 129.95
    }
  ]
}
```

---

### 3️⃣ 最新赤潮予測

```
GET /api/v1/red_tide_forecast/{station_id}
```

**例:**
```
GET /api/v1/red_tide_forecast/kawachi
```

**応答例:**
```json
{
  "station_id": "kawachi",
  "station_name": "河内",
  "date": "2026-05-12",
  "red_tide_risk": {
    "ensemble_probability": 0.42,
    "alert_level": "Yellow"
  },
  "decision": {
    "final_recommendation": "MONITOR",
    "confidence": 0.775
  },
  "confidence_interval": {
    "lower": 0.35,
    "upper": 0.49
  }
}
```

---

### 4️⃣ 期間内の赤潮予測

```
GET /api/v1/red_tide_forecast/{station_id}/range
```

**パラメータ:**
```
?start=2026-05-12&end=2026-05-19
?limit=365 (オプション)
```

**例:**
```
GET /api/v1/red_tide_forecast/kawachi/range?start=2026-05-12&end=2026-05-19
```

**応答例:**
```json
{
  "station_id": "kawachi",
  "start_date": "2026-05-12",
  "end_date": "2026-05-19",
  "forecasts": [
    {
      "date": "2026-05-12",
      "red_tide_probability": 0.42,
      "alert_level": "Yellow",
      "recommendation": "MONITOR",
      "confidence": 0.78
    },
    {
      "date": "2026-05-13",
      "red_tide_probability": 0.38,
      "alert_level": "Green",
      "recommendation": "OPTIMAL",
      "confidence": 0.75
    }
  ],
  "summary": {
    "total_days": 8,
    "red_alert_count": 0,
    "yellow_alert_count": 4,
    "green_alert_count": 4,
    "trend": "stable"
  }
}
```

---

## 🚨 警告レベル説明

| レベル | 確度 | 意味 | 推奨 |
|--------|------|------|------|
| 🟢 **Green** | < 30% | 低リスク | 通常作業可能 |
| 🟡 **Yellow** | 30-70% | 中程度 | 監視継続 |
| 🔴 **Red** | > 70% | 高リスク | 早期対応・延期検討 |

---

## 📋 推奨アクション

| アクション | 状況 | 対応 |
|----------|------|------|
| **DEFER** | 赤潮リスク高い | 収穫延期・リスク低下待ち |
| **MONITOR** | リスク中程度 | 毎日監視・水の変化観察 |
| **WAIT** | 市場価格低い | 価格回復待ち・品質向上待ち |
| **OPTIMAL** | 最適条件 | 予定通り実行・通常対応 |

---

## 💻 使用例

### Python

```python
import requests

BASE_URL = "http://localhost:8000/api/v1"

# 最新予測取得
response = requests.get(f"{BASE_URL}/red_tide_forecast/kawachi")
forecast = response.json()
print(f"赤潮確度: {forecast['red_tide_risk']['ensemble_probability']}")
```

### JavaScript/Node.js

```javascript
const BASE_URL = "http://localhost:8000/api/v1";

// ステータス確認
fetch(`${BASE_URL}/status`)
  .then(r => r.json())
  .then(data => console.log(data));
```

### cURL

```bash
# ステータス確認
curl -X GET "http://localhost:8000/api/v1/status"

# 最新予測取得
curl -X GET "http://localhost:8000/api/v1/red_tide_forecast/kawachi"

# 期間予測
curl -X GET "http://localhost:8000/api/v1/red_tide_forecast/kawachi/range?start=2026-05-12&end=2026-05-19"
```

---

## ⚡ パフォーマンス指標

```
/status:                10ms
/stations:              20ms
/forecast (単一):       100ms
/forecast/range (8日):  150ms
```

---

## 🔗 関連ドキュメント

- [[Phase4_ML_Integration|Phase 4 詳細]]
- [API完全仕様書](../docs/API_Specification.md)
- [運用ガイド](../docs/OPERATIONS_GUIDE.md)

---

**最終更新:** 2026-05-12

