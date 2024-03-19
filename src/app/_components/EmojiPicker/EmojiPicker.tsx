"use client";

import React from "react";
import { Box, Paper, Popper } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  type EmojiClickData,
  default as EmojiPickerExternal,
} from "emoji-picker-react";
import theme from "~/theme";

interface Props {
  onChange: (input: EmojiClickData) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const EmojiPicker = ({ children, onChange, disabled }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl); // same as !!anchorEl
  const id = open ? "emoji-popper" : undefined;

  const handleEmojiClick = (emojiData: EmojiClickData): void => {
    onChange(emojiData);
    setAnchorEl(null);
  };

  const handleTriggerClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      <Box
        id="emoji-picker-trigger"
        display="flex"
        alignItems="center"
        onClick={disabled ? undefined : handleTriggerClick}
        sx={{ cursor: disabled ? "default" : "pointer" }}
      >
        {children ?? (
          <EmojiEmotionsIcon
            fontSize="small"
            sx={{
              color: disabled
                ? theme.palette.grey[400]
                : theme.palette.primary.main,
            }}
          />
        )}
      </Box>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ zIndex: 6 }}
      >
        <Paper elevation={6}>
          <EmojiPickerExternal onEmojiClick={handleEmojiClick} />
        </Paper>
      </Popper>
    </>
  );
};

export { EmojiPicker };
