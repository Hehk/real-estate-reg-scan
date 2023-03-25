export function getApiCredentials() {
  let id = localStorage.getItem('askai_id');
  let apiKey = localStorage.getItem('askai_api_key');

  if (!id) {
    id = prompt('Please enter your AskAI ID:');
    localStorage.setItem('askai_id', id);
  }

  if (!apiKey) {
    apiKey = prompt('Please enter your AskAI API key:');
    localStorage.setItem('askai_api_key', apiKey);
  }

  return {
    id,
    apiKey
  };
}

export async function askAI(query) {
  const { id, apiKey } = getApiCredentials();

  const response = await fetch('https://myaskai.com/api/1.1/wf/ask-ai-query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      id,
      api_key: apiKey,
      query
    })
  });

  const json = await response.json();
  return json;
}
