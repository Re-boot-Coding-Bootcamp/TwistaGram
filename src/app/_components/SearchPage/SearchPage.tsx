"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
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
        alignItems="center"
        justifyContent="space-between"
        gap={2}
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
          sx={{ flexGrow: 1 }}
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
          <CircularProgress />
          Searching...
        </Box>
      )}

      {!isLoading &&
        ((searchType === SearchType.User && users.length === 0) ||
          (searchType === SearchType.Post && posts.length === 0)) &&
        query && (
          <Typography sx={{ mt: 2, fontWeight: "500" }}>
            No result for &quot;{query}&quot;
          </Typography>
        )}

      <List>
        {searchType === SearchType.User &&
          users.map((user) => <ListItem key={user.id}>{user.name}</ListItem>)}

        {searchType === SearchType.Post &&
          posts.map((post) => (
            <ListItem key={post.id}>{post.content}</ListItem>
          ))}
      </List>
    </Box>
  );
};

export { SearchPage };
