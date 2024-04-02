import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getPostById: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findUnique({
        where: { id: input.postId },
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              image: true,
              username: true,
            },
          },
          likes: true,
          comments: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                  username: true,
                },
              },
            },
          },
        },
      });
    }),
  getPosts: protectedProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input: { cursor } }) => {
      const limit = 25;
      const items = await ctx.db.post.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              image: true,
              username: true,
            },
          },
          likes: true,
          comments: true,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }
      return {
        items,
        nextCursor,
      };
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
    .input(z.object({ postId: z.string(), postOwnerId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const like = await ctx.db.like.create({
        data: {
          post: { connect: { id: input.postId } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });

      if (like) {
        await ctx.db.notification.create({
          data: {
            type: "LIKE",
            referenceId: input.postId,
            read: false,
            user: { connect: { id: input.postOwnerId } },
          },
        });
      }

      return like;
    }),
  unlikePost: protectedProcedure
    .input(z.object({ likeId: z.string(), postOwnerId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const likeObj = await ctx.db.like.delete({ where: { id: input.likeId } });

      if (likeObj) {
        await ctx.db.notification.deleteMany({
          where: {
            type: "LIKE",
            referenceId: likeObj.postId,
            userId: input.postOwnerId,
          },
        });
      }

      return likeObj;
    }),
  commentOnPost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
        comment: z.string(),
        postOwnerId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.create({
        data: {
          comment: input.comment,
          post: { connect: { id: input.postId } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });

      if (comment) {
        await ctx.db.notification.create({
          data: {
            type: "COMMENT",
            referenceId: input.postId,
            read: false,
            user: { connect: { id: input.postOwnerId } },
          },
        });
      }

      return comment;
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
      await ctx.db.like.deleteMany({ where: { postId: input.postId } });
      await ctx.db.comment.deleteMany({ where: { postId: input.postId } });
      return ctx.db.post.delete({ where: { id: input.postId } });
    }),
  deleteComment: protectedProcedure
    .input(z.object({ commentId: z.string(), postOwnerId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.findUnique({
        where: { id: input.commentId },
        select: { id: true, userId: true },
      });
      if (!comment) {
        throw new Error("Comment not found");
      }
      if (comment.userId !== ctx.session.user.id) {
        throw new Error("You don't have permission to delete this comment");
      }
      const deletedComment = await ctx.db.comment.delete({
        where: { id: input.commentId },
      });

      if (deletedComment) {
        await ctx.db.notification.deleteMany({
          where: {
            type: "COMMENT",
            referenceId: deletedComment.postId,
            userId: input.postOwnerId,
          },
        });
      }
    }),
});
