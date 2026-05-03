#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "checking local environment..."
bash scripts/check_environment.sh

echo "verifying Firestore samples..."
bash scripts/verify_firestore_samples.sh

echo "verifying Firestore Drive links..."
bash scripts/verify_firestore_drive_links.sh

echo "verifying Google Drive structure..."
bash scripts/verify_drive_structure.sh

echo "all verification passed"
