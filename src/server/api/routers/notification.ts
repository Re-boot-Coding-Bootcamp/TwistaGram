import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const notificationRouter = createTRPCRouter({
  getNotifications: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.notification.findMany({
      where: {
        forUserId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        post: {
          select: {
            id: true,
            content: true,
            image: true,
          },
        },
        fromUser: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }),
});
