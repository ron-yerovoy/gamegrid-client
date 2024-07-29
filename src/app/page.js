import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bgrid grid-flow-col grid-rows-2 grid-cols-3 ">
        <div>
          <div className="relative -mt-14 -top-[150px] py-0">
            <Image src="/logo.jpg" width={550} height={400} alt="logo of game grid" />
          </div>
        </div>
      </div>
      <div>
        
        <h1 className="font-display p-1 relative top-[-165px] -py-1 -mt-20 items-center justify-center text-4xl font-extrabold text-transparent bg-clip-text bg-emerald-100 from-white via-gray-400 to-zinc-100 ">
          Welcome to the GameGrid!
          <br />
          a platform for gamers
          <br />
          by gamers
        </h1>
      </div>
      <nav className="flex-auto space-x-20 py-2 px-0">
        <Link
          href="/login"
          className="shadow-lg top-[-70px] h-8 px-8 font-semibold bg-green-800 rounded-md text-white"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="shadow-lg h-12 px-8 font-semibold rounded-md border-spacing-6 text-white bg-green-800"
        >
          Register
        </Link>
      </nav>
    </main>
  )
}
/* Landing Page */
