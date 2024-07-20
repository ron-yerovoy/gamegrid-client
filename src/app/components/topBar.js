import Link from 'next/link'

const header = () => {
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900  ">
        <ul className=" text-center text-xl p-20">
          <Link to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Home </li>
          </Link>

          <Link to="login">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> login </li>
          </Link>

          <Link to="register">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {' '}
              sign up{' '}
            </li>
          </Link>

          <Link to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> About </li>
          </Link>
        </ul>
      </div>
    </>
  )
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 ">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 -mr-12 text-[18px]">
              <Link href="/">
                <li className=" hover:bg-cyan-800 hover:rounded"> Home </li>
              </Link>

              <Link href="/login">
                <li className=" hover:bg-cyan-800 hover:rounded"> Login </li>
              </Link>

              <Link href="/register">
                <li className=" hover:bg-cyan-800 hover:rounded">Register </li>
              </Link>

              <Link href="about" className="hover:bg-cyan-800 hover:marker">
                <li> About </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default header
