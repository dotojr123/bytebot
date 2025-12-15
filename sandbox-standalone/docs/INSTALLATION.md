# Installation Guide

## Prerequisites

- **Node.js**: >= 18.x
- **Docker**: >= 24.x (Recommended for Production)
- **PostgreSQL**: >= 14.x (Optional, for persistent state)
- **Redis**: >= 7.x (Optional, for queues/cache)
- **Hardware**: Minimum 2GB RAM, 10GB Disk

## Methods

### 1. NPM (Development)

Run the sandbox locally on your host machine (Linux only recommended due to X11 deps).

```bash
# Install system dependencies (Ubuntu/Debian)
sudo apt-get install libxtst-dev libpng-dev

# Install NPM packages
npm install

# Start development server
npm run start:dev
```

### 2. Docker (Production/Universal)

The recommended way to run the sandbox.

```bash
# Build the image
docker build -t sandbox-standalone -f docker/Dockerfile .

# Run the container
docker run -p 9990:9990 -p 5900:5900 sandbox-standalone
```

### 3. Kubernetes (Enterprise)

See `docs/DEPLOYMENT.md` for Helm charts and manifests.

## Troubleshooting

- **VNC connection failed**: Ensure port 9990 is open and not blocked by firewall.
- **"Display not found"**: Ensure `xvfb` is running (Docker handles this automatically via Supervisor).
- **Permission errors**: The internal user is `user`. Ensure volume mounts have correct permissions (uid 1000).
