# Deployment Guide

## Production Checklist

- [ ] **Environment Variables**: Ensure `NODE_ENV=production`.
- [ ] **Security**: Run behind a secure reverse proxy (Nginx/Traefik) with SSL/TLS.
- [ ] **Network**: Isolate the sandbox container network; only expose port 9990 to authorized services.
- [ ] **Resources**: Limit container CPU/RAM to avoid noisy neighbor issues (recommended: 2CPU, 4GB RAM).

## Deployment Options

### Docker Compose

Use the provided `docker/docker-compose.yml` for a quick production-like setup. This configuration does not mount source code, ensuring the built artifacts inside the image are used.

```bash
docker-compose -f docker/docker-compose.yml up -d
```

### Kubernetes

(Manifests coming soon)

### Cloud Providers

#### AWS (ECS)

1.  Push Docker image to ECR.
2.  Create an ECS Task Definition with 2GB RAM.
3.  Deploy Service.

#### DigitalOcean (Droplet)

1.  Create a Droplet (Ubuntu Docker).
2.  Clone repo.
3.  Run `scripts/deploy.sh`.
