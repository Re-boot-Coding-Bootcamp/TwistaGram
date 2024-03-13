import { Box, Typography, Button } from "@mui/material";
import React from "react";

interface Props {
  onConfirm: () => void;
}

const ForgotPasswordConfirm = ({ onConfirm }: Props): JSX.Element => {
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
        onClick={onConfirm}
      >
        Confirm
      </Button>
    </Box>
  );
};

export { ForgotPasswordConfirm };
