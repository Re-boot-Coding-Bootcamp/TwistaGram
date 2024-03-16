"use client";

import React from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav, DesktopNav, TabletNav } from "~/app/_components";
import theme from "~/theme";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


  if (isMobile) {
    return (
      <>
        <MobileNav />
        <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
          {children}
        </Box>
      </>
    );
  } else if (isTablet) {
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

export { MainLayout };
