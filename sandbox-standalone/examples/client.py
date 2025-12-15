# sandbox-standalone/examples/client.py
import requests
import time

SANDBOX_URL = "http://localhost:9990"

def execute(action):
    try:
        res = requests.post(f"{SANDBOX_URL}/api/v1/sandbox/execute", json=action)
        res.raise_for_status()
        print(f"Success: {action['action']}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    execute({
        "action": "move_mouse",
        "coordinates": {"x": 100, "y": 100}
    })

    execute({
        "action": "type_text",
        "text": "Hello from Python!"
    })
