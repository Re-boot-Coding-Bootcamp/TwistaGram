"use client";

import { Box, TextField } from "@mui/material";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Button } from "~/app/_components";

interface EmailSigninProps {
  onSubmit: (email: string) => void;
}

const EmailSignin = ({ onSubmit }: EmailSigninProps): JSX.Element => {
  const [emailValue, setEmailValue] = useState<string>("");

  const handleOnClick = () => {
    if (emailValue === "") {
      return;
    }

    onSubmit(emailValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={1.5}>
      <TextField
        id="email-input"
        size="small"
        label="Email"
        type="email"
        variant="outlined"
        value={emailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        fullWidth
      />

      <Button
        text="Sign in with Email"
        onClick={handleOnClick}
        startIcon={<MailOutlineIcon />}
      />
    </Box>
  );
};

export { EmailSignin };
