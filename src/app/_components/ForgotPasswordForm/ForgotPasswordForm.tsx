import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {
  onResetPassword: (email: string) => void;
}

const ForgotPasswordForm = ({ onResetPassword }: Props): JSX.Element => {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography variant="h6" fontWeight="bold">
        Forgot Password
      </Typography>
      <Typography color="text.secondary">
        Please enter your email to reset the password
      </Typography>
      <Typography fontWeight="medium">Your Email</Typography>
      <TextField
        id="email-input"
        size="medium"
        label="Enter your email"
        variant="outlined"
        sx={{ pb: 2 }}
        value={emailValue}
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        sx={{ p: 2 }}
        onClick={() => {
          onResetPassword(emailValue);
        }}
      >
        Reset Password
      </Button>
    </Box>
  );
};

export { ForgotPasswordForm };
