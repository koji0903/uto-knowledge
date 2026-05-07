import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const vaultRoot = path.resolve(scriptDir, "..");
const dataLinkRoot = path.join(vaultRoot, "04_DataLink");

function parseValue(raw) {
  const value = raw.trim();
  if (value === "") return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "[]") return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (inner === "") return [];
    return inner.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return value;
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) return {};
  const end = markdown.indexOf("\n---", 4);
  if (end < 0) return {};
  const block = markdown.slice(4, end).trim();
  const data = {};
  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);
    data[key] = parseValue(value);
  }
  return data;
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md")
    .map(e => path.join(dir, e.name))
    .sort();
}

function extractKPIs() {
  const kpis = {
    regional_trading: {
      name: "地域商社準備PFU",
      targets: {
        revenue: { value: "¥500M-1000M", year: 2032 },
        producer_count: { value: "TBD", phase: 1 },
        product_count: { value: "TBD", phase: 1 },
      },
      current: {
        revenue: "¥0 (計画段階)",
        producer_count: 0,
        product_count: 0,
        status: "planning",
      },
      phases: [
        { phase: 1, year: "2026-2027", milestone: "基盤構築", target_producer: 30 },
        { phase: 2, year: "2027-2028", milestone: "初期展開", target_producer: 50 },
        { phase: 3, year: "2029-2030", milestone: "拡大展開", target_producer: 100 },
        { phase: 4, year: "2031-2032", milestone: "目標達成", target_revenue: "¥500M" },
      ],
    },
    relocation: {
      name: "移住支援",
      targets: {
        households_per_year: { value: "30-50", unit: "世帯/年" },
        population_growth: { value: "TBD", year: 2032 },
      },
      current: {
        moved_count: 0,
        pipeline_count: 0,
        status: "planning",
      },
    },
    education: {
      name: "教育OS構築",
      targets: {
        school_regeneration: { value: "5拠点", target: 2032 },
        program_launch: { value: "15プログラム", status: "in_progress" },
      },
      current: {
        launched_programs: 0,
        participating_schools: 0,
        status: "planning",
      },
    },
    chilcare: {
      name: "保育機能強化",
      targets: {
        facility_beds: { value: "200", year: 2028 },
        support_hours: { value: "24時間対応", status: "target" },
      },
      current: {
        current_beds: 0,
        support_status: "traditional",
      },
    },
  };

  return kpis;
}

function calculateTrend(current, target, years) {
  if (typeof current !== "number" || typeof target !== "number") {
    return { trend: "unknown", rate: 0 };
  }

  if (current === target) return { trend: "on_track", rate: 100 };
  if (current > target) return { trend: "exceeded", rate: 100 };

  const progress = (current / target) * 100;
  const requiredRate = (target - current) / years;

  if (progress > 0) {
    return { trend: "in_progress", rate: progress, required_annual: requiredRate };
  } else {
    return { trend: "not_started", rate: 0, required_annual: (target - current) / years };
  }
}

function generateKPIReport(kpis) {
  let json = {
    generated_at: new Date().toISOString(),
    version: "1.0",
    kpis: {},
  };

  for (const [key, kpi] of Object.entries(kpis)) {
    json.kpis[key] = {
      name: kpi.name,
      targets: kpi.targets,
      current: kpi.current,
      phases: kpi.phases || [],
      analysis: {
        status: kpi.current.status,
        progress_estimate: calculateProgress(kpi),
        next_milestone: getNextMilestone(kpi),
      },
    };
  }

  return json;
}

function calculateProgress(kpi) {
  const statusProgress = {
    idea: 5,
    planning: 25,
    active: 60,
    paused: 40,
    done: 100,
  };
  return statusProgress[kpi.current.status] || 0;
}

function getNextMilestone(kpi) {
  if (!kpi.phases || kpi.phases.length === 0) return "未設定";
  const phases = kpi.phases;
  return phases[0].milestone || "未設定";
}

function generateMarkdownReport(kpis) {
  let md = `# KPI メトリクス抽出レポート

**生成日時:** ${new Date().toISOString()}

---

## 概要

宇土OS の戦略目標に基づいた、主要プロジェクトの KPI を抽出・追跡します。

---

## 1. 地域商社準備PFU

**目標:** 2032年 売上 ¥500M-1000M、生産者 200+ 社

| メトリクス | 目標 | 現在 | 進捗 | 2026年内 |
|---|---|---|---|---|
| 売上 | ¥500M-1000M | ¥0 | 計画段階 | 基盤整備 |
| 生産者数 | 200+ | 0 | 計画段階 | 30 社登録 |
| 産品数 | 500+ | 0 | 計画段階 | 100 品登録 |

**フェーズ:**
1. **2026-2027**: 基盤構築（生産者 30 社、産品 100）
2. **2027-2028**: 初期展開（生産者 50 社、ふるさと納税試験）
3. **2029-2030**: 拡大展開（生産者 100 社、EC/物産展展開）
4. **2031-2032**: 目標達成（売上 ¥500M、生産者 200+）

**次アクション:**
- [ ] 生産者台帳の初期候補 30 社をリスト化
- [ ] 特産品分類と返礼品戦略の検討
- [ ] ふるさと納税参加可否の確認

---

## 2. ふるさと納税返礼品強化

**目標:** 返礼品種 50+、寄附金 2 億円/年

| メトリクス | 目標 | 現在 | 進捗 |
|---|---|---|---|
| 返礼品種 | 50+ | 0 | 計画中 |
| 年間寄附金 | ¥200M | ¥0 | 計画中 |

**戦略:**
- 地域商社の産品を返礼品に組み込む
- SNS・オンラインメディアでの PR 強化
- ふるさと納税サイト（楽天、さとふる）との連携

---

## 3. 移住支援

**目標:** 30-50世帯/年、5年で 150-250 世帯増

| メトリクス | 目標（年） | 現在 | パイプライン |
|---|---|---|---|
| 移住実績 | 30-50世帯 | 0 | TBD |
| 雇用創出 | TBD | 0 | 地域商社 PFU と連携 |

**関連:** 地域商社の雇用機会拡大により加速

---

## 4. 教育OS構築

**目標:** 学校跡地再生 5 拠点、プログラム 15 個

| メトリクス | 目標 | 現在 | 進捗 |
|---|---|---|---|
| 再生拠点 | 5 | 0 | 計画中 |
| プログラム | 15 | 0 | スケッチ段階 |

**連携:** 地域商社テスト販売、移住者研修拠点

---

## 5. 保育機能強化

**目標:** 200 床、24 時間対応

| メトリクス | 目標 | 現在 | 進捗 |
|---|---|---|---|
| 定員 | 200 床 | 0 | 計画中 |
| 対応時間 | 24 時間 | 従来型 | 計画中 |

---

## プロジェクト間の依存関係

\`\`\`
地域商社PFU
    ├─→ ふるさと納税強化（産品供給）
    ├─→ 移住支援（雇用機会）
    └─→ 教育OS（テスト販売拠点）
\`\`\`

---

## 統計

- **総プロジェクト数:** 5
- **アクティブ:** 0（全て計画段階）
- **2026年ターゲット:** 3 プロジェクト開始
- **KPI 達成見込み:** 要 Q3-Q4 加速

---

## AI による次アクション提案

**Claude:**
- KPI 達成見込みの数値シミュレーション
- プロジェクト間の相互依存による加速効果の分析

**Gemini:**
- 類似自治体の移住・地域商社の実績調査
- 返礼品市場でのベストプラクティス

**ChatGPT:**
- KPI 自動追跡スクリプト
- 月次進捗レポート自動生成

---

*Generated by extract_kpi_metrics.mjs*
`;

  return md;
}

function main() {
  console.log("Extracting KPI metrics...");

  const kpis = extractKPIs();
  const jsonReport = generateKPIReport(kpis);
  const mdReport = generateMarkdownReport(kpis);

  const jsonPath = path.join(vaultRoot, "tmp", "kpi_metrics.json");
  const mdPath = path.join(vaultRoot, "tmp", "kpi_metrics.md");

  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));
  fs.writeFileSync(mdPath, mdReport);

  console.log(`✓ KPI JSON report: ${path.relative(vaultRoot, jsonPath)}`);
  console.log(`✓ KPI Markdown report: ${path.relative(vaultRoot, mdPath)}`);
  console.log("");
  console.log(mdReport);
}

main();
