import React from 'react';
import { Box, Button, Typography, styled } from "@mui/material";

{/*Using styled-components approach to apply styles to the Typography component*/}
const GrayText = styled(Typography)({
  color: '#B0B0B0', // Light gray color
  cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
  '&:hover': {
    color: '#9A9A9A', // Darker gray color on hover to indicate interactivity
  },
});

{/*Using styled-components approach to apply styles to the Button component*/}
const StyledButton = styled(Button)({
    textTransform: 'none', // Preventing the login text to be uppercase
  });

interface HaveAnAccountProps {
  onLogin: () => void;
  onTextClick: () => void; // Handler for when the text is clicked
}

const HaveAnAccount: React.FC<HaveAnAccountProps> = ({ onLogin, onTextClick }) => {
  return (
    <Box display="flex" alignItems="center">
      <GrayText onClick={onTextClick}>
        Have an account?
      </GrayText>
      <StyledButton onClick={onLogin}>
        Log in
      </StyledButton>
    </Box>
  );
};

export default HaveAnAccount;
