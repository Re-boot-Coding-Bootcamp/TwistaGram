export type PostContent =
  | { content?: string; image: File }
  | { content: string; image?: File };
