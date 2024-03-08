import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

interface Props {
  onClick: () => void;
}
const ForgotPW = ( { onClick }: Props): JSX.Element => {
  const handleForgotPw = () => {
    onClick();
  };
  return (
    <>
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
          sx={{pb:2}}
        />
        <Button variant="contained" sx={{p:2}} onClick={handleForgotPw}>Reset Password</Button>
      </Box>
    </>
  );
};

export { ForgotPW };
