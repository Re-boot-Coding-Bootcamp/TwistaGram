import type { Comment, Like } from "@prisma/client";
import { sortBy, uniqBy } from "lodash";
import { createContext, useCallback, useEffect, useState } from "react";
import { api } from "~/trpc/react";
import type { HomePagePost } from "~/types";

interface Props {
  children: React.ReactNode;
}

interface HomePageFeedContextValue {
  posts: HomePagePost[];
  isFetching: boolean;
  hasMore: boolean;
  fetchNextPage?: () => void;
  softDeletePost?: (deletedPostId: string) => void;
  softLikeUnlikePost?: (like: Like, isLiked: boolean) => void;
  softCommentOnPost?: (comment: Comment) => void;
  refetchCurrentPage?: () => Promise<void>;
}

const defaultValues: HomePageFeedContextValue = {
  posts: [],
  isFetching: false,
  hasMore: false,
};

const HomePageFeedContext =
  createContext<HomePageFeedContextValue>(defaultValues);

const HomePageFeedContextProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<HomePagePost[]>([]);

  const { data, refetch, isFetching, fetchNextPage } =
    api.post.getPosts.useInfiniteQuery(
      {},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false,
      }
    );

  const handleFetchNextPage = useCallback(() => {
    void fetchNextPage();
    setPage((prev) => prev + 1);
  }, [fetchNextPage]);

  useEffect(() => {
    const newItems = data?.pages[page]?.items;

    if (newItems) {
      setPosts((prev) => {
        const combinedPosts = [...prev, ...newItems];
        const uniquePosts = uniqBy(combinedPosts, "id");
        const sortedPosts = sortBy(uniquePosts, "createdAt").reverse();
        return sortedPosts;
      });
    }
  }, [data, handleFetchNextPage, page]);

  const refetchCurrentPage = async () => {
    await refetch();
  };

  const softDeletePost = useCallback(
    (deletedPostId: string) => {
      setPosts((prev) => prev.filter((post) => deletedPostId !== post.id));
    },
    [setPosts]
  );

  const softLikeUnlikePost = useCallback((like: Like, isLiked: boolean) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === like.postId) {
          return {
            ...post,
            likes: isLiked
              ? [...post.likes, like]
              : post.likes.filter((l) => l.id !== like.id),
          };
        }
        return post;
      })
    );
  }, []);

  const softCommentOnPost = useCallback((comment: Comment) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === comment.postId) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      })
    );
  }, []);

  return (
    <HomePageFeedContext.Provider
      value={{
        posts,
        isFetching,
        hasMore: Boolean(data?.pages[page]?.nextCursor),
        fetchNextPage: handleFetchNextPage,
        refetchCurrentPage,
        softLikeUnlikePost,
        softDeletePost,
        softCommentOnPost,
      }}
    >
      {children}
    </HomePageFeedContext.Provider>
  );
};

export { HomePageFeedContext, HomePageFeedContextProvider };
