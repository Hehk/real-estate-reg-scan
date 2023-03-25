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

  const onSubmit = async (e) => {
    e.preventDefault()

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
      <form onSubmit={onSubmit} className="flex flex-row">
        <input
          className={`styles.inputField`}
          value={value}
          onChange={onChange}
        />
        <button type="submit" className={`styles.submitButton`}>
          Click me
        </button>
      </form>
      <Response response={response} loading={loading} references={references} />
    </div>
  )
}