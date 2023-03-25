import { askAI } from "@/lib/my_ask_ai"
import { useState } from 'react'
import Logo from "@/components/logo";
import Link from 'next/link'

function Response({ response, loading, references, previousQuestion }) {
  if (loading) {
    return 'Loading...'
  }

  if (!response) {
    return null
  }

  if (response.includes('<IDK>')) {
    return <div className="max-w-[50vw] w-full mx-auto overflow-y-auto max-h-[80vh] px-2 opacity-80">
      {previousQuestion && <div className="text-lg first-letter:capitalize underline font-bold decoration-purple-500">
        {previousQuestion}
        </div>}
      We were not able to find an answer to that question. Try again!
    </div>
  }

  console.log(references)
  return (
    <div className="max-w-[50vw] mx-auto overflow-y-auto max-h-[80vh] px-2 opacity-80">
      {previousQuestion && <div className="text-lg underline font-bold decoration-purple-500">
        {previousQuestion}
      </div>}
      {response}
      {references && references.length > 0 && (
        <ul>
          {references.map((reference, i) => (
            <li key={reference.content} className="mb-4">
              <div className="flex items-start gap-4 font-mono max-w-screen-md mx-auto mt-12">
                <div className="text-lg tabular-nums font-medium trading-wider underline decoration-2 decoration-purple-400">
                  {i + 1}.
                </div>
                <div className="mt-0.5">
                  {reference.content.slice(0, 200)}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default function SearchRegulations() {
  const [value, setValue] = useState('')
  const [previousQuestion, setPreviousQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [references, setReferences] = useState([])
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    try {
      const response = await askAI(value)
      setPreviousQuestion(value)
      setValue('')
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
    <div className="min-h-screen flex flex-col items-start justify-start gap-8">
      <div className="flex justify-center w-[80vw] sm:w-[50vw]">
      <Logo />
      </div>
      <Response response={response} loading={loading} references={references} previousQuestion={previousQuestion} />
      <form onSubmit={onSubmit} className="absolute bottom-8 flex flex-col gap-4">

        <textarea
          rows={4}
          value={value}
          onChange={onChange}
          placeholder="Input a question about real estate regulation"
          name="comment"
          id="comment"
          className="block w-[80vw] sm:w-[50vw] h-16 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 sm:py-1.5 sm:text-sm sm:leading-6"
          defaultValue={''}
        />

        {/* <input
          className="block w-[80vw] sm:w-[60vw] h-16 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 px-3 sm:text-sm sm:leading-6"
  
        /> */}
        <button type="submit" className="py-3 px-8 font-semibold rounded-lg shadow-md hover:shadow-md shadow-purple-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-br to-purple-400 from-indigo-400 text-white">
          Submit
        </button>
      </form>
    </div>
  )
}