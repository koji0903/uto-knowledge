Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "checking vault..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_vault.ps1"

Write-Output "checking security..."
powershell -ExecutionPolicy Bypass -File ".\scripts\security_check.ps1"

Write-Output "checking mcp config..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_mcp_config.ps1"

Write-Output "checking AI operations docs..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_ai_operations_docs.ps1"

Write-Output "checking AI conflicts..."
powershell -ExecutionPolicy Bypass -File ".\scripts\detect_ai_conflicts.ps1" --strict | Out-Null

Write-Output "checking datalink samples..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_datalink_samples.ps1"

Write-Output "checking datalink frontmatter..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_datalink_frontmatter.ps1"

Write-Output "checking datalink scaffold..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_datalink_scaffold.ps1"

Write-Output "checking datalink references..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_datalink_references.ps1"

Write-Output "checking policy card references..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_policy_card_references.ps1"

Write-Output "checking obsidian links..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_obsidian_links.ps1"

Write-Output "checking firestore dry-run..."
powershell -ExecutionPolicy Bypass -File ".\scripts\datalink_to_firestore_dry_run.ps1" --out "tmp/datalink.firestore.json"

Write-Output "checking firestore apply dry-run..."
powershell -ExecutionPolicy Bypass -File ".\scripts\datalink_to_firestore_apply.ps1" --dry-run | Out-Null

Write-Output "checking drive structure config..."
powershell -ExecutionPolicy Bypass -File ".\scripts\validate_drive_structure_config.ps1"

Write-Output "checking drive structure dry-run..."
powershell -ExecutionPolicy Bypass -File ".\scripts\create_drive_structure.ps1" --dry-run | Out-Null

Write-Output "checking mcp filesystem render..."
powershell -ExecutionPolicy Bypass -File ".\scripts\render_mcp_filesystem_config.ps1" | Out-Null

Write-Output "generating status report..."
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_status_report.ps1" | Out-Null

Write-Output "generating changelog..."
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_changelog.ps1" | Out-Null

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
