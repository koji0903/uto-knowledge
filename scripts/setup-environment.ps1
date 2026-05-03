# Setup Environment Script for Windows
# Initialize uto-knowledge environment for the first time

# Requires: PowerShell 5.0+, Git, Node.js (optional)

$ErrorActionPreference = "Stop"

# Colors
function Write-Green { Write-Host $args -ForegroundColor Green }
function Write-Red { Write-Host $args -ForegroundColor Red }
function Write-Yellow { Write-Host $args -ForegroundColor Yellow }
function Write-Blue { Write-Host $args -ForegroundColor Blue }

Write-Blue "🚀 uto-knowledge Environment Setup`n"

$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$PROJECT_ROOT = Split-Path -Parent $SCRIPT_DIR
$ENV_FILE = ".env.windows"

# Step 1: OS Detection
Write-Blue "1️⃣  OS Detection"
Write-Green "✅ Windows detected`n"

# Step 2: Check prerequisites
Write-Blue "2️⃣  Checking Prerequisites"

# Check Git
try {
  $GIT_VERSION = & git --version
  Write-Green "✅ $GIT_VERSION"
} catch {
  Write-Red "❌ Git is not installed"
  exit 1
}

# Check Node.js
try {
  $NODE_VERSION = & node --version
  Write-Green "✅ Node.js $NODE_VERSION"
} catch {
  Write-Yellow "⚠️  Node.js is not installed (optional but recommended)`n"
}

# Check PowerShell version
$PS_VERSION = $PSVersionTable.PSVersion.Major
if ($PS_VERSION -ge 5) {
  Write-Green "✅ PowerShell $PS_VERSION`n"
} else {
  Write-Yellow "⚠️  PowerShell 5.0+ recommended (you have $PS_VERSION)`n"
}

# Step 3: Git configuration
Write-Blue "3️⃣  Git Configuration"

# Configure core.safecrlf
& git config --local core.safecrlf warn
Write-Green "✅ core.safecrlf set to warn"

# Configure git to use CRLF for .ps1, LF for others
& git config --local core.autocrlf false
Write-Green "✅ core.autocrlf disabled`n"

# Step 4: Setup .env file
Write-Blue "4️⃣  Environment File Setup"

$ENV_PATH = Join-Path $PROJECT_ROOT ".env"
$ENV_SOURCE = Join-Path $PROJECT_ROOT $ENV_FILE

if (Test-Path $ENV_PATH) {
  Write-Yellow "⚠️  .env already exists"
  $overwrite = Read-Host "Overwrite? (y/n)"
  if ($overwrite -eq "y") {
    Copy-Item $ENV_SOURCE $ENV_PATH -Force
    Write-Green "✅ .env updated from $ENV_FILE"
  }
} else {
  Copy-Item $ENV_SOURCE $ENV_PATH
  Write-Green "✅ .env created from $ENV_FILE`n"
}

# Step 5: Setup .env.local for secrets
Write-Blue "5️⃣  Local Secrets Setup"

$ENV_LOCAL_PATH = Join-Path $PROJECT_ROOT ".env.local"
$ENV_LOCAL_EXAMPLE = Join-Path $PROJECT_ROOT ".env.local.example"

if (-not (Test-Path $ENV_LOCAL_PATH)) {
  Copy-Item $ENV_LOCAL_EXAMPLE $ENV_LOCAL_PATH
  Write-Yellow "⚠️  .env.local created (fill in your secrets)"
  Write-Yellow "   Edit: $ENV_LOCAL_PATH`n"
} else {
  Write-Green "✅ .env.local already exists`n"
}

# Step 6: Load environment
Write-Blue "6️⃣  Loading Environment"

$ENV_FILE_PATH = Join-Path $PROJECT_ROOT ".env"
if (Test-Path $ENV_FILE_Path) {
  $envFile = Get-Content $ENV_FILE_Path | Select-String -Pattern "^[^#].*=" | ForEach-Object {
    $parts = $_ -split "=", 2
    if ($parts.Count -eq 2) {
      $key = $parts[0].Trim()
      $value = $parts[1].Trim()
      Set-Item -Path "env:$key" -Value "$value" -ErrorAction SilentlyContinue
    }
  }
  Write-Green "✅ Environment loaded`n"
} else {
  Write-Yellow "⚠️  .env file not found`n"
}

# Step 7: Install npm dependencies (if needed)
Write-Blue "7️⃣  Dependencies"

$PACKAGE_JSON = Join-Path $PROJECT_ROOT "package.json"
$NODE_MODULES = Join-Path $PROJECT_ROOT "node_modules"

if (Test-Path $PACKAGE_JSON) {
  if (-not (Test-Path $NODE_MODULES)) {
    $install = Read-Host "Install npm dependencies? (y/n)"
    if ($install -eq "y") {
      Set-Location $PROJECT_ROOT
      & npm install
      Write-Green "✅ npm dependencies installed`n"
    }
  } else {
    Write-Green "✅ node_modules already exists`n"
  }
} else {
  Write-Yellow "⚠️  No package.json found (optional)`n"
}

# Step 8: Display next steps
Write-Green "✅ Setup Complete!`n"
Write-Blue "📋 Next Steps:"
Write-Host "1. Edit .env.local with your secrets:"
Write-Yellow "   notepad .env.local"
Write-Host ""
Write-Host "2. Load environment in PowerShell:"
Write-Yellow "   Get-Content .env | ForEach-Object { if (`$_ -match '^[^#].*=') { `$parts = `$_ -split '=', 2; `$env:`$(`$parts[0]) = `$parts[1] } }"
Write-Host ""
Write-Host "3. Verify setup:"
Write-Yellow "   bash scripts/verify-multienv-setup.sh"
Write-Host ""
Write-Host "4. Start working:"
Write-Yellow "   bash scripts/check_environment.sh"
Write-Host ""
Write-Host "For more details, see: docs/SETUP_GUIDE.md`n"
