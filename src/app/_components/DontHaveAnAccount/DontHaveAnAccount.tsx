import { Box, Typography, alpha } from "@mui/material";

// Define interface for props with callback function
interface DontHaveAnAccountProps {
  // Function to be called on Sign Up click
  onSignUpClick: () => void;
}

const DontHaveAnAccount = ({
  onSignUpClick,
}: DontHaveAnAccountProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      {/* TODO: Update #00000066 and #258BB6this color with theme later. */}
      <Typography id="dont-have-an-account" color={alpha("#000000", 0.46)}>
        Don’t have an account?
      </Typography>
      <Typography
        id="sign-up-link"
        color={alpha("#258BB6", 0.86)}
        onClick={onSignUpClick}
        sx={{ cursor: "pointer" }}
      >
        Sign up.
      </Typography>
    </Box>
  );
};

export { DontHaveAnAccount };
