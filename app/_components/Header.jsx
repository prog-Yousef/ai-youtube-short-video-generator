'use client'; // Fixed quotes around directive

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Authentication from './Authentication';
import { useAuthContext } from '../provider';

function Header() {
  const { user } = useAuthContext();

  return (
    <div className="p-4 flex justify-between items-center">
      {/* Logo section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Video Geni</h2>
      </div>

      {/* Auth section */}
      {!user ? (
        <Authentication>
          <Button>Get started!</Button>
        </Authentication>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          {user?.pictureURL && (
            <Image 
              src={user.pictureURL}  
              alt="user" 
              width={40} 
              height={40}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Header;