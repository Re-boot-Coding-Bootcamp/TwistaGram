"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Input,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { Avatar } from "../Avatar";
import theme from "~/theme";

interface ReplyModalProps {
  userImage: string | undefined;
  handleReply: (content: string) => Promise<void>;
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  userImage,
  handleReply,
}: ReplyModalProps) => {
  const [open, setOpen] = useState(false);
  const [replyText, setReplyText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReplySubmit = async () => {
    const content = replyText.trim();
    if (content.length > 0) {
      setIsLoading(true);
      await handleReply(content);
      handleModalClose();
      setIsLoading(false);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleReplySubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };

  const handleModalClose = () => {
    setOpen(false);
    setReplyText("");
  };

  const handleModalOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        onClick={handleModalOpen}
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          p: 1,
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[100],
          },
        }}
      >
        <Avatar size="medium" src={userImage} />
        <Typography variant="subtitle1" color={theme.palette.text.disabled}>
          Enter your comment here...
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="reply-modal-title"
        aria-describedby="reply-modal-description"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Paper
            elevation={3}
            sx={{
              px: 2,
              py: 3,
              width: "400px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box display="flex" gap={2}>
              <Avatar size="medium" src={userImage} />
              <Input
                type="text"
                placeholder="Enter your comment here..."
                value={replyText}
                multiline
                maxRows={5}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={{ width: "100%" }}
                inputProps={{
                  maxLength: 250,
                }}
              />
            </Box>
            <Box
              id="reply-modal-actions-row"
              display="flex"
              justifyContent="end"
              alignItems="center"
              gap={1}
            >
              <Button variant="outlined" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleReplySubmit}
                disabled={isLoading || replyText.trim().length === 0}
                startIcon={
                  isLoading ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : null
                }
              >
                {isLoading ? "Commenting" : "Comment"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export { ReplyModal };
