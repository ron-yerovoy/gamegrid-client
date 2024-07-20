import Link from "next/link";
export default function Footer() {
    return(
        <div className=" w-screen left-1/ bg-primary bottom-0 text-white h-16 flex flex-row shadow-md m-0 p-2 justify-center">
            <p>Copyright 2024 GameGrid. All rights reserved.</p>
             <Link href='/about' className='mx-2 bg-accent p-2'>About</Link>
        </div>
    );
}