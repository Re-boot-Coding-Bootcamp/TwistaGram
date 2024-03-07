import React from "react";
import { Grid, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import Logo from "~/assets/images/logo_font.svg";
import Image from "next/image";
import theme from "~/theme";

const FrontLayout = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const MobileFooterContainer = () => {
    return (
      <Box
        id="have-an-account"
        sx={{
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
      >
        {" "}
        Have an account? Container
      </Box>
    );
  };

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
            sx={{
              position: "absolute",
              top: mobileSmallScreen ? "2rem" : "5rem",
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: "15px",
            }}
          >
            <Image src={Logo as string} alt="logo" width={200} />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              marginTop: "80px",
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="h6"
              color="#B5B5B5"
              fontWeight="bold"
              style={{ textAlign: "center", fontSize: "17px" }}
            >
              Sign up to see posts, photos, and videos from your friends.
            </Typography>
          </Box>
          <form style={{ textAlign: "center", width: "100%" }}>
            <Box
              id="google-login"
              sx={{
                width: "343px",
                height: "47px",
                backgroundColor: "#E0E0E0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px dashed #9E9E9E",
                marginTop: "15px",
              }}
            >
              Google login container
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginY: "1.5rem",
                marginTop: "35px",
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

            <Box
              id="registration-form"
              sx={{
                width: "343px",
                height: "266px",
                backgroundColor: "#E0E0E0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px dashed #9E9E9E",
                marginTop: "35px",
                marginBottom: "23px",
              }}
            >
              Registration container
            </Box>
            <Typography style={{ marginBottom: "40px" }}>
              By signing up, you agree to our terms, data policy and cookies
              policy.
            </Typography>
          </form>
          <MobileFooterContainer />
        </Box>
      </Grid>
    </>
  );
};

export { FrontLayout };
