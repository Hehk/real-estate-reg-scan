const getKey = () => {
  // Check if the variable is not defined
  let apiKey = localStorage.getItem('openai_api_key');
  if (!apiKey || apiKey === 'null') {
    // Prompt user to enter the API key and store it
    apiKey = prompt('Please enter your OpenAI API key:');
    localStorage.setItem('openai_api_key', apiKey);
  }

  return apiKey
}

export const generate = async (text) => {
  const apiKey = getKey()
  const url = 'https://api.openai.com/v1/engines/davinci/completions'
  const headers = {
    'Content-Type': 'application/json',
  }
  const data = {
    prompt: text,
    max_tokens: 100,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  }
  try {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
  } catch (e) {
    console.error('Error:', e);
  }
}