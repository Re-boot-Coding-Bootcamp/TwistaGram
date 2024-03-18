"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  useTheme,
  IconButton,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import { Avatar } from "../Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

interface ViewPostProps {
  username: string;
  currentUserId: string;
  name: string;
  postedTime: string;
  textContent: string;
  imageUrl: string;
  onMore: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({
  username,
  currentUserId,
  name,
  postedTime,
  textContent,
  imageUrl,
  onMore,
}) => {
  const theme = useTheme();

  const [openImageModal, setOpenImageModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(textContent);
  const [editedImage, setEditedImage] = useState(imageUrl);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenImageModal = () => setOpenImageModal(true);
  const handleCloseImageModal = () => setOpenImageModal(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const toggleEditMode = () => setEditMode(!editMode);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setEditedImage(newImageUrl);
    }
  };

  const handleEdit = () => {
    setEditMode(false);
  };

  const handleDelete = () => {
    handleCloseDeleteModal();
  };

  const handleProfileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const isCurrentUserPost = username === currentUserId;

  const imageModalStyle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxHeight: "70vh",
    overflowY: "none",
    p: 1,
    outline: "none",
    borderRadius: 2,
  };

  const deleteModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
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
          sx={{ display: "flex", mb: 2, cursor: "pointer", width: "100%" }}
          onClick={handleProfileClick}
        >
          <Box id="avatar" marginRight={2}>
            <Avatar size="large" />
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
              <Typography
                id="name"
                sx={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: theme.palette.text.primary,
                  mr: 0.5,
                }}
              >
                {name}
              </Typography>
              <Typography
                id="username"
                sx={{
                  mt: 0.3,
                  mr: 0.5,
                  fontSize: 14,
                  color: theme.palette.text.secondary,
                }}
              >
                @{username}
              </Typography>
              <Typography
                id="posted-time"
                sx={{
                  mt: 0.3,
                  fontSize: 14,
                  color: theme.palette.text.disabled,
                }}
              >
                · {postedTime}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {isCurrentUserPost && (
                <Tooltip title="More" placement="top">
                  <IconButton
                    id="more-dots-button"
                    onClick={onMore}
                    sx={{ p: 0 }}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>

            {editMode ? (
              <>
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  value={editedText}
                  onChange={handleTextChange}
                  margin="normal"
                />
                <input type="file" onChange={handleImageChange} />
                <Button onClick={handleEdit} color="primary">
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
                  }}
                >
                  {textContent}
                </Typography>
                {imageUrl && (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 188, sm: 250, md: 300 },
                      mb: 2,
                      borderRadius: 4,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenImageModal}
                  >
                    <Image
                      src={imageUrl}
                      alt="Uploaded image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                )}
              </>
            )}

            {isCurrentUserPost && !editMode && (
              <Box
                id="edit-delete-buttons"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: 1,
                }}
              >
                <Tooltip title="Edit">
                  <IconButton
                    onClick={toggleEditMode}
                    disableRipple
                    sx={{ color: theme.palette.primary.main }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    onClick={handleOpenDeleteModal}
                    disableRipple
                    sx={{ color: theme.palette.error.main }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Box>
        </Box>
      </Card>

      <Modal
        open={openImageModal}
        onClose={handleCloseImageModal}
        aria-labelledby="post-image-modal"
        aria-describedby="enlarged-image-from-post"
      >
        <Box sx={imageModalStyle}>
          <Image
            src={editMode ? editedImage : imageUrl}
            alt="Enlarged uploaded image"
            layout="responsive"
            width={500}
            height={500}
            objectFit="contain"
          />
        </Box>
      </Modal>

      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="delete-confirmation-modal"
        aria-describedby="delete-confirmation-description"
      >
        <Box sx={deleteModalStyle}>
          <Typography
            id="delete-confirmation-modal"
            variant="h6"
            component="h2"
          >
            Are you sure?
          </Typography>
          <Typography id="delete-confirmation-description" sx={{ mt: 2 }}>
            This process cannot be undone.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button sx={{ mr: 1 }} onClick={handleCloseDeleteModal}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export { ViewPost };