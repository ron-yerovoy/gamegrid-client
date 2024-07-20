import Link from 'next/link'
import BaseButton from './baseButton'
export default function Header() {
    return(
        <div className="w-screen h-16 bg-transparent p-4 top-0 ">
          <Link href='/'>
           <BaseButton>Home</BaseButton>
          </Link>
          <Link href='/about'>
            <BaseButton className='absolute top-4 right-4'>about</BaseButton>
          </Link>
          <Link href='/login'>
            <BaseButton>login</BaseButton>
          </Link>
        </div>
        
    );
};
