"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { ChangeEventHandler } from "react";

interface LoginFormProps {
  onSubmit: (usernameOrEmail: string, password: string) => void;
  onForgotPasswordClick: () => void;
}

function LoginForm({
  onSubmit,
  onForgotPasswordClick,
}: LoginFormProps): JSX.Element {
  const [usernameOrEmailValue, setUsernameOrEmailValue] = useState<string>("");

  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleUsernameEmailChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setUsernameOrEmailValue(e.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPasswordValue(e.target.value);
  };

  // function to handle login
  const handleLoginClick = () => {
    onSubmit(usernameOrEmailValue, passwordValue);
  };

  // function to handle forgotten password
  const handleForgotPasswordClick = () => {
    onForgotPasswordClick();
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <TextField
        id="username-email-input"
        type="email"
        size="small"
        label="Username / Email"
        variant="outlined"
        value={usernameOrEmailValue}
        onChange={handleUsernameEmailChange}
        fullWidth
      />
      <TextField
        id="password-input"
        type="password"
        size="small"
        label="Password"
        variant="outlined"
        value={passwordValue}
        onChange={handlePasswordChange}
        fullWidth
      />
      <Typography
        id="forgot-password"
        variant="caption"
        textAlign="right"
        color="primary"
        onClick={handleForgotPasswordClick}
        sx={{ cursor: "pointer" }}
      >
        Forgot password?
      </Typography>
      <Button id="login-button" variant="contained" onClick={handleLoginClick}>
        Log in
      </Button>
    </Box>
  );
}

export { LoginForm };
