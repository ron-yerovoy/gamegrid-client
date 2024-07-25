import React from 'react'
import HomeHeader from '../components/HomeNav'
import BurgerMenu from '../components/BurgerMenu'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      <div className="flex">
        <BurgerMenu />
        {children}
      </div>
    </div>
  )
}

export default HomeLayout
