Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_handoff_prompt.mjs" @args
