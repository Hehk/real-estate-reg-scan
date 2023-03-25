export function getApiCredentials() {
  let id = "1679766430895x955804322842017800";
  let apiKey = "I5Utcu0jHmEsd1fGalCV2DUk6XHUb8";

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
