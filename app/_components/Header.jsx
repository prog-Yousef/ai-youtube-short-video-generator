import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Authentication from './Authentication'

function Header() {
  return (
    <div className='p-4 flex justify-between items-center'>
    <div className='flex items-center gap-2'>
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <h2 className='text-2xl font-bold'>Video Geni</h2>
    </div>

    <Authentication>
    <Button>Get started!</Button>

    </Authentication>
    </div>
  )
}

export default Header