
import Link from 'next/link'
import BaseButton from './baseButton'
import Image from 'next/image'

export default function Header(){

  return (
    <nav className='flex'>
      <Link href="/">
          <Image
            src="/GameGridOnlyLogo.png"
            width={100}
            height={100}
            alt="GameGrid Logo"
          />
      </Link>
      <div>
        <Link href="/about">
            <BaseButton name="about">
              About
            </BaseButton>
        </Link>
      </div>
    </nav>
  )
}


