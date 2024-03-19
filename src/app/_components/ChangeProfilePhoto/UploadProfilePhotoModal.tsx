"use client";

import React from "react";
import { type SxProps, type Theme } from "@mui/material/styles";
import {
  Box,
  Modal,
  Typography,
  Button as MuiButton,
  Paper,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Avatar, Button, VisuallyHiddenInput } from "..";
import { type ChangeEvent, useEffect, useState } from "react";
import theme from "~/theme";
import { PictureExtensions } from "~/constants";

interface Props {
  open: boolean;
  onClose: () => void;
  onFileUpload: (file: File) => Promise<void>;
}

const UploadProfilePhotoModal = ({ open, onClose, onFileUpload }: Props) => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const firstFile = e.target.files[0];
      setFile(firstFile);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError(["Please select a file to upload."]);
      return;
    }

    const lastIndexOfDot = file.name.lastIndexOf(".");
    const extension = file.name.slice(lastIndexOfDot);

    if (!PictureExtensions.includes(extension)) {
      setError([
        "Invalid file type.",
        "Please select a valid image file.",
        "Accepted file types are:",
        `${PictureExtensions.join(", ")}.`,
      ]);
      return;
    }

    setIsLoading(true);
    await onFileUpload(file);
    setIsLoading(false);
    resetLocalState();
  };

  const handleCancel = () => {
    onClose();
    resetLocalState();
  };

  const resetLocalState = () => {
    setFile(undefined);
    setPreviewUrl(undefined);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="profile-photo-upload-modal-title"
      aria-describedby="profile-photo-upload-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        id="file-upload-modal-container"
        sx={fileUploadModalContainerStyles}
      >
        <Typography variant="subtitle1" fontWeight="500" fontSize="1.2rem">
          Upload a picture
        </Typography>

        <Divider />

        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          {error.length > 0 && (
            <Alert severity="warning" sx={{ width: 1, my: 1 }}>
              {error.map((message) => (
                <Box key={message}>{message}</Box>
              ))}
            </Alert>
          )}

          {isLoading ? (
            <>
              <CircularProgress />
              <Typography
                variant="body1"
                fontWeight="500"
                fontSize="1rem"
                sx={{
                  color: theme.palette.grey[400],
                }}
              >
                Uploading...
              </Typography>
            </>
          ) : (
            <>
              {previewUrl && <Avatar size="xlarge" src={previewUrl} />}

              <MuiButton
                component="label"
                role={undefined}
                variant="text"
                tabIndex={-1}
                disableRipple
                startIcon={<CloudUploadIcon />}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                Click here to upload
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleFileChange}
                  accept={PictureExtensions.join(",")}
                />
              </MuiButton>
            </>
          )}
        </Box>

        <Divider />

        <Box display="flex" gap={1}>
          <Button
            text="Cancel"
            disabled={isLoading}
            variant="outlined"
            onClick={handleCancel}
          />
          <Button
            text="Upload"
            disabled={!file || isLoading}
            onClick={handleFileUpload}
          />
        </Box>
      </Paper>
    </Modal>
  );
};

export default UploadProfilePhotoModal;

const fileUploadModalContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  padding: 2,
  width: 350,
};
