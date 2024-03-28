"use client";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { api } from "~/trpc/react";
import { enqueueSnackbar } from "notistack";
import type { User } from "@prisma/client";
import type { HomePagePost } from "~/types";

interface Props {
  user: User;
  post: HomePagePost;
}

const LikeIcon = ({ user, post }: Props): JSX.Element => {
  const { mutateAsync } = api.post.likePost.useMutation();

  const userLikedPost = post.likes
    .map((object) => object?.userId)
    .includes(user.id);
  console.log(userLikedPost);
  
  const handelLike = async () => {

    if (!userLikedPost) {
      try {
        await mutateAsync({ postId: post.id });
      } catch (error) {
        enqueueSnackbar("Failed to like post, please try again.", {
          variant: "error",
        });
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Tooltip title={userLikedPost ? "Unlike" : "Like"} placement="bottom" arrow>
        <IconButton color="error" aria-label="delete" onClick={handelLike}>
          {userLikedPost ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Tooltip>
      <Typography color="error">{post.likes.length}</Typography>
    </Box>
  );
};

export { LikeIcon };
