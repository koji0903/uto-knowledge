Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/datalink_to_firestore_apply.mjs" @args
