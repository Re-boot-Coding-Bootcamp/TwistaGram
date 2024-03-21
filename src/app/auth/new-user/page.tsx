"use client";

import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import React from "react";
import { CreateUpdateProfileForm, ChangeProfilePhoto } from "~/app/_components";
import { api } from "~/trpc/react";
import type { UpdateUserInput } from "~/types";

const NewUser = () => {
  const { data, isFetching } = api.user.getCurrentUser.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const { mutate } = api.user.updateCurrentUser.useMutation();

  if (isFetching || !data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="300px"
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  const updateUser = (updatedUser: UpdateUserInput) => {
    mutate(updatedUser, {
      onSuccess: () => {
        console.log("User updated");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

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
        currentProfileUrl={data.image ?? undefined}
      />
      <Box my={4}>
        <Divider />
      </Box>
      <CreateUpdateProfileForm
        user={data}
        onCancel={() => {
          //
        }}
        onSave={updateUser}
      />
    </Box>
  );
};

export default NewUser;
