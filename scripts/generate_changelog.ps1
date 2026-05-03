Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/generate_changelog.mjs" @args
