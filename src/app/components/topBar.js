'use client'
import Link from 'next/link'
import BaseButton from './baseButton'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <nav className='flex mt-2 mx-2 items-center'>
      <Link href="/">
          <Image
            src="/GameGridOnlyLogo.png"
            width={100}
            height={100}
            alt="GameGrid Logo"
          />
      </Link>
      <div className='ml-auto'>
        <Link href="/about">
            <BaseButton name="about" className="mx-2 mt-2">
              About
            </BaseButton>
        </Link>
      </div>
    </nav>
  )
}

export default Header
