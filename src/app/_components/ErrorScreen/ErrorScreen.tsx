"use client";

import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const ErrorScreen = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt="300px">
      <Typography
        color="GrayText"
        variant="subtitle1"
        display="flex"
        alignItems="center"
        gap={1}
      >
        <WarningAmberIcon color="inherit" />
        <>Something went wrong</>
      </Typography>
    </Box>
  );
};

export { ErrorScreen };
