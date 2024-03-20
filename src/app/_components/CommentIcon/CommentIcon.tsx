"use client";

import React from "react";
import { Box } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { blue } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  onCommentIcon: () => void;
}

const CommentIcon = ({ onCommentIcon }: Props): JSX.Element => {
  const handleMessageBubble = () => {
    onCommentIcon();
  };

  return (
    <>
      <Tooltip title="Reply" placement="bottom" arrow>
        <Box>
          <ChatBubbleOutlineIcon
            sx={{ color: blue[300] }}
            onClick={handleMessageBubble}
          ></ChatBubbleOutlineIcon>
        </Box>
      </Tooltip>
    </>
  );
};

export { CommentIcon };
