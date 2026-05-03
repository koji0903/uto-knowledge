#!/bin/bash

# Setup Environment Script for Mac/Linux
# Initialize uto-knowledge environment for the first time

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 uto-knowledge Environment Setup${NC}\n"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Step 1: Detect OS
echo -e "${BLUE}1️⃣  OS Detection${NC}"
if [[ "$OSTYPE" == "darwin"* ]]; then
  OS="macOS"
  ENV_FILE=".env.mac"
  echo -e "${GREEN}✅ macOS detected${NC}"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  OS="Linux"
  ENV_FILE=".env.mac"  # Use same as Mac
  echo -e "${GREEN}✅ Linux detected${NC}"
else
  echo -e "${RED}❌ Unsupported OS: $OSTYPE${NC}"
  exit 1
fi

# Step 2: Check prerequisites
echo -e "\n${BLUE}2️⃣  Checking Prerequisites${NC}"

# Check Git
if command -v git &> /dev/null; then
  GIT_VERSION=$(git --version | awk '{print $3}')
  echo -e "${GREEN}✅ Git ${GIT_VERSION}${NC}"
else
  echo -e "${RED}❌ Git is not installed${NC}"
  exit 1
fi

# Check Node.js
if command -v node &> /dev/null; then
  NODE_VERSION=$(node --version)
  echo -e "${GREEN}✅ Node.js ${NODE_VERSION}${NC}"
else
  echo -e "${YELLOW}⚠️  Node.js is not installed (optional but recommended)${NC}"
fi

# Check Homebrew (macOS only)
if [[ "$OS" == "macOS" ]]; then
  if command -v brew &> /dev/null; then
    echo -e "${GREEN}✅ Homebrew installed${NC}"
  else
    echo -e "${YELLOW}⚠️  Homebrew not installed (optional)${NC}"
  fi
fi

# Step 3: Git configuration
echo -e "\n${BLUE}3️⃣  Git Configuration${NC}"

# Configure core.safecrlf
git config --local core.safecrlf false
echo -e "${GREEN}✅ core.safecrlf disabled (for LF line endings)${NC}"

# Configure git to use LF
git config --local core.autocrlf false
echo -e "${GREEN}✅ core.autocrlf disabled${NC}"

# Step 4: Setup .env file
echo -e "\n${BLUE}4️⃣  Environment File Setup${NC}"

if [ -f "$PROJECT_ROOT/.env" ]; then
  echo -e "${YELLOW}⚠️  .env already exists${NC}"
  read -p "Overwrite? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    cp "$PROJECT_ROOT/$ENV_FILE" "$PROJECT_ROOT/.env"
    echo -e "${GREEN}✅ .env updated from $ENV_FILE${NC}"
  fi
else
  cp "$PROJECT_ROOT/$ENV_FILE" "$PROJECT_ROOT/.env"
  echo -e "${GREEN}✅ .env created from $ENV_FILE${NC}"
fi

# Step 5: Setup .env.local for secrets
echo -e "\n${BLUE}5️⃣  Local Secrets Setup${NC}"

if [ ! -f "$PROJECT_ROOT/.env.local" ]; then
  cp "$PROJECT_ROOT/.env.local.example" "$PROJECT_ROOT/.env.local"
  echo -e "${YELLOW}⚠️  .env.local created (fill in your secrets)${NC}"
  echo -e "   Edit: $PROJECT_ROOT/.env.local"
else
  echo -e "${GREEN}✅ .env.local already exists${NC}"
fi

# Step 6: Install npm dependencies (if needed)
echo -e "\n${BLUE}6️⃣  Dependencies${NC}"

if [ -f "$PROJECT_ROOT/package.json" ]; then
  if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
    read -p "Install npm dependencies? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      cd "$PROJECT_ROOT"
      npm install
      echo -e "${GREEN}✅ npm dependencies installed${NC}"
    fi
  else
    echo -e "${GREEN}✅ node_modules already exists${NC}"
  fi
else
  echo -e "${YELLOW}⚠️  No package.json found (optional)${NC}"
fi

# Step 7: Verify setup
echo -e "\n${BLUE}7️⃣  Verification${NC}"

bash "$SCRIPT_DIR/verify-multienv-setup.sh" || echo -e "${YELLOW}⚠️  Some checks failed (see above)${NC}"

# Step 8: Display next steps
echo -e "\n${GREEN}✅ Setup Complete!${NC}\n"
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Edit .env.local with your secrets:"
echo "   ${YELLOW}nano .env.local${NC}"
echo ""
echo "2. Load environment:"
echo "   ${YELLOW}source .env${NC}"
echo ""
echo "3. Initialize git hooks (optional):"
echo "   ${YELLOW}git config core.hooksPath scripts/hooks${NC}"
echo ""
echo "4. Start working:"
echo "   ${YELLOW}bash scripts/check_environment.sh${NC}"
echo ""
echo -e "For more details, see: ${YELLOW}SETUP_GUIDE.md${NC}\n"
