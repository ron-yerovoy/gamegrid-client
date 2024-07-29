import Link from 'next/link'
import BaseButton from './baseButton'
import Image from 'next/image'

export default function Header(){

  return (
    <nav className='flex'>
      <Link href="/" className='p-2 m-2'>
          <Image
            src="/GameGridOnlyLogo.png"
            width={100}
            height={100}
            alt="GameGrid Logo"
          />
      </Link>
      <Link href="/about" className='absolute right-2 top-2'>
          <BaseButton name="about">
            About
          </BaseButton>
      </Link>
    </nav>
  )
}


