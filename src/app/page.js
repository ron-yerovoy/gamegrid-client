import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bgrid grid-flow-col grid-rows-2 grid-cols-3 gap-8 bg-red-600">
        <div>
          <div className="relative -mt-14 top-[-80px] flex py-0">
            <Image src="/logo.jpg" width={600} height={400} alt="logo of game grid" />
          </div>
        </div>
        <h1 className="relative py-1 -mt-14 text-4xl items-center justify-center font-semibold">
          Welcome to the GameGrid!
          <br />
          a platform for gamers
          <br />
          by gamers
        </h1>
      </div>
      <div class="flex-auto space-x-4 py-40 px-4 bg-blue-500 ">
        <button class="h-8 px-4 font-semibold bg-green-600 rounded-md text-white" type="submit">
          Register
        </button>
        <button
          class="h-8 px-4 font-semibold rounded-md border-spacing-6 text-white bg-blue-600"
          type="button"
        >
          Sign in
        </button>
      </div>
    </main>
  )
}
/* Landing Page */
