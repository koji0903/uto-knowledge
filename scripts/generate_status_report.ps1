Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_status_report.mjs" @args
