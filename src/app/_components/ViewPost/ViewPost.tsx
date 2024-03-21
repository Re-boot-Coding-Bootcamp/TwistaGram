"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  useTheme,
  IconButton,
  TextField,
  Button,
  Tooltip,
} from "@mui/material";
import { ImageContainer } from "../ImageContainer";
import { Avatar } from "../Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ViewPostProps {
  username: string;
  currentUserId: string;
  name: string;
  postedTime: string;
  textContent: string;
  imageUrl: string;
  onMore: () => void;
  onProfile: () => void;
  onImage: () => void;
  onChooseFile: () => void;
  onDelete: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({
  username,
  currentUserId,
  name,
  postedTime,
  textContent,
  imageUrl,
  onProfile,
  onImage,
  onChooseFile,
  onDelete,
}) => {
  const theme = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(textContent);
  const [showOptions, setShowOptions] = useState(false);

  const toggleEditMode = () => setEditMode(!editMode);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const saveChanges = () => {
    setEditMode(false);
  };

  const isCurrentUserPost = username === currentUserId;

  const toggleMoreOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };

  return (
    <Box
      id="main-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Card
        id="contents-container"
        sx={{
          p: 2,
          minWidth: { xs: "100%", sm: 600, md: 800 },
          maxWidth: "100%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={0}
      >
        <Box
          id="profile-container"
          sx={{ display: "flex", mb: 2, width: "100%" }}
        >
          <Box id="avatar" mr={2}>
            <Avatar
              size="large"
              onClick={onProfile}
              style={{ cursor: "pointer" }}
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
              <Box onClick={onProfile}>
                <Typography
                  id="name"
                  sx={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: theme.palette.text.primary,
                    mr: 0.5,
                    cursor: "pointer",
                  }}
                >
                  {name}
                </Typography>
              </Box>
              <Box onClick={onProfile}>
                <Typography
                  id="username"
                  sx={{
                    mt: 0.3,
                    mr: 0.5,
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                    cursor: "pointer",
                  }}
                >
                  @{username}
                </Typography>
              </Box>
              <Box
                onClick={(e) => e.stopPropagation()}
                sx={{ cursor: "default" }}
              >
                <Typography
                  id="posted-time"
                  sx={{
                    mt: 0.3,
                    fontSize: 14,
                    color: theme.palette.text.disabled,
                  }}
                >
                  ·{postedTime}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              {isCurrentUserPost && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {showOptions && (
                    <Box sx={{ display: "flex", mr: 2, gap: 2 }}>
                      <Tooltip title="Edit" placement="top">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleEditMode();
                          }}
                          disableRipple
                          sx={{ p: 0, color: theme.palette.primary.main }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                          }}
                          disableRipple
                          sx={{ p: 0, color: theme.palette.error.main }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Tooltip title="More" placement="top">
                    <IconButton onClick={toggleMoreOptions} sx={{ p: 0 }}>
                      <MoreHorizIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
            <Box onClick={(e) => e.stopPropagation()}>
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
                      onChooseFile();
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
                      mt: 1,
                      mb: 2,
                      color: theme.palette.text.primary,
                      maxWidth: "100%",
                      cursor: "default",
                    }}
                  >
                    {textContent}
                  </Typography>
                  {imageUrl && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        maxHeight: { xs: 500, sm: 600, md: 700 },
                        overflow: "hidden",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onImage();
                      }}
                    >
                      <ImageContainer
                        imageUrl={imageUrl}
                        onCloseImage={onImage}
                      />
                    </Box>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export { ViewPost };
