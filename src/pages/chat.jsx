import Header from "@/components/header";
import SearchRegulations from "@/components/search_regulations";

export default function Chat() {
  return (
    <main className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 min-h-screen flex flex-col p-6">
      <div className="container-sm mx-auto">
        <SearchRegulations />
      </div>
    </main>
  )
}