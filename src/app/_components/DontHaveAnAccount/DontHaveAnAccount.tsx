"use client";

import { Box, Typography, alpha } from "@mui/material";
import { Button } from "../Button";
interface DontHaveAnAccountProps {
  onSignUpClick: () => void;
}

const DontHaveAnAccount = ({
  onSignUpClick,
}: DontHaveAnAccountProps): JSX.Element => {
  return (
    <Box display="flex" alignItems="center">
      <Typography
        id="dont-have-an-account"
        color={alpha("#9e9e9e", 0.8)}
        style={{ whiteSpace: "nowrap" }}
      >
        Don’t have an account?
      </Typography>
      <Button
        variant="text"
        color="primary"
        onClick={onSignUpClick}
        text="Sign up"
        sx={{
          width: 70,
        }}
      />
    </Box>
  );
};

export { DontHaveAnAccount };
