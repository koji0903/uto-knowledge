#!/usr/bin/env python3
"""
海苔シーズンベースのデータ移行スクリプト

機能:
  1. marine_daily_features.csv をシーズン毎に分割
  2. 各シーズンフォルダに CSV を配置
  3. season_metadata.json を生成
  4. データ品質統計を計算

使用方法:
  python3 migrate_to_seasons.py \
    --input /Users/hijikuro/Codex/Nori/integrated_data/marine_daily_features.csv \
    --output /Users/hijikuro/workspace/uto-knowledge/04_DataLink/datasets/seasons
"""

import os
import sys
import json
import pandas as pd
import argparse
from datetime import datetime
from pathlib import Path


def assign_to_season(date_str: str) -> tuple:
    """
    日付をシーズンと期間タイプに割り当てる

    シーズン定義（修正版 2026-05-12）:
      養殖季: 9月～5月（9ヶ月）
      オフシーズン: 6月～8月（3ヶ月）

    例:
      2025-01-15 → ("2024", "farming")      ← 2024シーズン養殖期
      2025-05-31 → ("2024", "farming")      ← 2024シーズン養殖期終了
      2025-06-01 → ("2024", "offseason")    ← 2024シーズンオフシーズン開始
      2025-08-31 → ("2024", "offseason")    ← 2024シーズンオフシーズン終了
      2025-09-01 → ("2025", "farming")      ← 2025シーズン開始
      2026-05-31 → ("2025", "farming")      ← 2025シーズン養殖期終了

    Args:
        date_str: YYYY-MM-DD形式の日付文字列

    Returns:
        (シーズンID, 期間タイプ) のタプル
        シーズンID: 年度のみ（"2024", "2025" など）
        期間タイプ: "farming" (9月-5月) または "offseason" (6月-8月)
    """
    date_obj = pd.to_datetime(date_str)
    year = date_obj.year
    month = date_obj.month

    # 9月～12月: その年のシーズン（養殖期）
    if month >= 9:
        season_id = str(year)
        period = "farming"
    # 1月～5月: 前年のシーズン（養殖期）
    elif 1 <= month <= 5:
        season_id = str(year - 1)
        period = "farming"
    # 6月～8月: 前年のシーズン（オフシーズン）
    else:  # 6 <= month <= 8
        season_id = str(year - 1)
        period = "offseason"

    return (season_id, period)


def generate_season_metadata(df: pd.DataFrame, season_id: str, output_dir: str) -> dict:
    """
    シーズンのメタデータを生成

    Args:
        df: シーズンデータフレーム
        season_id: シーズンID (e.g., "2024"，"2025")
        output_dir: 出力ディレクトリ

    Returns:
        メタデータ辞書
    """
    dates = pd.to_datetime(df['date'])
    start_date = dates.min().strftime('%Y-%m-%d')
    end_date = dates.max().strftime('%Y-%m-%d')

    # シーズンのステータス判定
    # シーズン終了日: YYYY年5月31日
    today = datetime.now()
    season_year = int(season_id)
    season_end_date = pd.to_datetime(f"{season_year+1}-05-31")
    status = "completed" if today > season_end_date else "in_progress"

    metadata = {
        "season": season_id,
        "start_date": start_date,
        "end_date": end_date,
        "status": status,
        "phases": {
            "preparation": {
                "period": f"{season_year}-09 to {season_year}-10",
                "status": "completed" if season_end_date < today else "pending"
            },
            "main_season": {
                "period": f"{season_year}-11 to {season_year+1}-02",
                "status": "completed" if season_end_date < today else "in_progress"
            },
            "spring_nori": {
                "period": f"{season_year+1}-03 to {season_year+1}-05",
                "status": "completed" if season_end_date < today else "pending"
            }
        },
        "data_sources": list(set([
            col for col in df.columns
            if not col.startswith('_') and col not in ['date', 'station_id']
        ])),
        "record_count": len(df),
        "unique_stations": int(df['station_id'].nunique()),
        "unique_dates": int(df['date'].nunique()),
        "schema_version": "3.2",
        "data_quality": {
            "completeness": float(df.notna().sum().sum() / (len(df) * len(df.columns))),
            "missing_values": int(df.isna().sum().sum()),
            "null_ratio": float(df.isna().sum().sum() / (len(df) * len(df.columns)))
        }
    }

    return metadata


def migrate_data(input_file: str, output_dir: str, dry_run: bool = False) -> dict:
    """
    データをシーズンと期間タイプ毎に分割して保存

    フォルダ構造:
      seasons/{season_id}/          ← 養殖季データ（9月～4月）
      off_season/{season_id}/       ← オフシーズンデータ（5月～8月）

    Args:
        input_file: 入力CSV ファイルパス
        output_dir: 出力ディレクトリパス
        dry_run: ドライラン実行か

    Returns:
        実行結果統計
    """
    print(f"\n📊 海苔シーズンベース データ移行（養殖季＋オフシーズン分離）")
    print(f"=" * 70)
    print(f"入力ファイル: {input_file}")
    print(f"出力ディレクトリ: {output_dir}")
    print(f"モード: {'DRY-RUN' if dry_run else 'PRODUCTION'}")

    # データ読み込み
    print(f"\n📖 データ読み込み中...")
    df = pd.read_csv(input_file)
    print(f"✓ {len(df):,} 行のデータを読み込みました")

    # シーズン・期間タイプカラムを追加
    print(f"\n🔄 日付をシーズン・期間タイプに割り当て中...")
    season_period = df['date'].apply(assign_to_season)
    df['season'] = season_period.apply(lambda x: x[0])
    df['period_type'] = season_period.apply(lambda x: x[1])

    seasons = df['season'].unique()
    print(f"✓ {len(seasons)} シーズン を検出しました: {sorted(seasons)}")
    print(f"  - 養殖季データ: {len(df[df['period_type'] == 'farming']):,} 行")
    print(f"  - オフシーズンデータ: {len(df[df['period_type'] == 'offseason']):,} 行")

    # シーズン毎に分割して保存
    print(f"\n💾 シーズン毎にデータを保存中...")
    stats = {
        "total_records": len(df),
        "seasons": {},
        "offseasons": {},
        "output_files": {}
    }

    for season in sorted(seasons):
        print(f"\n🌾 シーズン {season}:")

        # 養殖季データ
        farming_df = df[(df['season'] == season) & (df['period_type'] == 'farming')].drop(['season', 'period_type'], axis=1)
        if len(farming_df) > 0:
            season_dir = os.path.join(output_dir, "seasons", season)
            Path(season_dir).mkdir(parents=True, exist_ok=True)

            csv_path = os.path.join(season_dir, "marine_daily_features.csv")
            print(f"  ├─ 養殖季 (9月～4月):")
            print(f"  │  ├─ レコード数: {len(farming_df):,}")
            print(f"  │  ├─ 期間: {farming_df['date'].min()} ～ {farming_df['date'].max()}")
            print(f"  │  └─ 観測地点: {int(farming_df['station_id'].nunique())}")

            if not dry_run:
                farming_df.to_csv(csv_path, index=False)
                print(f"  │  ✓ 保存: {csv_path}")
            else:
                print(f"  │  [DRY-RUN] 保存予定: {csv_path}")

            # メタデータ生成（養殖季）
            metadata = generate_season_metadata(farming_df, season, season_dir)
            metadata['period_type'] = 'farming'
            metadata['period_description'] = '9月～4月 養殖期間'
            metadata_path = os.path.join(season_dir, "season_metadata.json")

            if not dry_run:
                with open(metadata_path, 'w', encoding='utf-8') as f:
                    json.dump(metadata, f, indent=2, ensure_ascii=False)
                print(f"  │  ✓ メタデータ: {metadata_path}")
            else:
                print(f"  │  [DRY-RUN] メタデータ生成予定: {metadata_path}")

            stats["seasons"][season] = {
                "record_count": len(farming_df),
                "start_date": farming_df['date'].min(),
                "end_date": farming_df['date'].max(),
                "unique_stations": int(farming_df['station_id'].nunique()),
                "quality_score": round(metadata["data_quality"]["completeness"], 3)
            }
            stats["output_files"][f"seasons/{season}"] = csv_path if not dry_run else f"[DRY-RUN] {csv_path}"

        # オフシーズンデータ
        offseason_df = df[(df['season'] == season) & (df['period_type'] == 'offseason')].drop(['season', 'period_type'], axis=1)
        if len(offseason_df) > 0:
            offseason_dir = os.path.join(output_dir, "off_season", season)
            Path(offseason_dir).mkdir(parents=True, exist_ok=True)

            csv_path = os.path.join(offseason_dir, "marine_daily_features.csv")
            print(f"  └─ オフシーズン (5月～8月):")
            print(f"     ├─ レコード数: {len(offseason_df):,}")
            print(f"     ├─ 期間: {offseason_df['date'].min()} ～ {offseason_df['date'].max()}")
            print(f"     └─ 観測地点: {int(offseason_df['station_id'].nunique())}")

            if not dry_run:
                offseason_df.to_csv(csv_path, index=False)
                print(f"     ✓ 保存: {csv_path}")
            else:
                print(f"     [DRY-RUN] 保存予定: {csv_path}")

            # メタデータ生成（オフシーズン）
            metadata = generate_season_metadata(offseason_df, season, offseason_dir)
            metadata['period_type'] = 'offseason'
            metadata['period_description'] = '5月～8月 準備期間・気象監視'
            metadata_path = os.path.join(offseason_dir, "season_metadata.json")

            if not dry_run:
                with open(metadata_path, 'w', encoding='utf-8') as f:
                    json.dump(metadata, f, indent=2, ensure_ascii=False)
                print(f"     ✓ メタデータ: {metadata_path}")
            else:
                print(f"     [DRY-RUN] メタデータ生成予定: {metadata_path}")

            stats["offseasons"][season] = {
                "record_count": len(offseason_df),
                "start_date": offseason_df['date'].min(),
                "end_date": offseason_df['date'].max(),
                "unique_stations": int(offseason_df['station_id'].nunique()),
                "quality_score": round(metadata["data_quality"]["completeness"], 3)
            }
            stats["output_files"][f"off_season/{season}"] = csv_path if not dry_run else f"[DRY-RUN] {csv_path}"

    print(f"\n{'=' * 70}")
    print(f"✅ 移行完了！")
    print(f"{'=' * 70}")

    return stats


def print_summary(stats: dict):
    """実行結果サマリーを表示"""
    print(f"\n📈 移行結果サマリー:")
    print(f"  総レコード数: {stats['total_records']:,}")
    print(f"  シーズン数: {len(stats['seasons'])}")
    print(f"  養殖季フォルダ: {len(stats['seasons'])}")
    print(f"  オフシーズンフォルダ: {len(stats['offseasons'])}")

    if stats['seasons']:
        print(f"\n  🌾 養殖季 (9月～4月):")
        for season, info in sorted(stats['seasons'].items()):
            print(f"\n    シーズン {season}:")
            print(f"      - レコード数: {info['record_count']:,}")
            print(f"      - 期間: {info['start_date']} ～ {info['end_date']}")
            print(f"      - 観測地点: {info['unique_stations']}")
            print(f"      - データ品質スコア: {info['quality_score']}")

    if stats['offseasons']:
        print(f"\n  🌤️  オフシーズン (5月～8月):")
        for season, info in sorted(stats['offseasons'].items()):
            print(f"\n    シーズン {season}:")
            print(f"      - レコード数: {info['record_count']:,}")
            print(f"      - 期間: {info['start_date']} ～ {info['end_date']}")
            print(f"      - 観測地点: {info['unique_stations']}")
            print(f"      - データ品質スコア: {info['quality_score']}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="海苔シーズンベース データ移行スクリプト"
    )
    parser.add_argument(
        "--input",
        required=True,
        help="入力 CSV ファイルパス"
    )
    parser.add_argument(
        "--output",
        required=True,
        help="出力ディレクトリパス"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="ドライラン実行（ファイルは保存されません）"
    )

    args = parser.parse_args()

    # 入力ファイル検証
    if not os.path.exists(args.input):
        print(f"❌ エラー: 入力ファイルが見つかりません: {args.input}")
        sys.exit(1)

    # 出力ディレクトリ検証
    Path(args.output).mkdir(parents=True, exist_ok=True)

    # 実行
    try:
        stats = migrate_data(args.input, args.output, dry_run=args.dry_run)
        print_summary(stats)

        print(f"\n✅ 正常に完了しました！")
        if args.dry_run:
            print(f"💡 本番実行: --dry-run フラグなしで実行してください")
        sys.exit(0)

    except Exception as e:
        print(f"\n❌ エラーが発生しました: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
