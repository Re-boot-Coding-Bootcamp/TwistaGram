"use client";

import { Box, Divider, TextField, Button as MuiButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { type ChangeEvent, useEffect, useState } from "react";
import {
  VisuallyHiddenInput,
  Avatar,
  Button,
  EmojiPicker,
  ImageContainer,
} from "..";
import { type EmojiClickData } from "emoji-picker-react";

interface CreatePostProps {
  onPostSubmit: () => void;
}

function CreatePost({ onPostSubmit }: CreatePostProps) {
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>();

  const handlePostClick = () => {
    onPostSubmit();
  };

  const handleEmojiChange = (emoji: EmojiClickData) => {
    console.log(emoji.emoji);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);

    if (e.target.files) {
      const firstFile = e.target.files[0];
      setFile(firstFile);
    }
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <Box id="create-post-main-container" display="flex" p={2} gap={1}>
      <Box id="avatar-container">
        <Avatar size="medium" />
      </Box>

      <Box id="context-container" flexGrow={1}>
        <TextField
          variant="standard"
          fullWidth
          inputProps={{ maxLength: 250 }}
          InputProps={{ disableUnderline: true }}
          multiline
          placeholder="What is happening?!"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />

        {/* use imageUrl to display the image */}
        {/* props: imageUrl, onClose */}
        {file && imageUrl && (
          <ImageContainer
            imageUrl={imageUrl}
            onCloseImage={() => {
              setFile(undefined);
              setImageUrl(undefined);
            }}
          />
        )}

        <Divider sx={{ my: 1 }} />

        <Box
          id="actions-container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box id="icon-pickers-container" display="flex" gap={2}>
            <MuiButton
              component="label"
              role={undefined}
              variant="text"
              tabIndex={-1}
              disableRipple
              sx={{
                p: 0,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ImageIcon fontSize="small" />
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </MuiButton>

            <EmojiPicker onChange={handleEmojiChange}>
              <EmojiEmotionsIcon fontSize="small" />
            </EmojiPicker>
          </Box>
          <Box id="post-button-container">
            <Button
              disabled={!postContent && !file}
              text="Post"
              onClick={handlePostClick}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { CreatePost };
