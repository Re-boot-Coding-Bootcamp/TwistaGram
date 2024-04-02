"use client";

import { api } from "~/trpc/react";
import { LoadingScreen } from "../_components";

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
          <div
            key={notification.id}
          >{`Type: ${notification.type} By: ${notification.user.name} About: ${notification.referenceId}`}</div>
        );
      })}
    </>
  );
}
