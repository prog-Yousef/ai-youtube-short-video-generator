"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Gem, GemIcon, HomeIcon, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: HomeIcon
    },
    {
        title: 'Create New Video',
        url: '/create-new-video',   
        icon: LucideFileVideo
    },
    {
        title: 'Explore',
        url: '/explore',   
        icon: Search
    },
    {
        title: 'Billing',
        url: '/billing',   
        icon: WalletCards
    },
]

function AppSidebar() {
    //usePathname() is a hook that returns the current pathname of the page where it is called.
const path=usePathname();
console.log(path);

  return (
    <Sidebar>
        <SidebarHeader>
            <div>
                <div className='flex items-center space-x-2 p-3 w-full justify-center mt-5'>
                    <Image src={'/logo.svg'} alt="Logo" width={40} height={40} />
                    <h2 className='text-2xl font-bold'>Video Geni</h2>
                </div>
                <h2 className='text-LG  text-gray-400 text-center mt-3 '> AI Video Generator</h2>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <div className='mx-3 mt-8   '>
                        <Button className='w-full'>+ Create New Video</Button>
                    </div>

                    <SidebarMenu>
                        {MenuItems.map((menu, index) => ( 
                            <SidebarMenuItem className=' mt-3 mx-3' key={index}>
                                <SidebarMenuButton isActive={path==menu.url} className='p-5'>
                                    <Link href={menu.url} className='flex items-center gap-4 p-3'>
                                        <menu.icon />
                                        <span>{menu.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
           <div className='p-5 border rounded-lg mb-6 bg-gray-800'>
            <div className='flex items-center justify-between '>
               
                <Gem className='text-gray-400' />
                <h2 className='text-gray-400'>
                    
                    <span>5 credits left</span>
                </h2>
            </div>
            <Button className='w-full mt-3'>Buy More Credits</Button>
           </div>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar

