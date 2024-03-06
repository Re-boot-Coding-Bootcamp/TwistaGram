import React from "react";
import { Box, Typography, alpha } from "@mui/material";

interface HaventGotEmailYetProps {
  //Function to be called on Resend email click
  onResendEmail: () => void;
}

const EnterCodeScreen = ({
  onResendEmail,
}: HaventGotEmailYetProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row" gap="1">
      <Typography id="havent-got-the-email-yet" color={alpha("#000000", 0.46)}>
        Haven't got the email yet?
      </Typography>
      <Typography
        id="resend-email-link"
        color={alpha("#258BB6", 0.86)}
        onClick={onResendEmail}
        sx={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Resend email
      </Typography>
    </Box>
  );
};

export { EnterCodeScreen };
