
"use client"
import { Input } from '@/components/ui/input'
import React, { use } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import onHandleInputChange from '../page'
import { SparkleIcon } from 'lucide-react'

const suggestions = [
  "History Story",
  "Movie Story",
  "Kids Story",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Stories",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Travel Stories",
  "Historical Events",
  "Fantasy Adventures",
  "Science Experiments",
  "DIY Projects",
  "Cooking Recipes",
  "Motivational Stories",
]

function Topic({onHandleInputChange}) {
  const [selectTopic, setSelectTopic] = useState()
const GenerateScript=()=>{
  console.log('clicked');
}
  return (
    <div >
        <h2 className='mb-1' >Project Title</h2>
        <Input placeholder='Enter Project Title' onChange={(event)=>{onHandleInputChange('title', event?.target.value)}}/>

        <div className='mt-5'>
        <h2>Video Topic</h2>
        <p className='text-gray-600 text-sm'>Select Topic for your video</p>

        <Tabs defaultValue="suggestions" className="w-full mt-2">
  <TabsList>
    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
    <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestions">
    <div >
    {suggestions.map((suggestion, index) => (
      <Button variant="outline" key={index} className={`m-1 ${selectTopic === suggestion&& "bg-secondary"}`} onClick={() => {setSelectTopic(suggestion)
        onHandleInputChange('topic', suggestion)
      }}>{suggestion}</Button>
    ))}
    </div>
    </TabsContent>
  <TabsContent value="your_topic">
    <div>
    <h2>Enter your own topic</h2>
    <Textarea placeholder='Enter your topic'
    onChange={(event)=>{onHandleInputChange('topic', event.target.value)}}
    />

    </div>
  
  </TabsContent>
</Tabs>

        </div>
        <Button className='mt-3 'size="sm" onClick={GenerateScript}><SparkleIcon/> Generate Script</Button>

    </div>
  )
}

export default Topic