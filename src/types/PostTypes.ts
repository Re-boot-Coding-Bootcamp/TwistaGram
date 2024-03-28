import type { RouterOutputs } from "~/trpc/shared";

export type PostContent =
  | { content?: string; image: File }
  | { content: string; image?: File };

export type HomePagePost = RouterOutputs["post"]["getPosts"]["items"][0];
