import { Box, Typography, alpha } from "@mui/material";
import { Button } from "~/app/_components";

interface DontHaveAnAccountProps {
  onSignUpClick: () => void;
}

const DontHaveAnAccount = ({
  onSignUpClick,
}: DontHaveAnAccountProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      <Typography id="dont-have-an-account" color={alpha("#000", 0.46)}>
        Don’t have an account?
      </Typography>
      <Button text="Sign up" id="sign-up-link" onClick={onSignUpClick} />
    </Box>
  );
};

export { DontHaveAnAccount };
