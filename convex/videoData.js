import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateVideoData = mutation({
    args: {
        title: v.string(),
        topic: v.string(),
        script: v.string(),
        videoStyle: v.string(),
        caption: v.any(),
        voice: v.string(),
        uid: v.id('users'),
        createdBy: v.string(),
        credits: v.number()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert('videoData', {
            title: args.title,
            topic: args.topic,
            script: args.script,
            videoStyle: args.videoStyle,
            caption: args.caption,
            voice: args.voice,
            uid: args.uid,
            createdBy: args.createdBy,
            status: 'pending'
        })

        await ctx.db.patch(args.uid, {
            credits: (args?.credits) - 1
        })

        return result;
    }
})

export const UpdateVideoRecord = mutation({
    args: {
        recordId: v.id('videoData'),
        audioUrl: v.optional(v.string()),
        images: v.optional(v.any()),
        captionJson: v.optional(v.any()),

    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.recordId, {
            audioUrl: args.audioUrl,
            captionJson: args.captionJson,
            images: args.images,
            status: 'completed',

        });

        return result
    }
})

export const UpdateVideoDownloadUrl = mutation({
    args: {
        recordId: v.id('videoData'),

        downloadUrl: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.recordId, {
            downloadUrl: args.downloadUrl
        });

        return result
    }
})

export const GetUserVideos = query({
    args: {
        uid: v.id('users')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query('videoData')
            .filter(q => q.eq(q.field('uid'), args.uid))
            .order('desc')
            .take(10)


        return result;
    }
})

export const GetVideoById = query({
    args: {
        videoId: v.id('videoData')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.get(args.videoId);
        return result;
    }
})

export const GetLatestVideo = query({
    args: {

    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query('videoData')
            .order('desc')
            .take(10)


        return result;
    }
})