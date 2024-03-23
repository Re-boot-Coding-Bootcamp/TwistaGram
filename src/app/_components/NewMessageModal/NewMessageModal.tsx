"use client";

import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

interface User {
  id: string;
  name: string;
  username: string;
}

interface NewMessageModalProps {
  onSearch: (searchTerm: string) => Promise<User[]>;
  onClose: () => void;
  onNext: () => void;
}

const NewMessageModal: React.FC<NewMessageModalProps> = ({
  onSearch,
  onClose,
  onNext,
}) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
          alignItems: "center",
          height: "auto",
        },

        [theme.breakpoints.down("sm")]: {
          alignItems: "flex-start",
          width: "100vw",
          height: "100vh",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 20,
          borderRadius: 3,
          p: 3,
          [theme.breakpoints.down("sm")]: {
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ p: 0 }} onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "500",
                color: theme.palette.grey[700],
              }}
            >
              New Message
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={onNext}
            disabled={!selectedUser}
            sx={{
              width: 70,
              borderRadius: 20,
              bgcolor: selectedUser
                ? theme.palette.primary.main
                : theme.palette.grey[300],
            }}
          >
            Next
          </Button>
        </Box>
        <Input
          type="text"
          placeholder="Search people"
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
                cursor: "pointer",
                borderRadius: 10,
                backgroundColor:
                  selectedUser?.id === user.id
                    ? theme.palette.grey[100]
                    : "transparent",
              }}
              onClick={() => setSelectedUser(user)}
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
