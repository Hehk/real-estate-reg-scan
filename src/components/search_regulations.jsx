import { askAI } from "@/lib/my_ask_ai"
import { useState } from 'react'

export default function SearchRegulations() {
  const [value, setValue] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)
    try {
      const { answer } = await askAI(value)
      setResponse(answer)
    } catch (e) {
      setResponse('Error')
    } finally {
      setLoading(false)
    }
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="w-80">
      <input className="border b-" value={value} onChange={onChange} />
      <button onClick={onSubmit}>Click me</button>
      <div>
        {loading && 'Loading...'}
        {response}
      </div>
    </div>
  )
}