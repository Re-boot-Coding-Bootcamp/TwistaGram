"use client";

import { Box, Divider } from "@mui/material";
import type { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import {
  CreateUpdateProfileForm,
  ChangeProfilePhoto,
  LoadingScreen,
} from "~/app/_components";
import theme from "~/theme";
import { api } from "~/trpc/react";
import type { UpdateUserInput } from "~/types";

const EditProfilePage = () => {
  const { data, isFetching } = api.user.getCurrentUser.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const { mutate } = api.user.updateCurrentUser.useMutation();

  const [localUser, setLocalUser] = useState<User>();
  const [errorProfilePicture, setErrorProfilePicture] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (data && data !== localUser) {
      setLocalUser(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isFetching || !localUser) {
    return <LoadingScreen />;
  }

  const updateUser = (updatedUser: UpdateUserInput) => {
    mutate(updatedUser, {
      onSuccess: () => router.push(`/profile/${localUser.id}`),
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
        <ChangeProfilePhoto
          currentProfileUrl={localUser.image ?? undefined}
          onUploadSuccess={(updatedUser: User) => {
            setLocalUser(updatedUser);
            setErrorProfilePicture(false);
          }}
        />
      </Box>
      <Divider />
      <Box my={4} mx={2}>
        <CreateUpdateProfileForm
          user={localUser}
          errorProfilePicture={errorProfilePicture}
          setErrorProfilePicture={setErrorProfilePicture}
          onCancel={() => router.push(`/profile/${localUser.id}`)}
          onSave={updateUser}
        />
      </Box>
    </Box>
  );
};

export default EditProfilePage;
