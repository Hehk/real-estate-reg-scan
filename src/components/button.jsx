import Link from "next/link"

export default function Button({ text = "Try" }) {
    return (
        <Link
            href="/chat"
            className="py-3 px-8 font-semibold rounded-lg shadow-md hover:shadow-md shadow-purple-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-br to-purple-400 from-indigo-400 text-white"
        >
            {text}
        </Link>
    )
}
