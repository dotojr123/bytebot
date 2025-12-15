#!/bin/bash
set -e

URL="http://localhost:9990/health" # Assuming we add a health check endpoint or just check the main page

if curl --output /dev/null --silent --head --fail "$URL"; then
    echo "Sandbox is HEALTHY"
    exit 0
else
    echo "Sandbox is UNHEALTHY"
    exit 1
fi
