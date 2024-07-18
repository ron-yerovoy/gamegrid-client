import Link from 'next/link'

export default function Header() {
    return(
        <div className="w-screen h-16 bg-transparent p-4 top-0 ">
           <Link  href='/' className='mx-2 p-1 bg-accent'>Home</Link>
          
        </div>
        
    );
};
