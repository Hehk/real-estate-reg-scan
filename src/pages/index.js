import Head from 'next/head'
import SearchRegulations from '@/components/search_regulations'
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>ConTrack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 min-h-screen flex flex-col p-6'>
        <Header />
        <Hero />
        <h1>ConTrack</h1>
        <p>
        </p>
        <SearchRegulations />
      </main>
    </>
  )
}
