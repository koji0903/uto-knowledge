Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "checking vault..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_vault.ps1"

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

Write-Output "environment check completed"
