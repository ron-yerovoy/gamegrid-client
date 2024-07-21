import Link from 'next/link'
import BaseButton from './baseButton'
import Image from 'next/image'

const header = () => {
  return (
    <div className='flex mt-2 mx-2'>
      <Link href="/">
        <Image
          src="/GameGridOnlyLogo.png"
          width={100}
          height={100}
          alt="GameGrid Logo"
        />
      </Link>
      <Link href="/about">
        <BaseButton className={"absolute right-2 top-2 mx-2 mt-2"}>About</BaseButton> 
      </Link>
    </div>
  )
}

export default header
