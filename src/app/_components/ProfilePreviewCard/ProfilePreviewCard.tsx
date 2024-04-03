"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "..";
import type { SearchResultUser } from "~/types";
import theme from "~/theme";

interface ProfilePreviewCardProps {
  user: SearchResultUser;
}

const ProfilePreviewCard = ({ user }: ProfilePreviewCardProps): JSX.Element => {
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
        <Avatar size="medium" src={user.image ?? undefined} />
      </Box>
      <Box
        id="name-username-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
        }}
      >
        <Typography id="name" variant="subtitle2" maxWidth={"150px"} noWrap>
          {user.name}
        </Typography>
        <Typography
          id="username"
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            cursor: "pointer",
          }}
        >
          @{user.username}
        </Typography>
      </Box>
    </Box>
  );
};

export { ProfilePreviewCard };
