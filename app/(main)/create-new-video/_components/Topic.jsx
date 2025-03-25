import { Input } from '@/components/ui/input'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function Topic() {
  return (
    <div >
        <h2 className='mb-1' >Project Title</h2>
        <Input placeholder='Enter Project Title'/>

        <div className='mt-5'>
        <h2>Video Topic</h2>
        <p className='text-gray-600 text-sm'>Select Topic for your video</p>

        <Tabs defaultValue="suggestions" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
    <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestions">Make changes to your account here.</TabsContent>
  <TabsContent value="your_topic">Change your password here.</TabsContent>
</Tabs>

        </div>

    </div>
  )
}

export default Topic