'use client' // 👈 MUST be the first line
import { useAuthContext } from '@/app/provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
    const { user } = useAuthContext(); // när du använder useAuthContext() då använd client
    return (
        <div className='p-3 flex items-center justify-between'>
            <SidebarTrigger />
            {user?.pictureURL && (
                <Image 
                    src={user.pictureURL} 
                    alt="User profile" 
                    width={40} 
                    height={40}
                    className="rounded-full"
                />
            )}
        </div>
    )
}

export default AppHeader