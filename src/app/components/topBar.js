import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-screen h-16 bg-transparent p-4 top-0 ">
      <nav className="text-white p-4 ">
        <h1
          className="
          text-5xl 
          font-extrabold 
         text-center 
          bg-clip-text
         bg-purple-700 
          text-transparent 
         bg-gradient-to-r from-black via-orange-200 to-cyan-500 
         "
        >
          Game-Grid
        </h1>
        <Link href="/" className="mx-2 p-1 bg-accent">
          Home
        </Link>
      </nav>
    </div>
  )
}
