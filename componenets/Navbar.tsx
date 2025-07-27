import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/"> 
              <Image src="/miku.jpg" alt="logo" width={30} height={30} />
            </Link>

            <div className="flex items-center gap-5 text-black">
              {session && session?.user ? (
                <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                
                <form action={ async () => {
                  "use server";

                  await signOut({redirectTo:"/"});

                }}>
                  <button type="submit" className="cursor-pointer">
                    <span>Logout</span>
                  </button>
                </form>
                

                <Link href={`/user/${session?.id}`}>
                  <span>{session.user?.name}</span>
                </Link>
                </>
              ) : (
                <form action={async () => {
                  "use server";

                  try {
                    await signIn("github");
                  } catch (error) {
                    console.error("Sign in error:", error);
                    throw error;
                  }
                }}>
                  <button type="submit" className="cursor-pointer">
                    Login
                  </button>
                </form>
              )}
            </div>
        </nav>
    </header>
  )
}
// sdfsdf
export default Navbar