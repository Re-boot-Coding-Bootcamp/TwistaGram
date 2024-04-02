"use client";

import { api } from "~/trpc/react";
import { Button, ErrorScreen, LoadingScreen, ViewPost } from "./_components";
import { Fragment, useContext } from "react";
import { Divider } from "@mui/material";
import { HomePageFeedContext } from "./_context/HomePageFeedContext";

export default function Home() {
  const { data: user, isFetching: isFetchingUser } =
    api.user.getCurrentUser.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });

  const {
    posts,
    isFetching,
    hasMore,
    fetchNextPage,
    softDeletePost,
    softLikeUnlikePost,
  } = useContext(HomePageFeedContext);

  if (isFetching || isFetchingUser) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <ErrorScreen />;
  }

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
            />
            <Divider />
          </Fragment>
        );
      })}

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
