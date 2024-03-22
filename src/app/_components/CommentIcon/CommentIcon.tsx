"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
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
    <>
      <Tooltip title="Reply" placement="bottom" arrow>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <ChatBubbleOutlineIcon
            color="primary"
            onClick={handleMessageBubble}
          ></ChatBubbleOutlineIcon>
          <Typography color="primary">{number}</Typography>
        </Box>
      </Tooltip>
    </>
  );
};

export { CommentIcon };
