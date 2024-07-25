import React from 'react'

const BurgerMenu = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-8">User Menu</h2>
        <ul className="space-y-6">
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">Lobby</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">My Profile</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">My Rank</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">Settings</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default BurgerMenu