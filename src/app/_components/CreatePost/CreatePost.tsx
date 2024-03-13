"use client";

import { Box, Divider, Grid, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { useState } from "react";
import type { MouseEventHandler } from "react";
interface CreatePostProps {
  onPostButtonClick: () => void;
  onImagePickerClick?: () => void;
  onEmojiPickerClick?: () => void;
}

function CreatePost({
  onPostButtonClick,
  onImagePickerClick,
  onEmojiPickerClick,
}: CreatePostProps) {
  const [postContent, setPostContent] = useState("");
  const [addImage, setAddImage] = useState(false);
  const handlePostClick: MouseEventHandler<HTMLButtonElement> = () => {
    onPostButtonClick();
  };
  return (
    <>
      <Box id="create-post-main-container">
        <Grid container id="content" wrap="nowrap" spacing={2} mb={2}>
          <Grid item>
            <Avatar size="medium" />
          </Grid>
          <Grid item xs>
            <TextField
              variant="standard"
              fullWidth
              // get rid of Mui underline style
              InputProps={{ disableUnderline: true }}
              multiline
              placeholder="What is happening?!"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        {addImage && (
          <Box
            height="250px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            // will change background color once one is decided
            bgcolor="lightgray"
            mb={1}
          >
            Temporary Placeholder
          </Box>
        )}
        {/* divider only appears when there is text or image in post */}
        {postContent || addImage ? <Divider /> : null}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
            ml: 5,
          }}
        >
          <Box id="icon-pickers-container" display="flex" gap={2}>
            <ImageIcon
              fontSize="small"
              onClick={() => {
                setAddImage(true);
                if (onImagePickerClick) {
                  onImagePickerClick();
                }
              }}
            />
            <EmojiEmotionsIcon fontSize="small" onClick={onEmojiPickerClick} />
          </Box>
          <Box id="post-button-container">
            <Button
              disabled={postContent || addImage ? false : true}
              text="Post"
              onClick={handlePostClick}
              sx={{ borderRadius: 4 }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export { CreatePost };
