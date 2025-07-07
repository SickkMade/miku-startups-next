import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/"> 
              <Image src="/miku.jpg" alt="logo" width={30} height={30} />
            </Link>

            <div className="flex items-center gap-5">
              {/* {session && session?.user ? {

              }} */}
            </div>
        </nav>
    </header>
  )
}
// sdfsdf
export default Navbar