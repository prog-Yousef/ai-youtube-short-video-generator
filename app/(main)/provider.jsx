"use client"
import React, { useEffect } from 'react'
import { SidebarProvider} from "@/components/ui/sidebar"
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../provider'
import { useRouter } from 'next/navigation'


function DashboardProvider({children}) {

  const { user } = useAuthContext(); // när du använder useAuthContext() då använd client
  const router= useRouter();

  useEffect(() => {
   user && checkedUserAuthenticated
  }, [user]) ;

  const checkedUserAuthenticated = () => {
    if (!user ) {
      router.replace('/');
    }
  }


  return (
    <SidebarProvider>
        <AppSidebar />
        <div className='w-full'>
            <AppHeader />
    {children}
    </div>
    </SidebarProvider>
  )
}

export default DashboardProvider