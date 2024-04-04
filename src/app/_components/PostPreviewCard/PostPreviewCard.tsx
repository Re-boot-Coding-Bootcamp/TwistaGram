"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { Avatar, ImageContainer } from "..";
import type { SearchResultPost } from "~/types";
import { formatDistanceToNowStrict } from "date-fns";
import theme from "~/theme";

interface PostPreviewCardProps {
  post: SearchResultPost;
  isMobile?: boolean;
}

const PostPreviewCard = ({
  post,
  isMobile,
}: PostPreviewCardProps): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
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
      <Box id="left-container" display="flex" alignItems="center" gap={1}>
        <Box id="avatar">
          <Avatar size="medium" src={post.createdBy.image ?? undefined} />
        </Box>
        <Box id="center-container">
          <Box id="head-line-container">
            <Box
              id="name-username-time"
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <Box
                id="name-username-container"
                display="flex"
                alignItems="center"
                gap={0.5}
              >
                <Typography
                  id="name"
                  variant="subtitle2"
                  maxWidth={"150px"}
                  noWrap
                >
                  {post.createdBy.name}
                </Typography>
                {!isMobile && (
                  <Typography
                    id="username"
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                    }}
                  >
                    @{post.createdBy.username}
                  </Typography>
                )}
              </Box>
              <Box
                mx={0.5}
                sx={{
                  color: theme.palette.text.disabled,
                }}
              >
                ·
              </Box>
              <Box id="timestamp-container">
                <Typography
                  id="posted-time"
                  variant="body2"
                  sx={{
                    color: theme.palette.text.disabled,
                  }}
                >
                  {formatDistanceToNowStrict(post.createdAt, {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            variant="caption"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {post.content}
          </Typography>
        </Box>
      </Box>

      {!isMobile && post.image && (
        <Box maxWidth="100px">
          <ImageContainer imageUrl={post.image} />
        </Box>
      )}
    </Box>
  );
};

export { PostPreviewCard };
