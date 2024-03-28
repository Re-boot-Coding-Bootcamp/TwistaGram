"use client";

import { api } from "~/trpc/react";
import { Button, ErrorScreen, LoadingScreen, ViewPost } from "./_components";
import { Fragment, useCallback, useEffect, useState } from "react";
import type { HomePagePost } from "~/types";
import { Divider } from "@mui/material";
import { uniqBy } from "lodash";

export default function Home() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<HomePagePost[]>([]);

  const { data, isFetching, fetchNextPage } =
    api.post.getPosts.useInfiniteQuery(
      {},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false,
      }
    );

  const { data: user, isFetching: isFetchingUser } =
    api.user.getCurrentUser.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });

  const handleFetchNextPage = useCallback(() => {
    void fetchNextPage();
    setPage((prev) => prev + 1);
  }, [fetchNextPage]);

  useEffect(() => {
    const newItems = data?.pages[page]?.items;

    if (newItems) {
      setPosts((prev) => {
        const combinedPosts = [...prev, ...newItems];
        return uniqBy(combinedPosts, "id");
      });
    }
  }, [data, handleFetchNextPage, page]);

  if (isFetching || isFetchingUser) {
    return <LoadingScreen />;
  }

  if (!data || !user) {
    return <ErrorScreen />;
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <Fragment key={post.id}>
            <ViewPost post={post} currentUser={user} containerHover={true} />
            <Divider />
          </Fragment>
        );
      })}

      {data?.pages[page]?.nextCursor && (
        <Button
          text="Show more"
          variant="text"
          color="inherit"
          onClick={handleFetchNextPage}
        />
      )}
    </>
  );
}
