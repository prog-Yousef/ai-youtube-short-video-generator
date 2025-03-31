"use client"
import React, { useEffect } from 'react'
import { AbsoluteFill, Audio, Img, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

function RemotionComposition({ videoData }) {
    const captions = videoData?.captionJson;
    const { fps } = useVideoConfig();
    const imageList = videoData?.images;
    const frame = useCurrentFrame();
    useEffect(() => {
        videoData && getDurationFrame();
    }, [videoData])

    const getDurationFrame = () => {
        const totalDuration = captions[captions?.length - 1]?.end * fps;
        console.log(totalDuration);
        // setDurationInFrame(totalDuration)
        return totalDuration
    }

    const getCurrentCaption = () => {
        const currentTime = frame / 30;
        const currentCaption = captions?.find((item) => currentTime >= item?.start && currentTime <= item?.end)
        return currentCaption ? currentCaption?.word : '';
    }
    return (
        <div>
            <AbsoluteFill>
                {imageList?.map((item, index) => {
                    const startTime = (index * getDurationFrame()) / imageList?.length
                    const duration = getDurationFrame();

                    const scale = (index) => interpolate(
                        frame,
                        [startTime, startTime + duration / 2, startTime + duration],
                        index % 2 == 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
                        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                    )
                    return (
                        <>
                            <Sequence key={index} from={startTime} durationInFrames={getDurationFrame()}>
                                <AbsoluteFill key={index}>
                                    <Img
                                        src={item}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: `scale(${scale(index)})`
                                        }}
                                    />
                                </AbsoluteFill>

                            </Sequence>
                        </>
                    )
                })}


            </AbsoluteFill>
            <AbsoluteFill
                style={{
                    color: 'white',
                    justifyContent: 'center',
                    bottom: 90,
                    height: 150,
                    top: undefined,
                    textAlign: 'center'
                }}
            >
                <h2
                    style={{ ...videoData?.caption?.style, fontSize: 70 }} // Changed the tailwindcss to style
                >{getCurrentCaption()}</h2>
            </AbsoluteFill>
            {videoData?.audioUrl && <Audio src={videoData?.audioUrl} />}


        </div>
    )
}

export default RemotionComposition