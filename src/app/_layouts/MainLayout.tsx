"use client";

import React from "react";
import { Box, Container, Grow } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav, DesktopNav, TabletNav } from "~/app/_components";
import theme from "~/theme";
import { SnackbarProvider } from "notistack";
import { SessionProvider } from "next-auth/react";
import {
  HomePageFeedContextProvider,
  NavigationContextProvider,
} from "../_context";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getContent = () => {
    if (isMobile) {
      return (
        <>
          <MobileNav />
          <Box
            id="mobile-nav-content"
            component="main"
            sx={{ bgcolor: "background.default" }}
            pb="52px"
          >
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
            sx={{ flexGrow: 1, bgcolor: "background.default" }}
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
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  return (
    <SessionProvider>
      <SnackbarProvider
        TransitionComponent={Grow}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <NavigationContextProvider>
          <HomePageFeedContextProvider>
            <Container
              maxWidth="md"
              sx={{
                ...(isDesktop
                  ? { borderLeft: 1, borderRight: 1, borderColor: "divider" }
                  : {}),
                paddingLeft: "0 !important",
                paddingRight: "0 !important",
              }}
            >
              {getContent()}
            </Container>
          </HomePageFeedContextProvider>
        </NavigationContextProvider>
      </SnackbarProvider>
    </SessionProvider>
  );
};

export { MainLayout };
