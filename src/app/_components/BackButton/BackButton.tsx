"use client";

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackButton = (): JSX.Element => {
  const router = useRouter();
  return (
    <Box m={1}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          router.back();
        }}
        color="inherit"
        fullWidth={false}
        sx={{
          "& .MuiButton-startIcon": {
            mr: 0.5,
          },
        }}
      >
        Back
      </Button>
    </Box>
  );
};

export { BackButton };
