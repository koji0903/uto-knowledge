Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/create_sync_log.mjs" @args
