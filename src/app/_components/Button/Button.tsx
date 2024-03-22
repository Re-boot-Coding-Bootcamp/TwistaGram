"use client";

import React from "react";
import { Button as MuiButton, alpha } from "@mui/material";
import type { ButtonProps as MuiButtonProps } from "@mui/material";
import theme from "~/theme";

interface ButtonProps extends MuiButtonProps {
  text: string;
}

const Button = ({ text, ...restOfProps }: ButtonProps) => {
  return (
    <MuiButton
      id={`${text.toLowerCase().replaceAll(" ", "-")}-button`}
      size="medium"
      variant="contained"
      color="primary"
      sx={{
        "&:disabled": {
          bgcolor: alpha(theme.palette.primary.main, 0.4),
          color: "white",
        },
      }}
      {...restOfProps}
    >
      {text}
    </MuiButton>
  );
};

export { Button };
