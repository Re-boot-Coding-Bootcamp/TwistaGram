"use client";

import { api } from "~/trpc/react";
import { LoadingScreen, NotificationCard } from "../_components";
import Link from "next/link";

export default function Notification() {
  const { data: notifications, isFetching } =
    api.notification.getNotifications.useQuery();

  if (isFetching) {
    return <LoadingScreen />;
  }

  return (
    <>
      {notifications?.map((notification) => {
        return (
          <Link
            key={notification.id}
            href={`/post/${notification.referenceId}`}
          >
            <NotificationCard notification={notification} />
          </Link>
        );
      })}
    </>
  );
}
