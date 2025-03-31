import React, { useEffect, useState } from 'react';
import { Composition, getInputProps } from 'remotion';
import { MyComposition } from './Composition';
import RemotionComposition from './../app/_components/RemotionComposition';

const videoData = {
    audioUrl: '',
    captionJson: [
        {
            confidence: 0.9160156,
            end: 0.48,
            start: 0.08,
            word: "ten",
        },
        {
            confidence: 1,
            end: 0.71999997,
            start: 0.48,
            word: "year",
        },
        {
            confidence: 0.99902344,
            end: 0.88,
            start: 0.71999997,
            word: "old",
        },
        {
            confidence: 0.9892578,
            end: 1.28,
            start: 0.88,
            word: "alex",
        },
        {
            confidence: 0.9970703,
            end: 1.5999999,
            start: 1.28,
            word: "loved",
        },
        {
            confidence: 0.94677734,
            end: 2.32,
            start: 1.5999999,
            word: "cars",
        },
        {
            confidence: 0.99902344,
            end: 2.56,
            start: 2.32,
            word: "especially",
        },
        {
            confidence: 0.9975586,
            end: 2.96,
            start: 2.56,
            word: "rolls",
        },
        {
            confidence: 0.9793294,
            end: 3.6799998,
            start: 2.96,
            word: "royces",
        },
        { confidence: 1, end: 4, start: 3.84, word: "he" },
        {
            confidence: 0.9951172,
            end: 4.24,
            start: 4,
            word: "spent",
        },
        { confidence: 1, end: 4.48, start: 4.24, word: "hours" },
        {
            confidence: 1,
            end: 4.88,
            start: 4.48,
            word: "drawing",
        },
        {
            confidence: 0.74975586,
            end: 5.12,
            start: 4.88,
            word: "them",
        },


    ],
    images: ['https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg']
}

export const RemotionRoot = () => {
    // const [defaultData, setDefaultData] = useState(data);
    // const { videoData } = getInputProps(); // Get dynamic input props

    // useEffect(() => {
    //     if (videoData?.captionJson) {
    //         setDefaultData(videoData);
    //     }
    // }, [videoData]);

    return (
        <>
            <Composition
                id="youtubeShort"
                component={RemotionComposition}
                durationInFrames={900}
                fps={30}
                width={720}
                height={1280}
                defaultProps={{
                    videoData: videoData
                }}
            />
        </>
    );
};