"use client";

import { Box, CircularProgress } from "@mui/material";

const LoadingScreen = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt="300px">
      <CircularProgress color="inherit" />
    </Box>
  );
};

export { LoadingScreen };
