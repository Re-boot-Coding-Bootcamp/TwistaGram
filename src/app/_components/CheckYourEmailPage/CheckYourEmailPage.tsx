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
          padding: "1rem",
        }}
      >
        <Box id="logo-container" sx={{ marginTop: "40px" }}>
          <Image src={Logo as string} alt="logo" width={200} />
        </Box>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: 3,
            marginBottom: 2,
          }}
        >
          Check your email
        </Typography>
        <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
          A sign in like has been sent to your email address.
        </Typography>
      </Box>
    </Grid>
  );
};

export { CheckYourEmailPage };
