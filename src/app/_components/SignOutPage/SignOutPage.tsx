"use client";

import React from "react";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Modal,
  Paper,
} from "@mui/material";
import Logo from "~/assets/images/logo_full.svg";
import Image from "next/image";
import theme from "~/theme";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const SignOutPage = (): JSX.Element => {
  const mobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Modal
      open={true}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Paper
          id="border-line"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: mobileSmallScreen ? "90%" : 375,
            margin: "auto",
            padding: 3,
            gap: 2,
          }}
        >
          <Box id="logo-container">
            <Image src={Logo as string} alt="logo" width={200} />
          </Box>

          <Typography variant={"subtitle1"}>
            Are you sure you want to sign out?
          </Typography>

          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button variant="contained" onClick={() => router.back()}>
              Go Back
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Modal>
  );
};

export { SignOutPage };
