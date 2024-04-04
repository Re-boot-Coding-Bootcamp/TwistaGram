"use client";

import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { Avatar } from "../Avatar";
import type { Comment, User } from "@prisma/client";
import { DeletePostComment, MoreActionsMenu, ReplyModal } from "..";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { enqueueSnackbar } from "notistack";
import theme from "~/theme";

interface CommentWithUser extends Comment {
  user: {
    name: string | null;
    image: string | null;
    id: string;
    username: string | null;
  };
}

interface ViewCommentProps {
  currentUser: User;
  comment: CommentWithUser;
  postOwnerId: string;
  onAfterDelete?: () => void;
  onAfterEdit?: () => void;
}

const ViewComment: React.FC<ViewCommentProps> = ({
  currentUser,
  comment,
  postOwnerId,
  onAfterDelete,
  onAfterEdit,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();
  const [replyModalOpen, setReplyModalOpen] = useState(false);

  const [deleteCommentModalOpen, setDeleteCommentModalOpen] = useState(false);

  const { mutateAsync: deleteComment } = api.post.deleteComment.useMutation();
  const { mutateAsync: updateComment } = api.post.updateComment.useMutation();

  const isCurrentUserPost = currentUser.id === comment.userId;

  const navigateToUserProfile = () => {
    router.push(`/profile/${comment.userId}`);
  };

  const handleDeleteComment = async () => {
    try {
      await deleteComment({ commentId: comment.id, postOwnerId: postOwnerId });
      onAfterDelete?.();
    } catch (error) {
      enqueueSnackbar("Failed to delete comment", { variant: "error" });
    }
  };

  const handleEditComment = async (updatedComment: string) => {
    try {
      await updateComment({
        commentId: comment.id,
        comment: updatedComment,
      });

      onAfterEdit?.();
    } catch (error) {
      enqueueSnackbar("Failed to edit comment", { variant: "error" });
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
        }}
        elevation={0}
      >
        <Box id="profile-container" sx={{ display: "flex", width: "100%" }}>
          <Box id="avatar" mr={1}>
            <Avatar
              size="medium"
              onClick={navigateToUserProfile}
              style={{ cursor: "pointer" }}
              src={comment.user.image ?? undefined}
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
                  maxWidth={"150px"}
                  noWrap
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {comment.user.name}
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
                  @{comment.user.username}
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
                      {formatDistanceToNowStrict(comment.createdAt, {
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
                    onDelete={() => setDeleteCommentModalOpen(true)}
                    onEdit={() => setReplyModalOpen(true)}
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
                  {formatDistanceToNowStrict(comment.createdAt, {
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
                {comment.comment}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {replyModalOpen && (
        <ReplyModal
          existingComment={comment.comment}
          open={replyModalOpen}
          setOpen={setReplyModalOpen}
          userImage={currentUser.image ?? undefined}
          handleReply={handleEditComment}
        />
      )}

      {deleteCommentModalOpen && (
        <DeletePostComment
          type={"Comment"}
          open={deleteCommentModalOpen}
          setOpen={setDeleteCommentModalOpen}
          onDeleteClick={handleDeleteComment}
        />
      )}
    </>
  );
};

export { ViewComment };
