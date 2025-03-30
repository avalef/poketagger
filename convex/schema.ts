import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  pokemon: defineTable({
    name: v.string(),
    imageUrl: v.string(),
    biomes: v.array(v.string()),
    categories: v.array(v.string()),
  }),
});