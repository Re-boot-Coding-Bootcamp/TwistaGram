"use client";

import { api } from "~/trpc/react";
import {
  Button,
  ErrorScreen,
  LoadingScreen,
  ViewPost,
  ReplyModal,
} from "./_components";
import { Fragment, useContext, useState } from "react";
import { Divider } from "@mui/material";
import { HomePageFeedContext } from "./_context/HomePageFeedContext";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

export default function Home() {
  const router = useRouter();

  const { data: user, isFetching: isFetchingUser } =
    api.user.getCurrentUser.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });

  const { mutateAsync: addComment } = api.post.commentOnPost.useMutation();

  const [replyModalData, setReplyModalData] = useState({
    open: false,
    postId: "",
    postOwnerId: "",
  });

  const {
    posts,
    isFetching,
    hasMore,
    fetchNextPage,
    softDeletePost,
    softLikeUnlikePost,
    softCommentOnPost,
  } = useContext(HomePageFeedContext);

  if (isFetching || isFetchingUser) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <ErrorScreen />;
  }

  const handleComment = async (comment: string) => {
    try {
      const newComment = await addComment({
        postId: replyModalData.postId,
        comment,
        postOwnerId: replyModalData.postOwnerId,
      });

      softCommentOnPost?.(newComment);

      router.push(`/post/${replyModalData.postId}`);
    } catch (error) {
      enqueueSnackbar("Failed to add comment", { variant: "error" });
    }
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <Fragment key={post.id}>
            <ViewPost
              post={post}
              currentUser={user}
              containerHover={true}
              onAfterDelete={softDeletePost}
              onAfterLike={softLikeUnlikePost}
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

      {hasMore && (
        <Button
          text="Show more"
          variant="text"
          color="inherit"
          onClick={fetchNextPage}
        />
      )}
    </>
  );
}
