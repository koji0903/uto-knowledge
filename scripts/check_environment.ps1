Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "checking vault..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_vault.ps1"

Write-Output "checking mcp config..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_mcp_config.ps1"

Write-Output "checking datalink samples..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_datalink_samples.ps1"

Write-Output "checking firestore dry-run..."
powershell -ExecutionPolicy Bypass -File ".\scripts\datalink_to_firestore_dry_run.ps1" --out "tmp/datalink.firestore.json"

Write-Output "checking firestore apply dry-run..."
powershell -ExecutionPolicy Bypass -File ".\scripts\datalink_to_firestore_apply.ps1" --dry-run | Out-Null

Write-Output "checking git..."
git rev-parse --is-inside-work-tree | Out-Null
git status --short --branch

Write-Output "checking optional CLIs..."

if (Get-Command gcloud -ErrorAction SilentlyContinue) {
  Write-Output "gcloud: found"
} else {
  Write-Output "gcloud: not found"
}

if (Get-Command firebase -ErrorAction SilentlyContinue) {
  Write-Output "firebase: found"
} else {
  Write-Output "firebase: not found"
}

if (Get-Command gh -ErrorAction SilentlyContinue) {
  Write-Output "gh: found"
} else {
  Write-Output "gh: not found"
}

if (Get-Command npx -ErrorAction SilentlyContinue) {
  Write-Output "npx: found"
} else {
  Write-Output "npx: not found"
}

Write-Output "environment check completed"
