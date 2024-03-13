import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  type EmojiClickData,
  default as EmojiPickerExternal,
} from "emoji-picker-react";

interface Props {
  children: React.ReactNode;
  onChange: (input: EmojiClickData) => void;
}

const EmojiPicker = ({ children, onChange }: Props) => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const handleEmojiClick = (
    emojiData: EmojiClickData,
    event: MouseEvent
  ): void => {
    onChange(emojiData);
    //
  };

  return (
    <>
      <Box id="emoji-picker-trigger" onClick={() => setEmojiPickerOpen(true)}>
        {children}
      </Box>

      {/* Build popper here */}
      {emojiPickerOpen && (
        <EmojiPickerExternal onEmojiClick={handleEmojiClick} />
      )}
    </>
  );
};

export { EmojiPicker };
