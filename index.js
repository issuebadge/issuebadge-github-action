const core = require('@actions/core');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

async function run() {
  try {
    const apiKey = core.getInput('api_key');
    const badgeId = core.getInput('badge_id');
    const name = core.getInput('name');
    const email = core.getInput('email');

    const response = await fetch('https://app.issuebadge.com/api/v1/issue/create', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        badge_id: badgeId,
        idempotency_key: uuidv4()
      })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Badge sent successfully:', data);
    } else {
      core.setFailed(`Failed to send badge: ${data.message || JSON.stringify(data)}`);
    }
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();