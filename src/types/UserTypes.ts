import { type User } from "@prisma/client";

export type PartialUser = Pick<
  User,
  "id" | "name" | "username" | "email" | "bio"
>;

export type UpdateUserInput = {
  name: string;
  username: string;
  bio?: string;
};
