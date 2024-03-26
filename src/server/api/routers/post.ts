import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllPosts: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
  getPegenatedPosts: protectedProcedure
    .input(z.object({ take: z.number().min(0), skip: z.number().min(0) }))
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findMany({
        take: input.take,
        skip: input.skip,
        orderBy: { createdAt: "desc" },
      });
    }),
  createPost: protectedProcedure
    .input(z.object({ content: z.string(), image: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          content: input.content,
          image: input.image,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  likePost: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.like.create({
        data: {
          post: { connect: { id: input.postId } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  commentOnPost: protectedProcedure
    .input(z.object({ postId: z.string(), comment: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.comment.create({
        data: {
          comment: input.comment,
          post: { connect: { id: input.postId } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  deletePost: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.postId },
        select: { id: true, createdBy: true },
      });
      if (!post) {
        throw new Error("Post not found");
      }
      if (post.createdBy.id !== ctx.session.user.id) {
        throw new Error("You don't have permission to delete this post");
      }
      return ctx.db.post.delete({ where: { id: input.postId } });
    }),
});
