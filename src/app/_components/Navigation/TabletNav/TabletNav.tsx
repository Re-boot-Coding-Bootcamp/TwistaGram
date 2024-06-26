"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  alpha,
} from "@mui/material";
import React, { useContext } from "react";
import { NavigationItems } from "~/constants";
import theme from "~/theme";
import Image from "next/image";
import Logo from "~/assets/images/logo_small.svg";
import { useRouter } from "next/navigation";
import { UserIcon } from "../..";
import { NavigationContext } from "~/app/_context";

const TABLET_NAV_WIDTH = "80px";

const TabletNav = () => {
  const { selectedPage, setSelectedPage } = useContext(NavigationContext);
  const router = useRouter();

  return (
    <Drawer
      sx={{
        width: TABLET_NAV_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: TABLET_NAV_WIDTH,
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
        <Image src={Logo as string} alt="twistigram-logo" width={65} />
      </Box>
      <List>
        {NavigationItems.map(({ text, icon, selectedIcon, path }) => (
          <Tooltip title={text} key={text} placement="right">
            <ListItem disablePadding>
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
                  px: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "black",
                    minWidth: "unset",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {selectedPage === text ? selectedIcon : icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Box sx={{ px: 1, pb: 2, mt: "auto" }}>
        <UserIcon />
      </Box>
    </Drawer>
  );
};

export { TabletNav };
