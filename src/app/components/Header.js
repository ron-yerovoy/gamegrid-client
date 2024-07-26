import Link from 'next/link'
import Alertss from '../components/Alert'
import Dardkmode from '../components/Dardmode'

const Header = () => {
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 ">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <Dardkmode />

        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 -mr-12 text-[18px]">
              <Link href="/HomePage">
                <li> TempHomePage </li>
              </Link>

              <Link href="/login">
                <li data-cy="login_button_in_heade_menu" className=" hover:bg-cyan-800 hover:rounded">
                  {' '}
                  Login{' '}
                </li>
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

export default Header
