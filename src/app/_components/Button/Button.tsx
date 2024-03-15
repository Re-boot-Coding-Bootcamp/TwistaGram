"use client";

import React from "react";
import { Button as MuiButton } from "@mui/material";

import type { ButtonProps as MuiButtonProps } from "@mui/material";

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
      {...restOfProps}
    >
      {text}
    </MuiButton>
  );
};

export { Button };
