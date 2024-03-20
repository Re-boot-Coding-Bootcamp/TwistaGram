"use client";

import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { CreateUpdateProfileForm, ChangeProfilePhoto } from "~/app/_components";

const NewUser = () => {
  return (
    <Box id="update-profile-page">
      <Typography variant="h6" fontWeight="400" textAlign="center" my={2}>
        Update Profile
      </Typography>
      <Box mb={4}>
        <Divider />
      </Box>
      <ChangeProfilePhoto
        onUpload={async (newFile: File) => {
          console.log(newFile.name);
        }}
        currentProfileUrl={"https://via.placeholder.com/150"}
      />
      <Box my={4}>
        <Divider />
      </Box>
      <CreateUpdateProfileForm
        onCancel={() => {
          //
        }}
        onSave={() => {
          //
        }}
      />
    </Box>
  );
};

export default NewUser;
