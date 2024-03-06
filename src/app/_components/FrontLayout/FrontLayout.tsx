"use client";

import React from "react";
import { Grid, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_font.svg";
import Image from "next/image";
import theme from "~/theme";

const FrontLayout = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            border: mobileSmallScreen ? "none" : "1px solid #CCCCCC",
            maxHeight: "812px",
            height: "90vh",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            position: "relative",
            "@media (min-width: 375px)": {
              width: "375px",
            },
          }}
        >
          <Box id="logo-container" mb={6}>
            <Image src={Logo as string} alt="logo" width={200} />
          </Box>
          <Typography
            variant="h6"
            color="#7E7575"
            fontWeight="bold"
            mb={3}
            style={{ textAlign: "center" }}
          >
            Sign up to see posts, photos, and videos from your friends.
          </Typography>
          <form style={{ textAlign: "center", width: "100%" }}>
            <Box id="google-login" mb={3}>
              Google login container
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginY: "1.5rem",
              }}
            >
              <Divider
                sx={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CCCCCC",
                  margin: "10px",
                  border: "none",
                }}
              />
              <Typography
                variant="subtitle1"
                style={{
                  color: "#999999",
                  fontSize: "15px",
                  margin: "0 0.5rem",
                }}
              >
                OR
              </Typography>
              <Divider
                sx={{
                  flex: "1",
                  height: "1px",
                  backgroundColor: "#CCCCCC",
                  margin: "10px",
                  border: "none",
                }}
              />
            </Box>

            <Box id="registration-form">Registration container</Box>
          </form>
          <Box style={{ textAlign: "center", marginTop: "2rem" }}>
            <Box id="have-an-account">Have an account? Container</Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export { FrontLayout };
