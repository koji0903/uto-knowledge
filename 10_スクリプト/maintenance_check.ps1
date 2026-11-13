$Mode = if ($args.Count -gt 0) { $args[0] } else { "local" }

Set-Location (Split-Path -Parent $PSScriptRoot)

switch ($Mode) {
  "local" {
    powershell -ExecutionPolicy Bypass -File ".\scripts\check_environment.ps1"
  }
  "full" {
    powershell -ExecutionPolicy Bypass -File ".\scripts\verify_all.ps1"
  }
  default {
    Write-Error "usage: powershell -ExecutionPolicy Bypass -File .\scripts\maintenance_check.ps1 [local|full]"
    exit 1
  }
}

powershell -ExecutionPolicy Bypass -File ".\scripts\generate_status_report.ps1" | Out-Null
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_changelog.ps1" | Out-Null
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_operations_brief.ps1" | Out-Null

Write-Output "maintenance check completed: $Mode"
