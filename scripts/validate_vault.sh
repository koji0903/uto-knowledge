#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

required_dirs=(
  "00_Inbox"
  "01_Daily"
  "02_Project"
  "03_Knowledge/policy"
  "03_Knowledge/business"
  "03_Knowledge/tech"
  "03_Knowledge/agriculture"
  "04_DataLink/producers"
  "04_DataLink/products"
  "04_DataLink/projects"
  "04_DataLink/logs"
  "05_MOC"
  "06_Templates"
  "99_Archive"
)

for dir in "${required_dirs[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "missing directory: $dir"
    exit 1
  fi
done

required_files=(
  ".gitignore"
  ".env.example"
  "05_MOC/00_system_overview.md"
  "05_MOC/01_datalink_frontmatter.md"
  "05_MOC/02_firestore_design.md"
  "05_MOC/03_drive_design.md"
  "06_Templates/template_base.md"
  "06_Templates/template_project.md"
  "06_Templates/template_daily.md"
  "06_Templates/template_log.md"
  "06_Templates/template_datalink_producer.md"
  "06_Templates/template_datalink_product.md"
  "06_Templates/template_datalink_project.md"
  "06_Templates/template_datalink_log.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "missing file: $file"
    exit 1
  fi
done

echo "vault validation passed"
