import { z } from "zod";
import { SearchType } from "~/constants";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const searchRouter = createTRPCRouter({
  search: protectedProcedure
    .input(
      z.object({
        type: z.nativeEnum(SearchType),
        query: z.string().toLowerCase(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { type, query } = input;
      if (type === SearchType.User) {
        return ctx.db.user.findMany({
          where: {
            OR: [
              {
                name: {
                  contains: query,
                },
              },
              {
                username: {
                  contains: query,
                },
              },
            ],
          },
          select: {
            id: true,
            name: true,
            image: true,
            username: true,
          },
        });
      }
      if (type === SearchType.Post) {
        return ctx.db.post.findMany({
          where: {
            content: {
              contains: query,
            },
          },
          select: {
            id: true,
            content: true,
            image: true,
            createdAt: true,
            createdBy: {
              select: {
                id: true,
                name: true,
                image: true,
                username: true,
              },
            },
          },
        });
      }
    }),
});
