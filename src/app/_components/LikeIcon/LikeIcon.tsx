"use client";

import { Box, Button, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { enqueueSnackbar } from "notistack";
import type { Like, User } from "@prisma/client";
import type { HomePagePost } from "~/types";

interface Props {
  user: User;
  post: HomePagePost;
  onAfterLike?: (like: Like, isLiked: boolean) => void;
}

const LikeIcon = ({ user, post, onAfterLike }: Props): JSX.Element => {
  const { mutateAsync: mutateLike } = api.post.likePost.useMutation();
  const { mutateAsync: mutateUnlike } = api.post.unlikePost.useMutation();

  const [likeObject, setLikeObject] = useState(
    post.likes.find((like) => like?.userId === user.id)
  );
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const isLikedByMe = !!likeObject;

  const handelLike = async () => {
    if (likeObject) {
      try {
        setLikesCount((prev) => prev - 1);
        const unlikeResult = await mutateUnlike({
          likeId: likeObject.id,
          postOwnerId: post.createdBy.id,
        });
        onAfterLike?.(unlikeResult, false);
        setLikeObject(undefined);
      } catch (error) {
        enqueueSnackbar("Failed to like post, please try again.", {
          variant: "error",
        });
      }
    } else {
      try {
        setLikesCount((prev) => prev + 1);
        const newLikeObject = await mutateLike({
          postId: post.id,
          postOwnerId: post.createdBy.id,
        });
        onAfterLike?.(newLikeObject, true);
        setLikeObject(newLikeObject);
      } catch (error) {
        enqueueSnackbar("Failed to like post, please try again.", {
          variant: "error",
        });
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Tooltip title={isLikedByMe ? "Unlike" : "Like"} placement="bottom" arrow>
        <Button
          sx={{ fontSize: 16 }}
          color="secondary"
          aria-label="delete"
          onClick={handelLike}
          startIcon={
            isLikedByMe ? (
              <FavoriteIcon fontSize="inherit" />
            ) : (
              <FavoriteBorderIcon fontSize="inherit" />
            )
          }
        >
          <Typography fontSize="inherit" color="secondary">
            {likesCount}
          </Typography>
        </Button>
      </Tooltip>
    </Box>
  );
};

export { LikeIcon };
