Set-Location (Split-Path -Parent $PSScriptRoot)

$json = Get-Content "mcp/mcp.servers.example.json" -Raw
$json | ConvertFrom-Json | Out-Null
$claude = Get-Content "mcp/clients/claude_desktop.example.json" -Raw
$claude | ConvertFrom-Json | Out-Null
$generic = Get-Content "mcp/clients/generic_mcp_client.example.json" -Raw
$generic | ConvertFrom-Json | Out-Null
Write-Output "mcp config validation passed"
