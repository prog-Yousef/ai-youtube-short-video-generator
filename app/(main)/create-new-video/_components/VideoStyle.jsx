import Image from 'next/image'
import React, { useState } from 'react'

export const options = [
    {
        name: 'Realistic',
        image: '/realistic.png'
    },
    {
        name: 'Cinematic',
        image: '/cinematic.png'
    },
    {
        name: 'Cartoon',
        image: '/3d.png'
    },
    {
        name: 'Watercolor',
        image: '/watercolor.png'
    },
    {
        name: 'Cyberpunk',
        image: '/cyberpunk.png'
    },
    {
        name: 'GTA',
        image: '/gta.png'
    },
    {
        name: 'Anim',
        image: '/anim.png'
    }

]

function VideoStyle({ onHandleInputChange }) {
    const [selectedStyle, setSelectedStyle] = useState();
    return (
        <div className='mt-5'>
            <h2>Video Styles</h2>
            <p className='text-sm text-gray-400 mb-1'>Select video style</p>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2'>
                {options?.map((option, index) => (
                    <div className='relative' key={index}
                        onClick={() => {
                            setSelectedStyle(option.name);
                            onHandleInputChange('videoStyle', option.name)
                        }}
                    >
                        <Image src={option.image}
                            alt={option.name}
                            width={500}
                            height={120}
                            className={`object-cover h-[90px]
                            lg:h-[130px] xl:h-[180px] rounded-lg p-1
                            hover:border border-gray-300 cursor-pointer
                            ${option.name == selectedStyle && 'border'}`}
                        />
                        <h2 className='absolute bottom-1 text-center w-full'>{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoStyle