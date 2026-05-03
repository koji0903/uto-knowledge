Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "== local maintenance =="
powershell -ExecutionPolicy Bypass -File ".\scripts\maintenance_check.ps1" local

Write-Output ""
Write-Output "== git status =="
git status --short --branch --ignored

Write-Output ""
Write-Output "== recent commits =="
git log --oneline -5

Write-Output ""
Write-Output "end work completed"
Write-Output "next:"
Write-Output "  - commit/push any remaining tracked changes"
Write-Output "  - run: gh run list --repo koji0903/uto-knowledge --workflow validate.yml --limit 3"
Write-Output "  - if DataLink changed, run: bash scripts/datalink_to_firestore_apply.sh --dry-run"
Write-Output "  - after Firestore apply, run: bash scripts/check_firestore_drift.sh"
