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


def assign_to_season(date_str: str) -> str:
    """
    日付をシーズンに割り当てる

    シーズン定義:
      2025-26: 2025-09-01 ～ 2026-04-30
      2026-27: 2026-05-01 ～ (準備中)

    Args:
        date_str: YYYY-MM-DD形式の日付文字列

    Returns:
        YYYY-YY形式のシーズンID
    """
    date_obj = pd.to_datetime(date_str)
    year = date_obj.year
    month = date_obj.month

    # 9月～12月: その年9月開始のシーズン
    if month >= 9:
        return f"{year}-{year+1}"
    # 1月～8月: 前年9月開始のシーズン
    else:
        return f"{year-1}-{year}"


def generate_season_metadata(df: pd.DataFrame, season_id: str, output_dir: str) -> dict:
    """
    シーズンのメタデータを生成

    Args:
        df: シーズンデータフレーム
        season_id: シーズンID (e.g., "2025-26")
        output_dir: 出力ディレクトリ

    Returns:
        メタデータ辞書
    """
    dates = pd.to_datetime(df['date'])
    start_date = dates.min().strftime('%Y-%m-%d')
    end_date = dates.max().strftime('%Y-%m-%d')

    # シーズンのステータス判定
    today = datetime.now()
    season_end_date = pd.to_datetime(f"{int(season_id.split('-')[1])}-04-30")
    status = "completed" if today > season_end_date else "in_progress"

    metadata = {
        "season": season_id,
        "start_date": start_date,
        "end_date": end_date,
        "status": status,
        "phases": {
            "preparation": {
                "period": f"{start_date.split('-')[0]}-09 to {start_date.split('-')[0]}-10",
                "status": "completed" if season_end_date < today else "pending"
            },
            "main_season": {
                "period": f"{int(season_id.split('-')[0])}-11 to {int(season_id.split('-')[1])}-02",
                "status": "completed" if season_end_date < today else "in_progress"
            },
            "spring_nori": {
                "period": f"{int(season_id.split('-')[1])}-03 to {int(season_id.split('-')[1])}-04",
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
    データをシーズン毎に分割して保存

    Args:
        input_file: 入力CSV ファイルパス
        output_dir: 出力ディレクトリパス
        dry_run: ドライラン実行か

    Returns:
        実行結果統計
    """
    print(f"\n📊 海苔シーズンベース データ移行")
    print(f"=" * 60)
    print(f"入力ファイル: {input_file}")
    print(f"出力ディレクトリ: {output_dir}")
    print(f"モード: {'DRY-RUN' if dry_run else 'PRODUCTION'}")

    # データ読み込み
    print(f"\n📖 データ読み込み中...")
    df = pd.read_csv(input_file)
    print(f"✓ {len(df):,} 行のデータを読み込みました")

    # シーズンカラムを追加
    print(f"\n🔄 日付をシーズンに割り当て中...")
    df['season'] = df['date'].apply(assign_to_season)
    seasons = df['season'].unique()
    print(f"✓ {len(seasons)} シーズン を検出しました: {sorted(seasons)}")

    # シーズン毎に分割して保存
    print(f"\n💾 シーズン毎にデータを保存中...")
    stats = {
        "total_records": len(df),
        "seasons": {},
        "output_files": {}
    }

    for season in sorted(seasons):
        season_df = df[df['season'] == season].drop('season', axis=1)
        season_dir = os.path.join(output_dir, "seasons", season)

        # ディレクトリ作成
        Path(season_dir).mkdir(parents=True, exist_ok=True)

        # CSV 保存
        csv_path = os.path.join(season_dir, "marine_daily_features.csv")
        print(f"\n  シーズン {season}:")
        print(f"    - レコード数: {len(season_df):,}")
        print(f"    - 期間: {season_df['date'].min()} ～ {season_df['date'].max()}")
        print(f"    - 観測地点: {int(season_df['station_id'].nunique())}")

        if not dry_run:
            season_df.to_csv(csv_path, index=False)
            print(f"    ✓ 保存: {csv_path}")
        else:
            print(f"    [DRY-RUN] 保存予定: {csv_path}")

        # メタデータ生成
        metadata = generate_season_metadata(season_df, season, season_dir)
        metadata_path = os.path.join(season_dir, "season_metadata.json")

        if not dry_run:
            with open(metadata_path, 'w', encoding='utf-8') as f:
                json.dump(metadata, f, indent=2, ensure_ascii=False)
            print(f"    ✓ メタデータ: {metadata_path}")
        else:
            print(f"    [DRY-RUN] メタデータ生成予定: {metadata_path}")

        # 統計情報
        stats["seasons"][season] = {
            "record_count": len(season_df),
            "start_date": season_df['date'].min(),
            "end_date": season_df['date'].max(),
            "unique_stations": int(season_df['station_id'].nunique()),
            "quality_score": round(metadata["data_quality"]["completeness"], 3)
        }
        stats["output_files"][season] = csv_path if not dry_run else f"[DRY-RUN] {csv_path}"

    print(f"\n{'=' * 60}")
    print(f"✅ 移行完了！")
    print(f"{'=' * 60}")

    return stats


def print_summary(stats: dict):
    """実行結果サマリーを表示"""
    print(f"\n📈 移行結果サマリー:")
    print(f"  総レコード数: {stats['total_records']:,}")
    print(f"  シーズン数: {len(stats['seasons'])}")

    for season, info in sorted(stats['seasons'].items()):
        print(f"\n  シーズン {season}:")
        print(f"    - レコード数: {info['record_count']:,}")
        print(f"    - 期間: {info['start_date']} ～ {info['end_date']}")
        print(f"    - 観測地点: {info['unique_stations']}")
        print(f"    - データ品質スコア: {info['quality_score']}")


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
