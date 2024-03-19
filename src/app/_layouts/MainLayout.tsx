"use client";

import React from "react";
import { Box, Grow } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav, DesktopNav, TabletNav } from "~/app/_components";
import theme from "~/theme";
import { SnackbarProvider } from "notistack";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getContent = () => {
    if (isMobile) {
      return (
        <>
          <MobileNav />
          <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
            {children}
          </Box>
        </>
      );
    }

    if (isTablet) {
      return (
        <Box display="flex">
          <TabletNav />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 5 }}
          >
            {children}
          </Box>
        </Box>
      );
    }

    return (
      <Box display="flex">
        <DesktopNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 5 }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  return (
    <SnackbarProvider
      TransitionComponent={Grow}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      {getContent()}
    </SnackbarProvider>
  );
};

export { MainLayout };
