#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -f ".env" ]; then
  cp ".env.example" ".env"
  echo "created .env from .env.example"
else
  echo ".env already exists"
fi

if [ ! -f ".firebaserc" ]; then
  printf '{\n  "projects": {\n    "default": "uto-os"\n  }\n}\n' > ".firebaserc"
  echo "created .firebaserc"
else
  echo ".firebaserc already exists"
fi

if command -v gcloud >/dev/null 2>&1; then
  gcloud config set project uto-os >/dev/null
  echo "configured gcloud project: uto-os"
else
  echo "gcloud not found; install Google Cloud CLI before external verification"
fi

echo "bootstrap completed"
