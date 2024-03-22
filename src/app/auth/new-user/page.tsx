"use client";

import { Box, CircularProgress, Divider } from "@mui/material";
import React from "react";
import { CreateUpdateProfileForm, ChangeProfilePhoto } from "~/app/_components";
import theme from "~/theme";
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
      <Box
        sx={{
          background: `linear-gradient(to top, #fff, #fff 50%, ${theme.palette.primary.main} 51%, ${theme.palette.primary.main})`,
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
          onCancel={() => {
            //
          }}
          onSave={updateUser}
        />
      </Box>
    </Box>
  );
};

export default NewUser;
