import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

interface GoogleLoginButtonProps {
  onLogin: () => void;
}

const GoogleLoginButton = ({
  onLogin,
}: GoogleLoginButtonProps): JSX.Element => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      size="large"
      sx={{
        textTransform: "none",
        fontWeight: "normal",
        backgroundColor: "#248cb4",
        borderRadius: "8px",
        width: "350px",
        height: "50px",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "#196e7e",
          borderColor: "#196e7e",
        },
      }}
      onClick={handleLogin}
    >
      Log in with Google
    </Button>
  );
};

export { GoogleLoginButton };
