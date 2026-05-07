Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/detect_ai_conflicts.mjs" @args
