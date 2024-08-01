'use client'
import React from 'react'
import HomeHeader from '../components/HomeNav'
import BurgerMenu from '../components/BurgerMenu'
import { useEffect, useState } from 'react'
import { getSessionData } from '@/app/actions'

const HomeLayout = ({ children }) => {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await getSessionData()
        setUserId(id) // Set userId once it is resolved
      } catch (error) {
        console.error('Error fetching user ID:', error)
      }
    }

    fetchUserId()
  }, [])
  return (
    <div>
      <HomeHeader userId={userId} />
      <div className="flex">{children}</div>
    </div>
  )
}

export default HomeLayout
