"use client";

import { Box, Typography } from "@mui/material";
import { LoadingScreen, ProfilePageHeader } from "~/app/_components";
import { api } from "~/trpc/react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile({ params }: { params: { userId: string } }) {
  const { data } = useSession();
  const isCurrentUser = data?.user.id === params.userId;

  const router = useRouter();

  const { data: user, isFetching } = api.user.getUserById.useQuery(
    {
      userId: params.userId,
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isFetching) {
    return <LoadingScreen />;
  }

  if (!user) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="300px"
      >
        <Typography
          color="GrayText"
          variant="subtitle1"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <WarningAmberIcon color="inherit" />
          <>User not found</>
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <ProfilePageHeader
        isCurrentUser={isCurrentUser}
        user={user}
        onEditProfile={
          isCurrentUser ? () => router.push("/profile/edit") : undefined
        }
      />
    </>
  );
}
