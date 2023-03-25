import { askAI } from "@/lib/my_ask_ai"
import { useState } from 'react'

function Response({ response, loading, references }) {
  if (loading) {
    return 'Loading...'
  }

  if (!response) {
    return null
  }

  console.log(references)
  return (
    <div>
      {response}
      {references && references.length > 0 && (
        <ul>
          {references.map((reference) => (
            <li key={reference.content}>
              <div>{reference.content.slice(0, 200)}</div>
              <a href={reference.link}>{reference.author}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default function SearchRegulations() {
  const [value, setValue] = useState('')
  const [response, setResponse] = useState('')
  const [references, setReferences] = useState([])
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)
    try {
      const response = await askAI(value)
      setResponse(response.answer)
      setReferences(response.references)
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
    <div>
      <div className="flex flex-row">
        <input className="flex-grow py-3 px-3 font-semibold rounded-lg shadow-md hover:shadow-md shadow-purple-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " value={value} onChange={onChange} />
        <button onClick={onSubmit} className="ml-3 py-3 px-8 font-semibold rounded-lg shadow-md hover:shadow-md shadow-purple-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-br to-purple-400 from-indigo-400 text-white">Click me</button>
      </div>
      <Response response={response} loading={loading} references={references} />
    </div>
  )
}