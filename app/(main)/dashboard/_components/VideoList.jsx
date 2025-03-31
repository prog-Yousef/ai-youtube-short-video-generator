"use client"
import { useAuthContext } from '@/app/provider';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { RefreshCcw } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function VideoList({ explore = false }) {
    const [videoList, setVideoList] = useState([]);
    const convex = useConvex();
    const { user, setUser } = useAuthContext();
    const [loading, setLoading] = useState(false);

    '77only call when user is logged in'
    useEffect(() => {
        user && GetUserVideoList();
    }, [user])

    const GetUserVideoList = async () => {
        setLoading(true);
        // All user videos
        let result = [];
        if (explore) {
            result = await convex.query(api.videoData.GetLatestVideo, {});
        }
        else {
            result = await convex.query(api.videoData.GetUserVideos, {
                //convex user id
                uid: user?._id
            });
        }
        setVideoList(result);
        setLoading(false);

        const isPendingVideo = result?.find((item) => item.status == 'pending');
        isPendingVideo && GetPendingVideoStatus(isPendingVideo);
    }

    const GetPendingVideoStatus = (pendingVideo) => {
        const intervalId = setInterval(async () => {
            // Get Video Data by Id
            const result = await convex.query(api.videoData.GetVideoById, {
                videoId: pendingVideo?._id
            })

            if (result?.status == 'completed') {
                clearInterval(intervalId);
                console.log("Video Proccess Completed");
                GetUserVideoList();
            }
            console.log('Still Pending...')

        }, 5000)
    }

    return (
        <div>
            {(!loading) && videoList?.length == 0 ?
                <div className='flex flex-col items-center 
                justify-center mt-28 gap-5 p-5 border border-dashed rounded-xl py-16'>
                    <Image src={'/logo.svg'} alt='logo' width={60} height={60} />
                    <h2 className='text-gray-400 text-lg'>You dont have any video created. Create new one</h2>
                    <Link href={'/create-new-video'}>
                        <Button>+ Create New Video</Button>
                    </Link>
                </div>
                :
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10'>
                    {videoList?.length > 0 ? videoList?.map((video, index) => (
                        <Link key={index} href={'/play-video/' + video?._id}>
                            <div className='relative'>
                                {video?.status == 'completed' ? <Image src={video?.images ? video?.images[0] : '/logo.svg'}
                                    alt={video?.title}
                                    width={500}
                                    height={500}
                                    className='w-full object-cover rounded-xl
                                aspect-[2/3]'
                                /> :
                                    <div className='aspect-[2/3] p-5 w-full rounded-xl bg-slate-900
                                flex items-center justify-center gap-2'>
                                        <RefreshCcw className='animate-spin' />
                                        <h2>Generating...</h2>
                                    </div>}
                                <div className='absolute bottom-3 px-5 w-full'>
                                    <h2>{video?.title}</h2>
                                    <h2 className='text-sm'>{moment(video?._creationTime).fromNow()}</h2>
                                </div>
                            </div>
                        </Link>
                    )) :
                        [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                            <div key={index} className='aspect-[2/3] w-full bg-secondary animate-pulse rounded-xl'>

                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default VideoList