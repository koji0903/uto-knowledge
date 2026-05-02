Set-Location (Split-Path -Parent $PSScriptRoot)

$json = Get-Content "mcp/mcp.servers.example.json" -Raw
$json | ConvertFrom-Json | Out-Null
Write-Output "mcp config validation passed"
