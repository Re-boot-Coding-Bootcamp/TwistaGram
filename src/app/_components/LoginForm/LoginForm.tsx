import { Box, Button, TextField, Typography } from "@mui/material";
import { ReactJSXElement } from "node_modules/@emotion/react/dist/declarations/types/jsx-namespace";
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
    <Box>
      <TextField
        id="username-email-input"
        label="Username / Email"
        variant="outlined"
        value={usernameEmailValue}
        onChange={handleUsernameEmailChange}
      />
      <TextField
        id="password-input"
        label="Password"
        variant="outlined"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <Typography>Forgot Password?</Typography>
      <Button variant="contained" onClick={handleOnClick} fullWidth>
        Log in
      </Button>
    </Box>
  );
}

export default LoginForm;
