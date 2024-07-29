import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GiRank3 } from 'react-icons/gi';
import { AiOutlineSetting } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { IoMdContacts } from 'react-icons/io';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content absolute left scroll-py-10 -top-6 ">
        <label htmlFor="my-drawer" className="btn btn-neutral drawer-button">
          <AiOutlineMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-stone-200 text-base-content min-h-full w-80 p-4 text-lg font-semibold">
          <li>
            <span className="text-primary">
              <AiOutlineMenu /> Menu
            </span>
          </li>
          <li>
            <Link href="/HomePage" className="text-primary">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link href="/HomePage" className="text-primary">
              <CgProfile /> My Profile
            </Link>
          </li>
          <li>
            <Link href="/HomePage/myRank" className="text-primary">
              <GiRank3 /> My Rank
            </Link>
          </li>
          <hr />
          <li>
            <Link href="/HomePage" className="text-primary">
              <AiOutlineSetting /> Settings
            </Link>
          </li>
          <li>
            <Link href="/HomePage" className="text-primary">
              <FcAbout /> About
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
