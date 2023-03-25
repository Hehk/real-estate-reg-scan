import Link from "next/link"

export default function Button({ text = "Get Started" }) {
    return (
        <Link
            href="/chat"
            className="flex items-center justify-center py-1.5 sm:py-3 px-4 sm:px-8 font-semibold rounded-lg shadow-md hover:shadow-lg shadow-purple-200 hover:shadow-purple-200 hover:bg-opacity-90 duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-br to-purple-400 from-indigo-400 text-white"
        >
            <div className="text-sm sm:text-base text-center">
                {text}
            </div>
        </Link>
    )
}
