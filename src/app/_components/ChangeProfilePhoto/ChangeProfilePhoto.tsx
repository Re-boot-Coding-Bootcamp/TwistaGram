"use client";

import { Box } from "@mui/material";
import { Avatar, Button } from "..";
import { useState } from "react";
import UploadProfilePhotoModal from "./UploadProfilePhotoModal";

interface Props {
  onUpload: (file: File) => Promise<void>;
  currentProfileUrl: string;
}

const ChangeProfilePhoto = ({ onUpload, currentProfileUrl }: Props) => {
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);

  const handleFileUpload = async (file: File) => {
    await onUpload(file);
    setIsFileUploadModalOpen(false);
  };

  const handleClose = () => {
    setIsFileUploadModalOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
      <Avatar size="xlarge" src={currentProfileUrl} />

      <Button
        text="Change Profile Photo"
        variant="text"
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={() => setIsFileUploadModalOpen(true)}
      />

      <UploadProfilePhotoModal
        open={isFileUploadModalOpen}
        onClose={handleClose}
        onFileUpload={handleFileUpload}
      />
    </Box>
  );
};

export { ChangeProfilePhoto };
