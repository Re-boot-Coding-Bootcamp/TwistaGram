import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

interface Props {
  onLogin: () => void;
}

const GoogleLoginButton = ({
  onLogin,
}: Props): JSX.Element => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      sx={{
        textTransform: "none",
        fontWeight: "normal",
        backgroundColor: "#248cb4",
        borderRadius: "8px",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "#196e7e",
          borderColor: "#196e7e",
        },
      }}
      onClick={handleLogin}
      fullWidth
    >
      Log in with Google
    </Button>
  );
};

export { GoogleLoginButton };
