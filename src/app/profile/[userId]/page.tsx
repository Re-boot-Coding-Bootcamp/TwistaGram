"use client";

import { Box, Divider, Typography } from "@mui/material";
import {
  LoadingScreen,
  ProfilePageHeader,
  ReplyModal,
  ViewPost,
} from "~/app/_components";
import { api } from "~/trpc/react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { enqueueSnackbar } from "notistack";

export default function Profile({ params }: { params: { userId: string } }) {
  const { data } = useSession();
  const isCurrentUser = data?.user.id === params.userId;
  const [replyModalData, setReplyModalData] = useState({
    open: false,
    postId: "",
    postOwnerId: "",
  });

  const router = useRouter();

  const { data: user, isFetching } = api.user.getUserById.useQuery(
    {
      userId: params.userId,
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: userPosts, isFetching: isFetchingPosts } =
    api.post.getPostsForUserById.useQuery(
      {
        id: params.userId,
      },
      {
        refetchOnWindowFocus: false,
      }
    );

  const { mutateAsync: addComment } = api.post.commentOnPost.useMutation();

  const handleComment = async (comment: string) => {
    try {
      await addComment({
        postId: replyModalData.postId,
        comment,
        postOwnerId: replyModalData.postOwnerId,
      });

      router.push(`/post/${replyModalData.postId}`);
    } catch (error) {
      enqueueSnackbar("Failed to add comment", { variant: "error" });
    }
  };

  if (isFetching || isFetchingPosts) {
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

      {userPosts?.map((post) => {
        return (
          <Fragment key={post.id}>
            <ViewPost
              post={post}
              currentUser={user}
              containerHover={true}
              onCommentIconClick={() =>
                setReplyModalData({
                  open: true,
                  postId: post.id,
                  postOwnerId: post.createdById,
                })
              }
            />
            <Divider />
          </Fragment>
        );
      })}

      {replyModalData.open && (
        <ReplyModal
          open={replyModalData.open}
          setOpen={(open) => setReplyModalData({ ...replyModalData, open })}
          userImage={user.image ?? undefined}
          handleReply={handleComment}
        />
      )}
    </>
  );
}
