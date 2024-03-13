import React from "react";
import { Grid, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_full.svg";
import Image from "next/image";
import theme from "~/theme";

const FrontLayout = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const FooterContainer = () => (
    <Box
      id="have-an-account"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid #CCC",
        marginTop: "20px",
        paddingTop: mobileSmallScreen ? "20px" : "none",
        width: mobileSmallScreen ? "100vw" : "100%",
        height: mobileSmallScreen ? "10px" : "40px",
      }}
    >
      Have an account? Container
    </Box>
  );

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
          fontWeight="bold"
          sx={{
            textAlign: "center",
            fontSize: "17px",
            marginTop: "35px",
            marginBottom: "15px",
          }}
        >
          Sign up to see posts, photos, and videos from your friends.
        </Typography>

        <form style={{ width: "100%", textAlign: "center" }}>
          <Box
            id="google-login"
            sx={{
              width: "100%",
              maxWidth: "343px",
              height: "47px",
              backgroundColor: "#E0E0E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #9E9E9E",
              margin: "15px auto",
            }}
          >
            Google login container
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
              maxWidth: "343px",
              height: "266px",
              backgroundColor: "#E0E0E0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #9E9E9E",
              margin: "35px auto 23px",
            }}
          >
            Registration container
          </Box>

          <Typography sx={{ marginBottom: "15px" }}>
            By signing up, you agree to our terms, data policy, and cookies
            policy.
          </Typography>
        </form>

        <FooterContainer />
      </Box>
    </Grid>
  );
};

export { FrontLayout };
