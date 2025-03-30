import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("pokemon").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    imageUrl: v.string(),
    biomes: v.array(v.string()),
    categories: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("pokemon", args);
  },
});

export const updateTags = mutation({
  args: {
    id: v.id("pokemon"),
    biomes: v.array(v.string()),
    categories: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      biomes: args.biomes,
      categories: args.categories,
    });
  },
});