import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { GiRank3 } from 'react-icons/gi'
import { AiOutlineSetting } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { IoMdContacts } from 'react-icons/io'

import Link from 'next/link'

const Menu = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content absolute left-[10%] scroll-py-10 ">
        <label htmlFor="my-drawer" className="btn btn-neutral drawer-button">
          <AiOutlineMenu />
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-stone-200 text-base-content min-h-full w-80 p-4 text-lg font-semibold">
          <li>
            <a className="text-primary">
              {' '}
              <AiOutlineMenu /> Menu{' '}
            </a>
          </li>
          <li>
            <Link href="/HomePage">
              <li>
                <a className="text-primary">
                  {' '}
                  <FaHome /> Home{' '}
                </a>
              </li>
            </Link>
          </li>
          <li>
            <Link href="/HomePage">
              <li>
                <a className="text-primary">
                  {' '}
                  <CgProfile /> My Profile{' '}
                </a>
              </li>
            </Link>
          </li>
          <li>
            <Link href="/HomePage/myRank">
              <li>
                <a className="text-primary">
                  {' '}
                  <GiRank3 /> My Rank{' '}
                </a>
              </li>
            </Link>
          </li>
          <hr />
          <li>
            <a className="text-primary">
              {' '}
              <AiOutlineSetting /> Settings{' '}
            </a>
          </li>
          <li>
            <a className="text-primary">
              {' '}
              <FcAbout /> About{' '}
            </a>
          </li>
          <li>
            <a className="text-primary">
              {' '}
              <IoMdContacts /> Contacts{' '}
            </a>
          </li>

          <hr />
        </ul>
      </div>
    </div>
  )
}

export default Menu
