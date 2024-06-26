"use client";

import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { ImageContainer } from "../ImageContainer";
import { Avatar } from "../Avatar";
import type { Like, User } from "@prisma/client";
import type { HomePagePost } from "~/types";
import {
  CommentIcon,
  DeletePostComment,
  ImageViewer,
  LikeIcon,
  MoreActionsMenu,
} from "..";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { enqueueSnackbar } from "notistack";
import theme from "~/theme";

interface ViewPostProps {
  currentUser: User;
  post: HomePagePost;
  containerHover?: boolean;
  onAfterDelete?: (deletedPostId: string) => void;
  onAfterLike?: (like: Like, isLiked: boolean) => void;
  onCommentIconClick?: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({
  currentUser,
  post,
  containerHover,
  onAfterDelete,
  onAfterLike,
  onCommentIconClick,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { mutateAsync: deletePost } = api.post.deletePost.useMutation();

  const router = useRouter();
  const [deletePostModalOpen, setDeletePostModalOpen] = useState(false);

  const isCurrentUserPost = currentUser.id === post.createdById;

  const navigateToUserProfile = () => {
    router.push(`/profile/${post.createdBy.id}`);
  };

  const navigateToPostDetails = () => {
    router.push(`/post/${post.id}`);
  };

  const handleDeletePost = async () => {
    try {
      await deletePost({ postId: post.id });
      onAfterDelete?.(post.id);
    } catch (error) {
      enqueueSnackbar("Failed to delete post", { variant: "error" });
    }
  };

  return (
    <>
      <Card
        id="post-container"
        sx={{
          p: 2,
          width: "100%",
          maxWidth: "100%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: containerHover ? "pointer" : "default",
          "&:hover": {
            backgroundColor: containerHover
              ? theme.palette.action.hover
              : "none",
          },
        }}
        elevation={0}
        onClick={containerHover ? navigateToPostDetails : undefined}
      >
        <Box id="profile-container" sx={{ display: "flex", width: "100%" }}>
          <Box id="avatar" mr={isMobile ? 1 : 2}>
            <Avatar
              size={isMobile ? "medium" : "large"}
              onClick={navigateToUserProfile}
              style={{ cursor: "pointer" }}
              src={post.createdBy.image ?? undefined}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              id="name-username-time"
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <Box
                onClick={navigateToUserProfile}
                id="name-username-container"
                display="flex"
                alignItems="center"
                gap={0.5}
              >
                <Typography
                  id="name"
                  variant="subtitle1"
                  sx={{
                    cursor: "pointer",
                  }}
                  maxWidth={"150px"}
                  noWrap
                >
                  {post.createdBy.name}
                </Typography>
                <Typography
                  id="username"
                  variant="body2"
                  maxWidth={"120px"}
                  noWrap
                  sx={{
                    color: theme.palette.text.secondary,
                    cursor: "pointer",
                  }}
                >
                  @{post.createdBy.username}
                </Typography>
              </Box>
              {!isMobile && (
                <>
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
                </>
              )}
              <Box sx={{ flexGrow: 1 }} />
              {isCurrentUserPost && (
                <Box onClick={(e) => e.stopPropagation()}>
                  <MoreActionsMenu
                    onDelete={() => setDeletePostModalOpen(true)}
                  />
                </Box>
              )}
            </Box>
            {isMobile && (
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
            )}
            <Box>
              <Typography
                id="text-content"
                sx={{
                  my: 1,
                  color: theme.palette.text.primary,
                  maxWidth: "100%",
                }}
              >
                {post.content}
              </Typography>
              {post.image && (
                <Box my={1}>
                  <ImageViewer
                    imageUrl={post.image}
                    triggerElement={<ImageContainer imageUrl={post.image} />}
                  />
                </Box>
              )}
            </Box>
            <Box
              id="like-comment-container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                mt: 0,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <LikeIcon
                user={currentUser}
                post={post}
                onAfterLike={onAfterLike}
              />
              <CommentIcon
                number={post.comments.length}
                onCommentIcon={onCommentIconClick}
              />
            </Box>
          </Box>
        </Box>
      </Card>

      {deletePostModalOpen && (
        <DeletePostComment
          type={"Post"}
          open={deletePostModalOpen}
          setOpen={setDeletePostModalOpen}
          onDeleteClick={handleDeletePost}
        />
      )}
    </>
  );
};

export { ViewPost };
