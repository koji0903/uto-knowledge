Set-Location (Split-Path -Parent $PSScriptRoot)

node "scripts/render_mcp_filesystem_config.mjs" @args
