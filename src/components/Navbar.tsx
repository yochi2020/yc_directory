"user server"

import Link from 'next/link'
import React from 'react'
import { auth, signIn,signOut } from '../../auth'
import Image from 'next/image'

const Navbar = async () => {
  const session = await auth();

  console.log(session)
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between item-center text-black'>
        <Link href='/'>
          <Image src={"/logo.png"} alt="logo" width={144} height={30}/>
        </Link>

        <div className='flex items-center gap-5'>
          {
            session && session?.user ? (
              <>
                <Link href="">
                  <span>Create</span>
                </Link>
                <form action={async () => {
                  "use server"
                    await signOut()
                  }}>
                  <button  type="submit">
                    <span>Logout</span>
                  </button>
                </form>
                <Link href={`/user/${session?.user.id}`}>
                  <span>{session?.user.name}</span>
                  sss
                </Link>
              </>

            ) : (
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                <button type="submit">Login</button>
              </form>
            )
          }
        </div>
      </nav>
    </header >
  )
}

export default Navbar