import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const notificationRouter = createTRPCRouter({
  getNotifications: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.notification.findMany({
      where: {
        userId: ctx.session.user.id,
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
    });
  }),
});
