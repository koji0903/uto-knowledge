Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/datalink_to_firestore_dry_run.mjs" @args
