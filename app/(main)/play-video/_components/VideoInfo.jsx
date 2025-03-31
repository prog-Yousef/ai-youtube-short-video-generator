import { Button } from '@/components/ui/button'
import { ArrowLeft, DownloadIcon, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function VideoInfo({ videoData }) {
    return (
        <div className='p-5 border rounded-xl'>
            <Link href={'/dashboard'}>
                <h2 className='flex gap-2 items-center'>
                    <ArrowLeft />
                    Back to Dashboard
                </h2>
            </Link>
            <div className='flex flex-col gap-3'>
                <h2 className='mt-5'>Project Name: {videoData?.title}</h2>
                <p className='text-gray-500'>Script: {videoData?.script}</p>
                <h2>Video Style : {videoData?.videoStyle}</h2>

                {videoData?.downloadUrl ?
                    <a href={videoData?.downloadUrl} className='w-full' target='_blank'>
                        <Button className="w-full"> <DownloadIcon /> Export & Download</Button>
                    </a>
                    :
                    <div>
                        <Button disabled className="w-full"> <RefreshCcw className='animate-spin' /> Processing Your Video...</Button>

                        <h2 className='text-xs text-gray-500 mt-3'>You can still play your video, Processing will take 1-2 Min</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoInfo