'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className='border-b p-4 flex items-center justify-between'>
      <Link href='/' className='text-blue-600 font-bold text-2xl'>
        Markeplace
      </Link>
      <nav className='flex gap-2 *:rounded  *:py-1'>
        <Link href='/new' className='border border-blue-600 text-blue-600 inline-flex items-center gap-1 px-2'>
          <FontAwesomeIcon icon={faPlus} className='h-4' />
          <span>Post a add</span>
        </Link>
        <span className='border-r-2 text-gray-300 text-xl'></span>
        {!session?.user && (
          <>
            <button className='px-4 border-0 text-gray-600'>Sign up</button>
            <button onClick={() => signIn('google')}
              className='bg-blue-600 text-white border-0 px-6'>
              Login
            </button>
          </>
        )}
        {
          session?.user && (
            <>
              <Link href='/account'>
              </Link>
              <Image style={{borderRadius: '8px'}} src={session.user.image!} alt={'avatar user'} width={30} height={30} />
              <button onClick={() => signOut()} className='px-4 border-0 text-gray-600'>LogOut</button>
            </>
          )
        }

      </nav>
    </header>
  );
}