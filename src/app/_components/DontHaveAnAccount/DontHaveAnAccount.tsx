import { Box, Typography } from "@mui/material";

const DontHaveAnAccount = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      <Typography id="dont-have-an-account" color={"#00000066"}>
        Don’t have an account?
      </Typography>
      <Typography id="sign-up-link" color={"#258BB6"}>
        Sign up.
      </Typography>
    </Box>
  );
};

export { DontHaveAnAccount };
