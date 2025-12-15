// sandbox-standalone/examples/client.js
const axios = require('axios');

const SANDBOX_URL = 'http://localhost:9990';

async function main() {
  try {
    console.log('Moving mouse...');
    await axios.post(`${SANDBOX_URL}/api/v1/sandbox/execute`, {
      action: 'move_mouse',
      coordinates: { x: 500, y: 300 }
    });

    console.log('Typing text...');
    await axios.post(`${SANDBOX_URL}/api/v1/sandbox/execute`, {
      action: 'type_text',
      text: 'Hello from Node.js Client!'
    });

    console.log('Done!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
