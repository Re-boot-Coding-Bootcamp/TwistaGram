"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  number: number;
  onCommentIcon?: () => void;
}

const CommentIcon = ({ onCommentIcon, number }: Props): JSX.Element => {
  const handleMessageBubble = () => {
    onCommentIcon?.();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Tooltip title="Reply" placement="bottom" arrow>
        <Button
          sx={{ fontSize: 16 }}
          onClick={handleMessageBubble}
          startIcon={
            <ChatBubbleOutlineIcon color="primary" sx={{ cursor: "pointer" }} />
          }
        >
          <Typography color="primary">{number}</Typography>
        </Button>
      </Tooltip>
    </Box>
  );
};

export { CommentIcon };
