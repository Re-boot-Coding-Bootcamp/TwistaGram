"use client";

import React from "react";
import { Grid, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_full.svg";
import Image from "next/image";
import theme from "~/theme";
import { EmailSignin, GoogleLoginButton } from "..";
import { signIn } from "next-auth/react";

const SignInPage = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box
        id="border-line"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: mobileSmallScreen ? "none" : "1px solid #CCC",
          width: mobileSmallScreen ? "90%" : 375,
          margin: "auto",
          padding: "1rem",
        }}
      >
        <Box id="logo-container" sx={{ marginTop: "40px" }}>
          <Image src={Logo as string} alt="logo" width={200} />
        </Box>

        <Typography
          variant="h6"
          color="#B5B5B5"
          sx={{
            textAlign: "center",
            fontSize: "17px",
            marginTop: "35px",
            marginBottom: "15px",
          }}
        >
          Connect and share in real-time, bringing everyone, everywhere closer
          together.
        </Typography>

        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Box
            id="google-login"
            sx={{
              width: "100%",
            }}
          >
            <GoogleLoginButton onLogin={() => signIn("google")} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginY: "1.5rem",
            }}
          >
            <Divider sx={{ flexGrow: 1, maxWidth: "45%" }} />
            <Typography
              sx={{
                marginX: "0.5rem",
                color: "#999",
                fontSize: "15px",
              }}
            >
              OR
            </Typography>
            <Divider sx={{ flexGrow: 1, maxWidth: "45%" }} />
          </Box>

          <Box
            id="registration-form"
            sx={{
              width: "100%",
              mb: 3,
            }}
          >
            <EmailSignin
              onSubmit={(email) => signIn("email", { email: email })}
            />
          </Box>

          <Typography sx={{ marginBottom: "15px" }}>
            By signing in, you agree to our terms, data policy, and cookies
            policy.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export { SignInPage };
