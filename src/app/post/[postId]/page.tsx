"use client";

import { Box, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  Avatar,
  BackButton,
  ErrorScreen,
  LoadingScreen,
  ViewComment,
  ViewPost,
} from "~/app/_components";
import { ReplyModal } from "~/app/_components/ReplyModal";
import { HomePageFeedContext } from "~/app/_context/HomePageFeedContext";
import theme from "~/theme";
import { api } from "~/trpc/react";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const router = useRouter();
  const { softDeletePost, softCommentOnPost } = useContext(HomePageFeedContext);

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
        onCommentIconClick={() => setReplyModalOpen(true)}
      />
      <Divider />
      <Box m={1}>
        <Box
          onClick={() => setReplyModalOpen(true)}
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            p: 1,
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.grey[100],
            },
          }}
        >
          <Avatar size="medium" src={user.image ?? undefined} />
          <Typography variant="subtitle1" color={theme.palette.text.disabled}>
            Enter your comment here...
          </Typography>
        </Box>
        {replyModalOpen && (
          <ReplyModal
            open={replyModalOpen}
            setOpen={setReplyModalOpen}
            userImage={user.image ?? undefined}
            handleReply={async (comment: string) => {
              const newComment = await addComment({
                postId: post.id,
                comment,
                postOwnerId: post.createdBy.id,
              });

              softCommentOnPost?.(newComment);

              void refetchPost();
            }}
          />
        )}
      </Box>
      <Divider />
      {post.comments.map((comment) => {
        return (
          <ViewComment
            key={comment.id}
            currentUser={user}
            comment={comment}
            postOwnerId={post.createdBy.id}
            onAfterDelete={refetchPost}
          />
        );
      })}
    </>
  );
}
