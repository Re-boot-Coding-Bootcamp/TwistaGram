"use client";

import React from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_full.svg";
import Image from "next/image";
import theme from "~/theme";

const CheckYourEmailPage = (): JSX.Element => {
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
          padding: 3,
          gap: 2,
        }}
      >
        <Box id="logo-container">
          <Image src={Logo as string} alt="logo" width={200} />
        </Box>

        <Typography variant="subtitle1">Check your email</Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          A sign in link has been sent to your email address
        </Typography>
      </Box>
    </Grid>
  );
};

export { CheckYourEmailPage };
