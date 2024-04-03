import type { RouterOutputs } from "~/trpc/shared";

export type SearchResult = RouterOutputs["search"]["search"];

export type SearchResultUser = {
  name: string | null;
  image: string | null;
  id: string;
  username: string | null;
};

export type SearchResultPost = {
  content: string | null;
  image: string | null;
  id: string;
  createdAt: Date;
  createdBy: {
    name: string | null;
    image: string | null;
    id: string;
    username: string | null;
  };
};
