"use client";

import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CircularProgress from "@mui/material/CircularProgress";

interface User {
  id: string;
  name: string;
  username: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

interface SearchPageProps {
  onSearchUsers: (searchTerm: string) => Promise<User[]>;
  onSearchPosts: (searchTerm: string) => Promise<Post[]>;
}

const SearchPage: React.FC<SearchPageProps> = ({
  onSearchUsers,
  onSearchPosts,
}) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedResult, setSelectedResult] = useState<User | Post | null>(
    null
  );

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchTerm) {
        setUsers([]);
        setPosts([]);
        return;
      }
      setIsLoading(true);
      try {
        if (activeTab === 0) {
          const results = await onSearchUsers(searchTerm);
          setUsers(results);
          setPosts([]);
        } else {
          const results = await onSearchPosts(searchTerm);
          setPosts(results);
          setUsers([]);
        }
      } catch (error) {
        console.error("An error occurred during search", error);
      } finally {
        setIsLoading(false);
      }
    };

    void handleSearch();
  }, [searchTerm, activeTab, onSearchUsers, onSearchPosts]);

  const handleChangeTab = (newValue: number) => {
    setActiveTab(newValue);
    setSearchTerm("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
          marginTop: 10,
          height: "auto",
          alignItems: "center",
        },
        [theme.breakpoints.down("sm")]: {
          alignItems: "center",
          justifyContent: "flex-start",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowY: "auto",
          p: 3,
          [theme.breakpoints.down("sm")]: {
            maxWidth: "100vw",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: 3,
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => handleChangeTab(newValue as number)}
            sx={{
              minHeight: 40,
              ".MuiTab-root": {
                minHeight: 40,
                [theme.breakpoints.down("sm")]: {
                  fontSize: 11,
                },
              },
              ".MuiSvgIcon-root": {
                fontSize: 20,
                [theme.breakpoints.down("sm")]: {
                  fontSize: 18,
                },
              },
            }}
          >
            <Tab
              label="Users"
              icon={<PeopleAltIcon />}
              iconPosition="start"
              sx={{ p: 0, mr: 1 }}
            />
            <Tab
              label="Posts"
              icon={<FindInPageIcon />}
              iconPosition="start"
              sx={{ p: 0 }}
            />
          </Tabs>
        </Box>
        <Input
          type="text"
          placeholder={`Search ${activeTab === 0 ? "user" : "post"}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", paddingBottom: 10 }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton
                disableRipple
                sx={{
                  p: 0,
                  mr: 1,
                  color: theme.palette.primary.main,
                  cursor: "default",
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />

        {isLoading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ pt: 2 }}
          >
            <CircularProgress sx={{ mr: 2 }} />
            Searching...
          </Box>
        )}

        {!isLoading && activeTab === 0 && users.length === 0 && searchTerm && (
          <Typography sx={{ mt: 2, fontWeight: "500" }}>
            No result for &quot;{searchTerm}&quot;
          </Typography>
        )}

        {!isLoading && activeTab === 1 && posts.length === 0 && searchTerm && (
          <Typography sx={{ mt: 2, fontWeight: "500" }}>
            No result for &quot;{searchTerm}&quot;
          </Typography>
        )}

        <ul>
          {activeTab === 0 &&
            users.map((user) => (
              <li
                key={user.id}
                style={{
                  listStyle: "none",
                  padding: 10,
                  cursor: "pointer",
                  borderRadius: 10,
                  backgroundColor:
                    selectedResult?.id === user.id
                      ? theme.palette.grey[100]
                      : "transparent",
                }}
                onClick={() => setSelectedResult(user)}
              >
                <Box>{user.name}</Box>
                <Box sx={{ color: theme.palette.primary.dark, opacity: "60%" }}>
                  @{user.username}
                </Box>
              </li>
            ))}

          {activeTab === 1 &&
            posts.map((post) => (
              <li
                key={post.id}
                style={{
                  listStyle: "none",
                  padding: 10,
                  cursor: "pointer",
                  borderRadius: 10,
                  backgroundColor:
                    selectedResult?.id === post.id
                      ? theme.palette.grey[100]
                      : "transparent",
                }}
                onClick={() => setSelectedResult(post)}
              >
                <Box>{post.title}</Box>
                <Box sx={{ color: theme.palette.primary.dark, opacity: "60%" }}>
                  {post.content}
                </Box>
              </li>
            ))}
        </ul>
      </Box>
    </Box>
  );
};

export { SearchPage };
