"use client";

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  onCommentIcon: () => void;
  number: number;
}

const CommentIcon = ({ onCommentIcon, number }: Props): JSX.Element => {
  const handleMessageBubble = () => {
    onCommentIcon();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Tooltip title="Reply" placement="bottom" arrow>
        <IconButton onClick={handleMessageBubble}>
          <ChatBubbleOutlineIcon color="primary" sx={{ cursor: "pointer" }} />
        </IconButton>
      </Tooltip>
      <Typography color="primary">{number}</Typography>
    </Box>
  );
};

export { CommentIcon };
