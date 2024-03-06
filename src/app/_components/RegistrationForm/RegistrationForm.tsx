import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface RegistrationFormProps {
  onSubmit: (email: string, username: string, password: string) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps): JSX.Element => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleObClick = () => {
    onSubmit(emailValue, passwordValue, usernameValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1.5}>
      <TextField
        id="email-input"
        size="small"
        label="Email"
        variant="outlined"
        value={emailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
        fullWidth
      />
      <TextField
        id="username-input"
        size="small"
        label="Username"
        variant="outlined"
        value={usernameValue}
        onChange={(e) => {
          setUsernameValue(e.target.value);
        }}
        fullWidth
      />
      <TextField
        id="password-input"
        size="small"
        label="Password"
        variant="outlined"
        value={passwordValue}
        onChange={(e) => {
          setPasswordValue(e.target.value);
        }}
        fullWidth
      />
      <Button color="primary" variant="contained" onClick={handleObClick}>
        Sign up
      </Button>
    </Box>
  );
};

export { RegistrationForm };
