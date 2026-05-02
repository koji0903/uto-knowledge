#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

samples=(
  "04_DataLink/producers/sample_prodcr_001.md:producer:producers:prodcr_001"
  "04_DataLink/products/sample_prod_001.md:product:products:prod_001"
  "04_DataLink/projects/sample_prj_001.md:project:projects:prj_001"
  "04_DataLink/logs/sample_log_20260503_001.md:log:logs:log_20260503_001"
)

for sample in "${samples[@]}"; do
  IFS=":" read -r file type collection id <<< "$sample"

  if [ ! -f "$file" ]; then
    echo "missing sample: $file"
    exit 1
  fi

  grep -Fxq "id: $id" "$file" || { echo "invalid id in $file"; exit 1; }
  grep -Fxq "type: $type" "$file" || { echo "invalid type in $file"; exit 1; }

  if [ "$type" != "log" ]; then
    grep -Fxq "firestore_collection: $collection" "$file" || { echo "invalid collection in $file"; exit 1; }
  fi

  grep -Fxq "firestore_doc_id: $id" "$file" || { echo "invalid firestore_doc_id in $file"; exit 1; }
done

echo "datalink sample validation passed"
