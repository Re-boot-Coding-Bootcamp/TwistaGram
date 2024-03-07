import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

interface Props {
  onLogin: () => void;
}

const GoogleLoginButton = ({ onLogin }: Props): JSX.Element => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      sx={{
        fontWeight: "normal",
        borderRadius: "8px",
        fontSize: "16px",
      }}
      onClick={handleLogin}
    >
      Log in with Google
    </Button>
  );
};

export { GoogleLoginButton };
