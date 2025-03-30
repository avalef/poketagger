import { Id } from "../convex/_generated/dataModel";

export interface Pokemon {
  _id: Id<"pokemon">;
  _creationTime: number;
  name: string;
  imageUrl: string;
  biomes: string[];
  categories: string[];
}

export interface Tag {
  text: string;
  type: 'biome' | 'category';
}