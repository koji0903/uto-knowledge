Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_ai_context.mjs" @args
