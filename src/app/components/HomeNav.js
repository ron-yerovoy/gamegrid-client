import React from 'react'
import Menu from '../components/Menu'
import Link from 'next/link'
import Dardkmode from '../components/Dardmode'
export const HomeNav = ({userId}) => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start  ">
        <Menu />
      </div>
      <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 -mr-12 text-[18px]">
            <Link href="/HomePage/LeaderBoard">
              <li> LeaderBoard </li>
            </Link>
            <Link href={`/HomePage/${encodeURIComponent(userId)}`}>
              <li data-cy="login_button_in_heade_menu" className=" hover:bg-cyan-800 hover:rounded">
                {' '}
                Lobby{' '}
              </li>
            </Link>
            <Link href="/HomePage/Squad">
              <li className=" hover:bg-cyan-800 hover:rounded">Squad </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="navbar-end flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeNav
