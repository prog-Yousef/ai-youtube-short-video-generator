import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center
    mt-24 md:px-20 lg:px-36 xl:px-48'>
        <h2 className='font-bold text-6xl text-center'>AI Youtube Video Generator</h2>
   <p className='mt-4 text-2xl text-center text-gray-500'>AI generates script, Images, and Voiceovers in seconds. Create, edit and 
    publish engaging videos in minutes.
   </p>
   <div className='mt-7 gap-8 flex'>
<Button  size="lg" variant="secondary" > Explore</Button>
<Button  size="lg" >Get Started!</Button>

   </div>
    </div>
  )
}

export default Hero