import { generate } from '../lib/openai'
import { useState } from 'react'

export default function GenerateName() {
  const [value, setValue] = useState('')
  const [response, setResponse] = useState('')

  const onSubmit = async () => {
    const { choices } = await generate(value)
    const { text } = choices[0]
    setResponse(text)
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={onSubmit}>Click me</button>
      <div>
        {response}
      </div>
    </>
  )
}