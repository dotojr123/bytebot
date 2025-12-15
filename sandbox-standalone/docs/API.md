# API Reference

## Authentication

(Coming Soon) - Currently the sandbox is designed to run in a private network (VPC).

## Endpoints

### Execute Action

Executes a computer action (mouse move, click, type, etc.).

- **URL**: `/api/v1/sandbox/execute`
- **Method**: `POST`
- **Body**: JSON

**Request Schema:**

```json
{
  "action": "move_mouse" | "click_mouse" | "type_text" | ...,
  "coordinates": { "x": number, "y": number }, // Optional
  "text": "string", // For typing
  "keys": ["Control", "c"] // For key presses
}
```

**Example (cURL):**

```bash
curl -X POST http://localhost:9990/api/v1/sandbox/execute \
  -H "Content-Type: application/json" \
  -d '{
    "action": "type_text",
    "text": "Hello World"
  }'
```

### Get Status

Returns the health and status of the sandbox.

- **URL**: `/api/v1/sandbox/status`
- **Method**: `GET`

**Response:**

```json
{
  "status": "ok",
  "uptime": 1234,
  "services": {
    "display": "running",
    "vnc": "running"
  }
}
```

## WebSocket

Connect to `/ws/sandbox` for real-time events and screen updates.
