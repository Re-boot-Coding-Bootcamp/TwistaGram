import { Box, Typography, Button } from "@mui/material";
import React from "react";

interface confirmResetPasswordProps {
  handleResetPasswordClick: () => void;
}

const ForgotPassword = ({
  handleResetPasswordClick,
}: confirmResetPasswordProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography mb={1} variant="h5" sx={{ fontWeight: "bold" }}>
        Password reset
      </Typography>
      <Typography mb={5} sx={{ color: "text.secondary" }}>
        Your password has been successfully reset. click confirm to set a new
        password
      </Typography>

      <Button
        variant="contained"
        id="confirm-reset-password"
        onClick={handleResetPasswordClick}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default ForgotPassword;
