"use client";

import { Box, Divider } from "@mui/material";
import {
  BackButton,
  ErrorScreen,
  LoadingScreen,
  ViewComment,
  ViewPost,
} from "~/app/_components";
import { ReplyModal } from "~/app/_components/ReplyModal";
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

  const {
    data: post,
    isFetching: isFetchingPost,
    refetch: refetchPost,
  } = api.post.getPostById.useQuery(
    {
      postId: params.postId,
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutateAsync: addComment } = api.post.commentOnPost.useMutation();

  if (isFetchingPost || isFetchingUser) {
    return <LoadingScreen />;
  }

  if (!post || !user) {
    return <ErrorScreen />;
  }

  return (
    <>
      <BackButton />
      <ViewPost post={post} currentUser={user} />
      <Divider />
      <Box m={1}>
        <ReplyModal
          userImage={user.image ?? undefined}
          handleReply={async (comment: string) => {
            await addComment({
              postId: post.id,
              comment,
            });
            void refetchPost();
          }}
        />
      </Box>
      <Divider />
      {post.comments.map((comment) => {
        return (
          <ViewComment key={comment.id} currentUser={user} comment={comment} />
        );
      })}
    </>
  );
}
