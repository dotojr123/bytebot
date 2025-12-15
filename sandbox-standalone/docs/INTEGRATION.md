# Integration Guide

## Native Integrations

### n8n

Use the **HTTP Request** node in n8n to control the sandbox.

1.  **Method**: POST
2.  **URL**: `http://sandbox-host:9990/api/v1/sandbox/execute`
3.  **Body**: JSON
    ```json
    {
      "action": "type_text",
      "text": "{{$json.myText}}"
    }
    ```

### Python Client

```python
import requests

class Sandbox:
    def __init__(self, url):
        self.url = url

    def execute(self, action_payload):
        return requests.post(f"{self.url}/api/v1/sandbox/execute", json=action_payload).json()

sandbox = Sandbox("http://localhost:9990")
sandbox.execute({"action": "move_mouse", "coordinates": {"x": 100, "y": 100}})
```

### Webhooks

You can configure the sandbox to send webhooks on specific events (e.g., "Task Completed").
*Configuration coming in next version.*
