import type { RouterOutputs } from "~/trpc/shared";

export type NotificationItem =
  RouterOutputs["notification"]["getNotifications"][number];
