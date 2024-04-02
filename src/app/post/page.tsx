"use client";

import type { PostContent } from "~/types";
import { CreatePost, ErrorScreen, LoadingScreen } from "../_components";
import { Box } from "@mui/material";
import { api } from "~/trpc/react";
import { useUploadThing } from "~/utils/uploadthing";
import { enqueueSnackbar } from "notistack";
import { HomePageFeedContext } from "../_context/HomePageFeedContext";
import { useContext } from "react";

export default function Post() {
  const { refetchCurrentPage } = useContext(HomePageFeedContext);

  const { data: user, isFetching } = api.user.getCurrentUser.useQuery(
    undefined,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutateAsync } = api.post.createPost.useMutation();

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadError: () => {
      enqueueSnackbar("Failed to upload image, please try again.", {
        variant: "error",
      });
    },
  });

  if (isFetching) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <ErrorScreen />;
  }

  const handlePostSubmit = async (postContent: PostContent) => {
    let imageUrl = "";
    if (postContent.image) {
      const files = await startUpload([postContent.image]);
      if (files?.[0]) {
        imageUrl = files[0].url;
      }
    }

    try {
      await mutateAsync({
        content: postContent.content ?? "",
        image: imageUrl,
      });

      await refetchCurrentPage?.();

      enqueueSnackbar("Post created.", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Failed to create post, please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <Box m={2}>
        <CreatePost
          userImage={user.image ?? ""}
          onPostSubmit={handlePostSubmit}
        />
      </Box>
    </>
  );
}
