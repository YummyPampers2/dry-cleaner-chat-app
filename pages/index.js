import Head from 'next/head'
import dynamic from 'next/dynamic'


const AblyChatComponent = dynamic(() => import('./components/AblyChatComponent.jsx'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dry Cleaner Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Dry Cleaner Chat</h1>
        <AblyChatComponent />
      </main>

      <footer>
        Powered by
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        and
        <a href="https://ably.com" rel="noopener noreferrer">
          <img src="/ably-logo.svg" alt="Ably Logo" className="logo ably" />
        </a>
      </footer>

      <style jsx>{`
        ...       
      `}</style>

      <style jsx global>{`
        ...        
      `}</style>
    </div>
  )
}

