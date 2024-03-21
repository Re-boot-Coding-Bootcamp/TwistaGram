"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import { NavigationItems, Pages } from "~/constants";
import theme from "~/theme";
import Image from "next/image";
import Logo from "~/assets/images/logo_full.svg";
import { useRouter } from "next/navigation";
import { UserIcon } from "../..";

const DESKTOP_NAV_WIDTH = "240px";

const DesktopNav = () => {
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);
  const router = useRouter();

  return (
    <Drawer
      sx={{
        width: DESKTOP_NAV_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DESKTOP_NAV_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        id="logo-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={5}
        pb={3}
      >
        <Image src={Logo as string} alt="twistagram-logo" width={230} />
      </Box>
      <List>
        {NavigationItems.map(({ text, icon, selectedIcon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              disableRipple
              onClick={() => {
                setSelectedPage(text);
                router.push(path);
              }}
              sx={{
                backgroundColor:
                  selectedPage === text
                    ? alpha(theme.palette.common.black, 0.04)
                    : "transparent",
              }}
            >
              <ListItemIcon sx={{ color: "black", minWidth: "unset", mr: 1.5 }}>
                {selectedPage === text ? selectedIcon : icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: selectedPage === text ? "bold" : "normal",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ m: 2, mt: "auto" }}>
        <UserIcon name="tempName" username="@tempUsername" />
      </Box>
    </Drawer>
  );
};

export { DesktopNav };
