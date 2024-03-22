"use client";

import { Box } from "@mui/material";
import { Avatar, Button } from "..";
import { useState } from "react";
import UploadProfilePhotoModal from "./UploadProfilePhotoModal";
import { useUploadThing } from "~/utils/uploadthing";
import { useSnackbar } from "notistack";
import { api } from "~/trpc/react";
import { type ClientUploadedFileData } from "uploadthing/types";

interface Props {
  currentProfileUrl?: string;
}

const ChangeProfilePhoto = ({ currentProfileUrl }: Props) => {
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(currentProfileUrl);

  const { mutate } = api.user.updateUserProfilePicture.useMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onError = () => {
    enqueueSnackbar("Failed to upload profile picture, please try again.", {
      variant: "error",
    });
  };

  /**
   * Callback for when the file upload is complete to file storage
   */
  const onUploadComplete = (files: ClientUploadedFileData<null>[]) => {
    if (files?.[0]) {
      const newProfilePictureUrl = files[0].url;
      // Update the db with the new profile picture url for the current user
      mutate(
        { url: newProfilePictureUrl },
        {
          onSuccess: () => {
            setProfilePictureUrl(newProfilePictureUrl);
            enqueueSnackbar("Profile picture updated.", {
              variant: "success",
            });
          },
          onError: onError,
        }
      );
    }
  };

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: onUploadComplete,
    onUploadError: onError,
  });

  const handleFileUpload = async (file: File) => {
    await startUpload([file]);
    setIsFileUploadModalOpen(false);
  };

  const handleClose = () => {
    setIsFileUploadModalOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
      <Avatar size="xlarge" src={profilePictureUrl} />

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
