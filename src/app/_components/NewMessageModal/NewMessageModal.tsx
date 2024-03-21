"use client";

import { Box, Input, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  username: string;
}

interface NewMessageModalProps {
  onSearch: (searchTerm: string) => Promise<User[]>;
}

const NewMessageModal: React.FC<NewMessageModalProps> = ({ onSearch }) => {
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
        console.error("Failed to search users:", error);
        // Optionally, update the UI to indicate an error occurred
      } finally {
        setIsLoading(false);
      }
    };

    searchUsers().catch((error) =>
      console.error("Error in searchUsers:", error)
    );
  }, [searchTerm, onSearch]);

  return (
    <Box
      className="modal"
      style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}
    >
      <Input
        type="text"
        placeholder="Search people"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />
      {isLoading && <Typography>Searching…</Typography>}
      {!isLoading && users.length === 0 && searchInitiated && (
        <Typography>No match found</Typography>
      )}
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              listStyle: "none",
              padding: 10,
              borderBottom: "1 solid #ccc",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export { NewMessageModal };
