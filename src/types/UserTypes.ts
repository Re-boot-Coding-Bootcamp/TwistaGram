import { type User } from "@prisma/client";

export type PartialUser = Pick<
  User,
  "id" | "name" | "username" | "email" | "bio" | "image"
>;

export type UpdateUserInput = {
  name: string;
  username: string;
  bio?: string;
  image?: string;
};
