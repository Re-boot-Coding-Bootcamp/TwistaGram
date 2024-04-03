"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import type { SearchResult, SearchResultPost, SearchResultUser } from "~/types";
import { SearchType } from "~/constants";
import { PostPreviewCard, ProfilePreviewCard } from "..";
import Link from "next/link";
import theme from "~/theme";

interface SearchPageProps {
  query: string;
  result: SearchResult;
  isFetching: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  searchType: SearchType;
  setSearchType: Dispatch<SetStateAction<SearchType>>;
}

const SearchPage: React.FC<SearchPageProps> = ({
  result,
  isFetching,
  query,
  setQuery,
  searchType,
  setSearchType,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<SearchResultUser[]>([]);
  const [posts, setPosts] = useState<SearchResultPost[]>([]);

  useEffect(() => {
    if (result) {
      if (searchType === SearchType.User) {
        setUsers(result as unknown as SearchResultUser[]);
        setPosts([]);
      } else {
        setPosts(result as unknown as SearchResultPost[]);
        setUsers([]);
      }
      setIsLoading(false);
    }
  }, [searchType, result, isFetching]);

  const handleSearchTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchType(event.target.value as SearchType);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent="space-between"
        gap={isMobile ? 1 : 2}
      >
        <Input
          type="text"
          placeholder={`Search ${searchType}`}
          value={query}
          onChange={(e) => {
            setUsers([]);
            setPosts([]);
            setIsLoading(true);
            setQuery(e.target.value);
          }}
          sx={{ flexGrow: 1, width: isMobile ? "100%" : "auto" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Box id="search-type-container" display="flex">
          <FormControl>
            <RadioGroup
              name="search-type-radio"
              value={searchType}
              onChange={handleSearchTypeChange}
              row
            >
              <FormControlLabel
                value={SearchType.User}
                control={<Radio />}
                label="User"
              />
              <FormControlLabel
                value={SearchType.Post}
                control={<Radio />}
                label="Post"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>

      {isLoading && query && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          sx={{ mt: 2 }}
        >
          <CircularProgress color="inherit" size={24} />
          <Typography variant="body1" fontWeight="500" fontSize="1rem">
            Searching...
          </Typography>
        </Box>
      )}

      {!isLoading &&
        ((searchType === SearchType.User && users.length === 0) ||
          (searchType === SearchType.Post && posts.length === 0)) &&
        query && (
          <Typography variant="body2">
            No result for &quot;{query}&quot;
          </Typography>
        )}

      <Stack gap={1} py={1}>
        {searchType === SearchType.User &&
          users.map((user) => (
            <Link href={`/profile/${user.id}`} key={user.id}>
              <ProfilePreviewCard user={user} />
            </Link>
          ))}

        {searchType === SearchType.Post &&
          posts.map((post) => (
            <Link href={`/post/${post.id}`} key={post.id}>
              <PostPreviewCard post={post} isMobile={isMobile} />
            </Link>
          ))}
      </Stack>
    </Box>
  );
};

export { SearchPage };
