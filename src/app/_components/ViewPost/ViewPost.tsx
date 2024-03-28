"use client";

import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import {
  Box,
  Card,
  Typography,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import { ImageContainer } from "../ImageContainer";
import { Avatar } from "../Avatar";
import type { User } from "@prisma/client";
import type { HomePagePost } from "~/types";
import { CommentIcon, LikeIcon, MoreActionsMenu } from "..";
import { useRouter } from "next/navigation";

interface ViewPostProps {
  currentUser: User;
  post: HomePagePost;
  containerHover?: boolean;
}

const ViewPost: React.FC<ViewPostProps> = ({
  currentUser,
  post,
  containerHover,
}) => {
  const theme = useTheme();
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(post.content);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };
  const saveChanges = () => {
    setEditMode(false);
  };

  const isCurrentUserPost = currentUser.id === post.createdById;

  const navigateToUserProfile = () => {
    router.push(`/profile/${post.createdBy.id}`);
  };

  const navigateToPostDetails = () => {
    router.push(`/post/${post.id}`);
  };

  return (
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
          backgroundColor: containerHover ? theme.palette.action.hover : "none",
        },
      }}
      elevation={0}
      onClick={containerHover ? navigateToPostDetails : undefined}
    >
      <Box id="profile-container" sx={{ display: "flex", width: "100%" }}>
        <Box id="avatar" mr={2}>
          <Avatar
            size="large"
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
              >
                {post.createdBy.name}
              </Typography>
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
            <Box sx={{ flexGrow: 1 }} />
            {isCurrentUserPost && (
              <Box onClick={(e) => e.stopPropagation()}>
                <MoreActionsMenu
                  onDelete={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  onEdit={navigateToPostDetails}
                />
              </Box>
            )}
          </Box>
          <Box>
            {editMode ? (
              <>
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  value={editedText}
                  onChange={handleTextChange}
                  onClick={(e) => e.stopPropagation()}
                  margin="normal"
                />
                <input
                  type="file"
                  onClick={(e) => {
                    e.stopPropagation();
                    // onChooseFile();
                  }}
                />
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    saveChanges();
                  }}
                  color="primary"
                >
                  Save Changes
                </Button>
              </>
            ) : (
              <>
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
                {post.image && <ImageContainer imageUrl={post.image} />}
              </>
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
            <LikeIcon user={currentUser} post={post} />
            <CommentIcon
              number={post.comments.length}
              onCommentIcon={navigateToPostDetails}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export { ViewPost };
