import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bgrid grid-flow-col grid-rows-2 grid-cols-3 bg-red-600">
        <div>
          <div className="relative -mt-14 top-[-80px] py-0">
            <Image src="/logo.jpg" width={600} height={400} alt="logo of game grid" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="p-1 relative top-[-120px] -py-1 -mt-20 items-center justify-center text-4xl font-extrabold text-transparent bg-clip-text bg-emerald-100 from-white via-gray-400 to-zinc-100 ">
          Welcome to the GameGrid!
          <br />
          a platform for gamers
          <br />
          by gamers
        </h1>
      </div>

      <div className="-mt-16 flex-auto space-x-20 py-2 px-4  ">
        <button
          src="/"
          className="shadow-lg top-[-70px] h-8 px-4 font-semibold bg-green-600 rounded-md text-white"
          type="submit"
        >
          Register
        </button>
        <button
          className="shadow-lg h-8 px-4 font-semibold rounded-md border-spacing-6 text-white bg-blue-600"
          type="button"
        >
          Sign in
        </button>
      </div>
    </main>
  )
}
/* Landing Page */
