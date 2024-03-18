"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/*Using styled-components approach to apply styles to the Typography component*/
const GrayText = styled(Typography)({
  color: "#B0B0B0", // Light gray color
  cursor: "pointer", // Change cursor to pointer to indicate it's clickable
  "&:hover": {
    color: "#9A9A9A", // Darker gray color on hover to indicate interactivity
  },
  whiteSpace: "nowrap", // Prevent text from wrapping
});

/*Using styled-components approach to apply styles to the Button component*/
interface HaveAnAccountProps {
  onLogin: () => void;
  onTextClick: () => void; // Handler for when the text is clicked
}

const HaveAnAccount: React.FC<HaveAnAccountProps> = ({
  onLogin,
  onTextClick,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <GrayText onClick={onTextClick}>Already have an account?</GrayText>
      <Button variant="text" color="primary" onClick={onLogin}>
        Log in
      </Button>
    </Box>
  );
};

export { HaveAnAccount };
