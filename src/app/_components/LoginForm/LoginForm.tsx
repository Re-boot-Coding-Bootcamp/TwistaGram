import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { ChangeEventHandler } from "react";

interface LoginForm {
  email?: string;
  password?: string;
  onSubmit: (email: string, password: string) => void;
}

function LoginForm({ email, password, onSubmit }: LoginForm): JSX.Element {
  const [usernameEmailValue, setUsernameEmailValue] = useState<string>(
    email ?? ""
  );
  const [passwordValue, setPasswordValue] = useState<string>(password ?? "");

  const handleUsernameEmailChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setUsernameEmailValue(e.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleOnClick = () => {
    onSubmit(usernameEmailValue, passwordValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <TextField
        id="username-email-input"
        size="small"
        label="Username / Email"
        variant="outlined"
        value={usernameEmailValue}
        onChange={handleUsernameEmailChange}
        fullWidth
      />
      <TextField
        id="password-input"
        size="small"
        label="Password"
        variant="outlined"
        value={passwordValue}
        onChange={handlePasswordChange}
        fullWidth
      />
      <Typography variant="caption" textAlign="right" color="primary">
        Forgot password?
      </Typography>
      <Button variant="contained" onClick={handleOnClick} fullWidth>
        Log in
      </Button>
    </Box>
  );
}

export { LoginForm };
