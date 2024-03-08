import React from "react";
import { Button as MuiButton } from "@mui/material";

import type { MouseEventHandler } from "react";
import type { ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>; // this is a type, not a value
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
