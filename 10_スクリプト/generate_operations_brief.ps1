Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_operations_brief.mjs" @args
