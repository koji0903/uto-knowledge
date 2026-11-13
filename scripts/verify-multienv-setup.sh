#!/bin/bash

# Verify multi-environment setup
# Checks for cross-platform compatibility issues

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo -e "${BLUE}🔍 Multi-Environment Setup Verification${NC}\n"

ISSUES=0
WARNINGS=0

# Check 1: Line endings in Git
echo -e "${BLUE}1️⃣  Git Configuration${NC}"

if git -C "$PROJECT_ROOT" config core.safecrlf | grep -q "false"; then
  echo -e "${GREEN}✅ core.safecrlf: false${NC}"
else
  echo -e "${YELLOW}⚠️  core.safecrlf might need adjustment${NC}"
  ((WARNINGS+=1))
fi

if git -C "$PROJECT_ROOT" config core.autocrlf | grep -q "false"; then
  echo -e "${GREEN}✅ core.autocrlf: false${NC}"
else
  echo -e "${YELLOW}⚠️  core.autocrlf might need adjustment${NC}"
  ((WARNINGS+=1))
fi

# Check 2: .editorconfig
echo -e "\n${BLUE}2️⃣  EditorConfig${NC}"

if [ -f "$PROJECT_ROOT/.editorconfig" ]; then
  echo -e "${GREEN}✅ .editorconfig exists${NC}"
else
  echo -e "${RED}❌ .editorconfig missing${NC}"
  ((ISSUES+=1))
fi

# Check 3: .gitattributes
echo -e "\n${BLUE}3️⃣  Git Attributes${NC}"

if [ -f "$PROJECT_ROOT/.gitattributes" ]; then
  if grep -q "* text=auto" "$PROJECT_ROOT/.gitattributes"; then
    echo -e "${GREEN}✅ .gitattributes configured${NC}"
  else
    echo -e "${YELLOW}⚠️  .gitattributes might be incomplete${NC}"
    ((WARNINGS+=1))
  fi
else
  echo -e "${RED}❌ .gitattributes missing${NC}"
  ((ISSUES+=1))
fi

# Check 4: Environment files
echo -e "\n${BLUE}4️⃣  Environment Files${NC}"

if [ -f "$PROJECT_ROOT/.env" ]; then
  echo -e "${GREEN}✅ .env exists${NC}"
else
  echo -e "${YELLOW}⚠️  .env missing (run setup script)${NC}"
  ((WARNINGS+=1))
fi

if [ -f "$PROJECT_ROOT/.env.local" ]; then
  echo -e "${GREEN}✅ .env.local exists${NC}"
else
  echo -e "${YELLOW}⚠️  .env.local missing (required for secrets)${NC}"
  ((WARNINGS+=1))
fi

# Check 5: Line ending consistency
echo -e "\n${BLUE}5️⃣  Line Ending Consistency${NC}"

MD_FILES=$(find "$PROJECT_ROOT/04_DataLink" "$PROJECT_ROOT/mcp" -name "*.md" -type f 2>/dev/null | head -5)
ISSUE_FOUND=0

for file in $MD_FILES; do
  if file "$file" | grep -q "CRLF"; then
    echo -e "${RED}❌ $file has CRLF line endings (should be LF)${NC}"
    ((ISSUES+=1))
    ISSUE_FOUND=1
  fi
done

if [ $ISSUE_FOUND -eq 0 ]; then
  echo -e "${GREEN}✅ Line endings are LF (correct)${NC}"
fi

# Check 6: Shell script compatibility
echo -e "\n${BLUE}6️⃣  Shell Scripts${NC}"

SHELL_SCRIPTS=$(find "$PROJECT_ROOT/scripts" -name "*.sh" -type f 2>/dev/null | head -3)
for script in $SHELL_SCRIPTS; do
  if head -1 "$script" | grep -Eq "#!(/usr/bin/env bash|/bin/bash)"; then
    echo -e "${GREEN}✅ $(basename $script) has shebang${NC}"
  else
    echo -e "${YELLOW}⚠️  $(basename $script) missing shebang${NC}"
    ((WARNINGS+=1))
  fi
done

# Check 7: PowerShell scripts
echo -e "\n${BLUE}7️⃣  PowerShell Scripts${NC}"

PS_SCRIPTS=$(find "$PROJECT_ROOT/scripts" -name "*.ps1" -type f 2>/dev/null)
if [ -z "$PS_SCRIPTS" ]; then
  echo -e "${YELLOW}⚠️  No PowerShell scripts found${NC}"
  ((WARNINGS+=1))
else
  echo -e "${GREEN}✅ PowerShell scripts available${NC}"
fi

# Check 8: OS-specific paths
echo -e "\n${BLUE}8️⃣  OS-Specific Paths${NC}"

if [ -f "$PROJECT_ROOT/.env.mac" ]; then
  echo -e "${GREEN}✅ .env.mac exists${NC}"
else
  echo -e "${RED}❌ .env.mac missing${NC}"
  ((ISSUES+=1))
fi

if [ -f "$PROJECT_ROOT/.env.windows" ]; then
  echo -e "${GREEN}✅ .env.windows exists${NC}"
else
  echo -e "${RED}❌ .env.windows missing${NC}"
  ((ISSUES+=1))
fi

# Summary
echo -e "\n${BLUE}📊 Summary${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ISSUES -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  echo -e "${GREEN}✅ All checks passed!${NC}"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  exit 0
elif [ $ISSUES -eq 0 ]; then
  echo -e "Issues: ${GREEN}0${NC}"
  echo -e "Warnings: ${YELLOW}$WARNINGS${NC}"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo -e "${YELLOW}⚠️  Some warnings, but setup is functional${NC}"
  exit 0
else
  echo -e "Issues: ${RED}$ISSUES${NC}"
  echo -e "Warnings: ${YELLOW}$WARNINGS${NC}"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo -e "${RED}❌ Please fix the issues above${NC}"
  exit 1
fi
