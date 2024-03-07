import React from "react";
import { Grid, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_font.svg";
import Image from "next/image";
import theme from "~/theme";

const FrontLayout = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

const MobileFooterContainer = () => {
  return (
    <Box id="have-an-account" sx={{
      textAlign: "center",
      marginTop: "auto",
      marginBottom: "1rem",
      position: "absolute",
      bottom: "1rem",
      width: mobileSmallScreen ? "100vw" : "100%",
      borderTop: "1px solid #CCC",
      paddingTop: "13px",
      height: mobileSmallScreen ? "10px" : "40px",
    }}
    > Have an account? Container
    </Box>
  )
}

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          id="borderline"
          sx={{
            border: mobileSmallScreen ? "none" : "1px solid #CCC",
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
          <Box
            id="logo-container"
            mb={6}
            style={{
              position: "absolute",
              top: "5rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Image src={Logo as string} alt="logo" width={200} />
          </Box>
          <Typography
            variant="h6"
            color="#B5B5B5"
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
                  backgroundColor: "#CCC",
                  margin: "10px",
                  border: "none",
                }}
              />
              <Typography
                variant="subtitle1"
                style={{
                  color: "#999",
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
                  backgroundColor: "#CCC",
                  margin: "10px",
                  border: "none",
                }}
              />
            </Box>

            <Box id="registration-form" sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>Registration container</Box>
          </form>
          <MobileFooterContainer /> 
        </Box>
      </Grid>
    </>
  );
};

export { FrontLayout };
