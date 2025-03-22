import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({

    args: {
        name: v.string(),
        email: v.string(),
        pictureURL: v.string(),
        
    },

    handler: async(ctx,args) => {
      //först kolla om users finns
// query for we will read the data from the database
//collect = fetch()
      const user = await ctx.db.query('users').filter((q)=> q.eq(q.field('email'),args.email)).collect();
    // we wamt fetch the first user
    //?.email if the email is not there
    if (!user[0]?.email){
    
        const result = await ctx.db.insert('users',{
            name:args.name,
            email:args.email,
            pictureURL:args?.pictureURL,
            credits:3
        })
        return result;
    }
       return user[0];
    }
})


/* import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // Check for existing user using first() instead of collect()
    const existingUser = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    // Only create new user if none exists
    if (!existingUser) {
      return await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3
      });
    }
    
    // Return existing user if found
    return existingUser;
  }
}); */