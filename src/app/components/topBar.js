import Link from 'next/link'

const header = () => {
  const content = (
    <>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
        <ul>
          <Link to="/">
            <li> Home </li>
          </Link>

          <Link to="login">
            <li> login </li>
          </Link>

          <Link to="register">
            <li> sign up </li>
          </Link>

          <Link to="about">
            <li> About </li>
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
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-mono">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link href="/">
                <li> Home </li>
              </Link>

              <Link href="/login">
                <li> Login </li>
              </Link>

              <Link href="/register">
                <li>Register </li>
              </Link>

              <Link href="about">
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
