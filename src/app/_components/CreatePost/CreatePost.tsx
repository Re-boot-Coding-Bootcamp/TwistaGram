"use client";

import {
  Box,
  Divider,
  TextField,
  Button as MuiButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { type ChangeEvent, useEffect, useState, useRef } from "react";
import {
  VisuallyHiddenInput,
  Avatar,
  Button,
  EmojiPicker,
  ImageContainer,
} from "..";
import { type EmojiClickData } from "emoji-picker-react";
import { PictureExtensions } from "~/constants";
import theme from "~/theme";
import { useSnackbar } from "notistack";
import type { PostContent } from "~/types";

interface CreatePostProps {
  userImage: string;
  onPostSubmit: (postContent: PostContent) => Promise<void>;
}

const POST_CHAR_LIMIT = 250;

function CreatePost({ userImage, onPostSubmit }: CreatePostProps) {
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [isPosting, setIsPosting] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handlePostClick = async () => {
    setIsPosting(true);
    await onPostSubmit({
      content: postContent,
      image: file,
    });
    setPostContent("");
    setFile(undefined);
    setImageUrl(undefined);
    setIsPosting(false);
  };

  const handleEmojiChange = (emojiData: EmojiClickData) => {
    if (emojiData.emoji.length + postContent.length > POST_CHAR_LIMIT) {
      enqueueSnackbar(
        <Box display="flex" flexDirection="column">
          <Typography>
            {"The emoji is too long to be added to the post."}
          </Typography>
          <Typography>
            {"(FYI: Most emojis are actually counted more than 1 character 👀)"}
          </Typography>
        </Box>,
        {
          variant: "warning",
        }
      );
      return;
    }

    const emojiStartIndex = (
      textFieldRef.current?.firstElementChild as HTMLTextAreaElement
    )?.selectionStart;

    setPostContent(
      (prevContent) =>
        prevContent.slice(0, emojiStartIndex) +
        emojiData.emoji +
        prevContent.slice(emojiStartIndex)
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

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
        <Avatar size="medium" src={userImage} />
      </Box>

      <Box id="context-container" flexGrow={1}>
        <TextField
          variant="standard"
          fullWidth
          inputProps={{ maxLength: POST_CHAR_LIMIT }}
          InputProps={{ disableUnderline: true, ref: textFieldRef }}
          multiline
          placeholder="What is happening?!"
          value={postContent}
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          disabled={isPosting}
        />

        {file && imageUrl && (
          <ImageContainer
            imageUrl={imageUrl}
            onCloseImage={() => {
              setFile(undefined);
              setImageUrl(undefined);
            }}
            disabled={isPosting}
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
          <Box
            id="icon-pickers-container"
            display="flex"
            alignItems="center"
            gap={2}
          >
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
              disabled={isPosting}
            >
              <ImageIcon fontSize="small" />
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                accept={PictureExtensions.join(",")}
              />
            </MuiButton>

            <EmojiPicker onChange={handleEmojiChange} disabled={isPosting} />
          </Box>
          <Box
            id="post-button-container"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Typography
              id="char-count"
              variant="body2"
              color={theme.palette.grey[500]}
            >{`${postContent.length}/${POST_CHAR_LIMIT}`}</Typography>
            <Button
              disabled={(!postContent && !file) || isPosting}
              text={isPosting ? "Posting..." : "Post"}
              onClick={handlePostClick}
              startIcon={
                isPosting ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : undefined
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { CreatePost };
