"use client";

import { Divider } from "@mui/material";
import { ErrorScreen, LoadingScreen, ViewPost } from "~/app/_components";
import { api } from "~/trpc/react";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const { data: user, isFetching: isFetchingUser } =
    api.user.getCurrentUser.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });

  const { data: post, isFetching: isFetchingPost } =
    api.post.getPostById.useQuery(
      {
        postId: params.postId,
      },
      {
        refetchOnWindowFocus: false,
      }
    );

  if (isFetchingPost || isFetchingUser) {
    return <LoadingScreen />;
  }

  if (!post || !user) {
    return <ErrorScreen />;
  }

  return (
    <>
      <ViewPost post={post} currentUser={user} />
      <Divider />
      Comments go here
    </>
  );
}
