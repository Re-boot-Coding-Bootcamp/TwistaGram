"use client";

import { Box, CircularProgress, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { CreateUpdateProfileForm, ChangeProfilePhoto } from "~/app/_components";
import theme from "~/theme";
import { api } from "~/trpc/react";
import type { UpdateUserInput } from "~/types";

const EditProfilePage = () => {
  const { data, isFetching } = api.user.getCurrentUser.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const { mutate } = api.user.updateCurrentUser.useMutation();

  const [profilePictureUploaded, setProfilePictureUploaded] = useState(
    !!data?.image
  );

  const router = useRouter();

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
      onSuccess: () => router.push(`/profile/${data.id}`),
      onError: () => {
        enqueueSnackbar("Failed to update profile", { variant: "error" });
      },
    });
  };
  
  return (
    <Box id="update-profile-page">
      <Box
        sx={{
          background: `linear-gradient(to top, #fff, #fff 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main})`,
          pt: 4,
          pb: 2,
        }}
      >
        <ChangeProfilePhoto currentProfileUrl={data.image ?? undefined} />
      </Box>
      <Divider />
      <Box my={4} mx={2}>
        <CreateUpdateProfileForm
          user={data}
          profilePictureUploaded={profilePictureUploaded}
          setProfilePictureUploaded={setProfilePictureUploaded}
          onCancel={() => router.push(`/profile/${data.id}`)}
          onSave={updateUser}
        />
      </Box>
    </Box>
  );
};

export default EditProfilePage;
