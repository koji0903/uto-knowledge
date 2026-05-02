---
id: moc_drive_structure_apply
type: moc
tags: [moc, google-drive, apply]
created: 2026-05-03
---

# Drive Structure Apply

## 目的

`drive.structure.json` に定義した Google Drive フォルダ構造を作成する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/create_drive_structure.mjs | Google Drive フォルダ作成 |
| scripts/create_drive_structure.sh | Mac / Linux 用ラッパー |
| scripts/create_drive_structure.ps1 | Windows PowerShell 用ラッパー |

## 安全設計

- 既定は dry-run
- `--apply` を明示した場合だけ Google Drive にフォルダを作成する
- `.env` が存在する場合はラッパースクリプトが読み込む
- 作成後は表示された folder id を `.env` に記録する

## Dry-run

Mac / Linux:

```bash
bash scripts/create_drive_structure.sh --dry-run
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\create_drive_structure.ps1 --dry-run
```

## Apply

Mac / Linux:

```bash
bash scripts/create_drive_structure.sh --apply
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\create_drive_structure.ps1 --apply
```

## 認証

`--apply` には Google Drive scope を持つ access token が必要。

```text
https://www.googleapis.com/auth/drive.file
```

## 作成される構造

```text
uto-knowledge-assets/
├── producers/
├── products/
├── projects/
└── logs/
```

## 注意

Google Drive は同名フォルダを複数作成できる。再実行前には既存フォルダの有無を確認する。

## 実行結果

2026-05-03 に以下を作成した。

| folder | id |
| --- | --- |
| uto-knowledge-assets | 1lj8rpJrhhUg_23zBQKbIRg0jEvugqXGF |
| producers | 1rVL-YyzUc5h3DCyvUZ-UWveJQu_ki1Z7 |
| products | 1JRI_gJb7Ko5gML4KVzspgP8aALOObEwg |
| projects | 1DgsDPQNP8oM8Sg1ULfPfPjv27fP_QNsf |
| logs | 17H4YW7snnfFMNI9pK_S8TOzqku7Mo2fQ |

確認:

```bash
bash scripts/verify_drive_structure.sh
```
