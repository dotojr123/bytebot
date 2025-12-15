#!/bin/bash
set -e

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}Starting Deployment Process...${NC}"

# 1. Build Docker Image
echo "Building Docker image..."
docker build -t sandbox-standalone:latest -f docker/Dockerfile .

# 2. Tagging (Mock)
echo "Tagging image..."
# docker tag sandbox-standalone:latest registry.example.com/sandbox:latest

# 3. Push (Mock)
echo "Pushing to registry (skipped)..."
# docker push registry.example.com/sandbox:latest

# 4. Deploy (Mock - e.g. via SSH or kubectl)
echo -e "${GREEN}Deploy script finished.${NC}"
