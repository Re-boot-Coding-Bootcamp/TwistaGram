"use client";

import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

interface User {
  id: string;
  name: string;
  username: string;
}

interface NewMessageModalProps {
  onSearch: (searchTerm: string) => Promise<User[]>;
}

const NewMessageModal: React.FC<NewMessageModalProps> = ({ onSearch }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);

  useEffect(() => {
    const searchUsers = async () => {
      if (!searchTerm) {
        setUsers([]);
        setSearchInitiated(false);
        return;
      }
      setIsLoading(true);
      try {
        const results = await onSearch(searchTerm);
        setUsers(results);
        setSearchInitiated(true);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    searchUsers().catch((error) =>
      console.error("An error occurred during search", error)
    );
  }, [searchTerm, onSearch]);

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

        [theme.breakpoints.up("sm")]: {
          mt: 10,
          alignItems: "start",
          justifyContent: "center",
        },

        [theme.breakpoints.down("sm")]: {
          ".MuiBox-root": {
            width: "100%",
            height: "100%",
            margin: 0,
            maxWidth: "none",
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 20,
          borderRadius: 3,
          p: 3,
        }}
      >
        <Input
          type="text"
          placeholder="Search people"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", paddingBottom: 10 }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton
                sx={{ p: 0, mr: 1, color: theme.palette.primary.main }}
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

        {!isLoading && users.length === 0 && searchInitiated && (
          <Typography sx={{ mt: 2, fontWeight: "500" }}>
            No result for &quot;{searchTerm}&quot;
          </Typography>
        )}
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                listStyle: "none",
                padding: 10,
              }}
            >
              <Box>{user.name} </Box>
              <Box sx={{ color: theme.palette.primary.dark, opacity: "60%" }}>
                @{user.username}
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export { NewMessageModal };
