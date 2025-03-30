import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);