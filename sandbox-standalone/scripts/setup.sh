#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Starting Sandbox Standalone Setup...${NC}"

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed.${NC}"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed (optional, but recommended for production).${NC}"
fi

# Install dependencies
echo "Installing NPM dependencies..."
npm install

# Setup environment
if [ ! -f config/development.env ]; then
    echo "Creating default development environment..."
    cp config/development.env.example config/development.env 2>/dev/null || touch config/development.env
fi

echo -e "${GREEN}Setup completed successfully!${NC}"
echo "Run 'npm run start:dev' to start development server."
