import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

import type { ChangeEventHandler } from "react";

interface RegistrationFormProps {
  email?: string;
  onSubmit: (email: string) => void;
}

const RegistrationForm = ({
  email,
  onSubmit,
}: RegistrationFormProps): JSX.Element => {
  const [emailValue, setEmailValue] = useState<string>(email ?? "");

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmailValue(e.target.value);
  };

  const handleObClick = () => {
    onSubmit(emailValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <TextField
        id="email-input"
        size="small"
        label="Email"
        variant="outlined"
        value={emailValue}
        onChange={handleEmailChange}
        fullWidth
      />
      <Button variant="contained" onClick={handleObClick} fullWidth>
        Sign up
      </Button>
    </Box>
  );
};

export { RegistrationForm };
