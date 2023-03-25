import { askAI } from "@/lib/my_ask_ai"
import { useState } from 'react'
import Logo from "@/components/logo";

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
    <div className="flex flex-col items-center justify-center gap-8 mt-12 pb-32">
      <Logo />
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          className="block w-[80vw] sm:w-[60vw] h-16 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 px-3 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
          placeholder="Input a question about real estate regulation"
        />
        <button type="submit" className="py-3 px-8 font-semibold rounded-lg shadow-md hover:shadow-md shadow-purple-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-br to-purple-400 from-indigo-400 text-white">
          Submit
        </button>
      </form>
      <Response response={response} loading={loading} references={references} />
    </div>
  )
}