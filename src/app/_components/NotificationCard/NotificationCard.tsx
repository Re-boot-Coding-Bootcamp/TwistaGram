"use client";

import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Avatar } from "..";
import type { NotificationItem } from "~/types";
import theme from "~/theme";
import { formatDistanceToNowStrict } from "date-fns";

interface NotificationCardProps {
  notification: NotificationItem;
}

const NotificationCard = ({
  notification,
}: NotificationCardProps): JSX.Element => {
  const notificationText = useMemo(() => {
    if (notification.type === "LIKE") {
      return " liked your post. ";
    }
    if (notification.type === "COMMENT") {
      return " commented on your post. ";
    }
  }, [notification]);

  if (!notificationText) {
    return <></>;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        p: 1,
        width: "100%",
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Box id="avatar">
        <Avatar size="medium" src={notification.user.image ?? undefined} />
      </Box>
      <Box
        id="notification-text-container"
        sx={{
          maxWidth: "100%",
        }}
      >
        <Typography component="span" variant="subtitle2">
          {notification.user.name}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          {notificationText}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{
            color: theme.palette.text.disabled,
          }}
        >
          {formatDistanceToNowStrict(notification.createdAt, {
            addSuffix: true,
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export { NotificationCard };
