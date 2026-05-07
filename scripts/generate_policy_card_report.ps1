Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_policy_card_report.mjs" @args
