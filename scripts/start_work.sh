#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

ai=""
task=""
handoff_out=""
conflict_report="tmp/ai_conflict_report.md"

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/start_work.sh
  bash scripts/start_work.sh --ai claude --task "依頼内容"
  bash scripts/start_work.sh --ai gemini --task "依頼内容" --handoff-out tmp/handoff_gemini.md
  bash scripts/start_work.sh --ai codex --task "検証" --conflict-report tmp/ai_conflict_report.md

AI:
  claude, gemini, chatgpt, codex
USAGE
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --ai)
      ai="${2:-}"
      shift 2
      ;;
    --task)
      task="${2:-}"
      shift 2
      ;;
    --handoff-out)
      handoff_out="${2:-}"
      shift 2
      ;;
    --conflict-report)
      conflict_report="${2:-}"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "unknown argument: $1"
      usage
      exit 1
      ;;
  esac
done

if { [ -n "$ai" ] && [ -z "$task" ]; } || { [ -z "$ai" ] && [ -n "$task" ]; }; then
  echo "--ai and --task must be provided together"
  usage
  exit 1
fi

echo "== git status =="
git -c core.quotePath=false status --short --branch --ignored

echo
echo "== generate AI context =="
bash scripts/generate_ai_context.sh

echo
echo "== detect AI conflicts =="
bash scripts/detect_ai_conflicts.sh --out "$conflict_report"

if [ -n "$ai" ]; then
  echo
  echo "== generate AI handoff =="
  if [ -n "$handoff_out" ]; then
    bash scripts/generate_handoff_prompt.sh --ai "$ai" --task "$task" --out "$handoff_out" --conflict-report "$conflict_report"
  else
    bash scripts/generate_handoff_prompt.sh --ai "$ai" --task "$task" --conflict-report "$conflict_report"
  fi
fi

echo
echo "== local maintenance =="
bash scripts/maintenance_check.sh local

echo
echo "start work completed"
echo "next: read tmp/ai_context.md, tmp/ai_conflict_report.md, and AGENTS.md"
if [ -n "$ai" ]; then
  echo "next: share the generated handoff prompt with $ai"
else
  echo "next: generate handoff with: bash scripts/start_work.sh --ai claude --task \"依頼内容\""
fi
