Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "checking local environment..."
powershell -ExecutionPolicy Bypass -File ".\scripts\check_environment.ps1"

Write-Output "verifying Firestore samples..."
powershell -ExecutionPolicy Bypass -File ".\scripts\verify_firestore_samples.ps1"

Write-Output "verifying Firestore Drive links..."
powershell -ExecutionPolicy Bypass -File ".\scripts\verify_firestore_drive_links.ps1"

Write-Output "verifying Google Drive structure..."
powershell -ExecutionPolicy Bypass -File ".\scripts\verify_drive_structure.ps1"

Write-Output "all verification passed"
