"use client";
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "../Avatar";
import { CommentIcon } from "../CommentIcon";
import { Button } from "..";

interface ReplyModalProps {
  name: string;
  userName: string;
  postContent: string;
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  name,
  userName,
  postContent,
}) => {
  const [reply, setReply] = useState("");
  const [open, setOpen] = useState(false);
  const [replyAttached, setReplyAttached] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const replyContent = event.target.value;
    setReply(replyContent);
    setReplyAttached(!!replyContent.trim());
  };

  const handleReply = () => {
    setOpen(false);
    setReply("");
    setReplyAttached(false);
  };

  const handleClose = () => {
    setOpen(false);
    setReply("");
  };

  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "500px",
            height: "100%",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "100vw",
              height: isMobile ? "100%" : "100vh",
              padding: "10px",
              borderRadius: "8px",
              position: "relative",
              backgroundColor: theme.palette.grey[50],
            }}
          >
            <style>
              {`
                #storybook-root {
                  padding: 0 !important;
                }
              `}
            </style>
            <IconButton
              sx={{ position: "absolute", top: 5, right: 5, color: "black" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 1,
                gap: 1,
              }}
            >
              <Avatar size={isMobile ? "large" : "medium"} />
              <Typography
                sx={{ fontSize: isMobile ? 18 : 14, fontWeight: "bold" }}
              >
                {name}
              </Typography>
              <Typography
                component="span"
                noWrap
                sx={{
                  fontSize: isMobile ? 18 : 14,
                  fontWeight: "bold",
                  color: theme.palette.grey[500],
                }}
              >
                {`@${userName}`}
              </Typography>
              <Typography
                id="dot"
                sx={{ display: "inline", verticalAlign: "middle" }}
              >
                .
              </Typography>
              <Typography noWrap>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </Typography>
            </Box>
            <Box sx={{ wordWrap: "break-word" }}>
              <Typography>{postContent}</Typography>
            </Box>
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="reply"
              label="Your Reply"
              fullWidth
              multiline
              rows={4}
              value={reply}
              onChange={handleReplyChange}
            />
            <Box sx={{ marginTop: "10px", textAlign: "right" }}>
              <Button
                onClick={handleReply}
                variant="contained"
                color="primary"
                disabled={!replyAttached}
                text={"Reply"}
              ></Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <CommentIcon onCommentIcon={handleToggleModal} number={1}></CommentIcon>
      )}
      <Snackbar
        open={false}
        autoHideDuration={3000}
        message="Your reply was posted!"
      />
    </>
  );
};

export { ReplyModal };
