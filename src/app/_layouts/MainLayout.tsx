"use client";

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav } from "../_components/MobileNav/MobileNav";
import theme from "~/theme";
import { DesktopNav } from "../_components/DesktopNav/DesktopNav";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

export default MainLayout;
