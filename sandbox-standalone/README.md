# Sandbox Standalone

A professional, standalone execution environment for desktop automation, capable of running securely in isolation. This sandbox provides a complete XFCE desktop environment accessible via API and VNC.

## Features

- **Isolated Execution**: Runs in a secure Docker container.
- **Desktop Environment**: Full XFCE desktop with Firefox, VS Code, and more.
- **API Control**: REST API and WebSocket for programmatic control (mouse, keyboard, etc.).
- **VNC Access**: View the execution in real-time.
- **Production Ready**: Optimized Dockerfile, supervision, and security best practices.

## Architecture

![Architecture](docs/images/architecture.png) *[Placeholder]*

The Sandbox consists of:
1.  **Core**: Node.js NestJS application managing the environment.
2.  **Desktop**: XFCE4 desktop running on Xvfb (virtual framebuffer).
3.  **VNC**: x11vnc + noVNC for remote viewing.
4.  **Integrations**: MCP (Model Context Protocol) support for LLM agents.

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local dev)

### Installation (5 minutes)

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-org/sandbox-standalone.git
    cd sandbox-standalone
    ```

2.  Start with Docker Compose (Production):
    ```bash
    cd docker
    docker-compose up --build
    ```

    For development (with hot-reload):
    ```bash
    cd docker
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
    ```

3.  Access the Sandbox:
    - **API**: `http://localhost:9990`
    - **VNC**: `http://localhost:9990/vnc`

## Documentation

- [Installation Guide](docs/INSTALLATION.md)
- [API Reference](docs/API.md)
- [Integration Guide](docs/INTEGRATION.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## Usage Example

```javascript
// Example: Move mouse to center of screen
fetch('http://localhost:9990/api/v1/sandbox/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'move_mouse',
    coordinates: { x: 500, y: 500 }
  })
});
```

## License

Unlicensed / Proprietary
