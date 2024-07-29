import Link from 'next/link'
import Image from 'next/image'
import BaseButton from './components/baseButton'
import { Roboto_Mono } from 'next/font/google'
const roboto_mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono',})
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
        <h1 className={"font-display p-1 relative top-[-165px] -py-1 -mt-20 items-center justify-center text-4xl text-transparent bg-clip-text bg-emerald-100 from-white via-gray-400 to-zinc-100 "}>
          Welcome to the GameGrid!
          <br />
          a platform for gamers
          <br />
          by gamers
        </h1>
      </div>
      <nav>
        <Link href='/login'>
          <BaseButton
          name="login">
          Login
          </BaseButton>
        </Link>
        <Link href='/register'>
          <BaseButton>Register</BaseButton>
        </Link>
      </nav>
    </main>
  )
}
/* Landing Page */
