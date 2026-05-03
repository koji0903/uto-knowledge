Set-Location (Split-Path -Parent $PSScriptRoot)

if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Output "created .env from .env.example"
} else {
  Write-Output ".env already exists"
}

if (-not (Test-Path ".firebaserc")) {
  @'
{
  "projects": {
    "default": "uto-os"
  }
}
'@ | Set-Content -Path ".firebaserc" -Encoding UTF8
  Write-Output "created .firebaserc"
} else {
  Write-Output ".firebaserc already exists"
}

if (Get-Command gcloud -ErrorAction SilentlyContinue) {
  gcloud config set project uto-os | Out-Null
  Write-Output "configured gcloud project: uto-os"
} else {
  Write-Output "gcloud not found; install Google Cloud CLI before external verification"
}

Write-Output "bootstrap completed"
