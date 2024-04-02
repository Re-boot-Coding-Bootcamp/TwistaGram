"use client";

import { Box, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import {
  BackButton,
  ErrorScreen,
  LoadingScreen,
  ViewComment,
  ViewPost,
} from "~/app/_components";
import { ReplyModal } from "~/app/_components/ReplyModal";
import { HomePageFeedContext } from "~/app/_context/HomePageFeedContext";
import { api } from "~/trpc/react";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const router = useRouter();
  const { softDeletePost } = useContext(HomePageFeedContext);

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

  const handleOnAfterDelete = () => {
    softDeletePost?.(post.id);
    router.push("/");
  };

  return (
    <>
      <BackButton />
      <ViewPost
        post={post}
        currentUser={user}
        onAfterDelete={handleOnAfterDelete}
      />
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
          <ViewComment
            key={comment.id}
            currentUser={user}
            comment={comment}
            onAfterDelete={refetchPost}
          />
        );
      })}
    </>
  );
}
