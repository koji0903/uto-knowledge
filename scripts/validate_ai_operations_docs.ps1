Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/validate_ai_operations_docs.mjs" @args
