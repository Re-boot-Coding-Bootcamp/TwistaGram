"use client";

import React, { useState } from "react";
import { Box, Input, Button, useTheme } from "@mui/material";
import { Avatar } from "../Avatar";

interface InlineReplyProps {
  onReplySubmit: (content: string) => void;
}

const InlineReply: React.FC<InlineReplyProps> = ({ onReplySubmit }) => {
  const theme = useTheme();
  const [replyText, setReplyText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReplySubmit(replyText.trim());
      setReplyText("");
      setIsActive(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleReplySubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
    setIsActive(e.target.value.trim() !== "");
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
          p: 3,
          [theme.breakpoints.down("sm")]: {
            maxWidth: "100vw",
          },
        }}
      >
        <Box display="flex" gap={2}>
          <Avatar size="medium" />
          <Input
            type="text"
            placeholder="Post your reply"
            value={replyText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ width: "100%", paddingBottom: 10 }}
          />
          <Button
            variant="contained"
            onClick={handleReplySubmit}
            disabled={!isActive}
            sx={{
              borderRadius: 30,
              width: 100,
              height: 40,
              fontSize: 15,
              bgcolor: theme.palette.primary.main,
            }}
          >
            Reply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { InlineReply };
