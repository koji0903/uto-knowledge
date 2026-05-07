Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Output "== git status =="
git status --short --branch --ignored

Write-Output ""
Write-Output "== generate AI context =="
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_ai_context.ps1"

Write-Output ""
Write-Output "== local maintenance =="
powershell -ExecutionPolicy Bypass -File ".\scripts\maintenance_check.ps1" local

Write-Output ""
Write-Output "start work completed"
Write-Output "next: read tmp/ai_context.md and AGENTS.md"
