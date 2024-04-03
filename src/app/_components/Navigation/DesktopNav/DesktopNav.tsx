"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import React, { useContext } from "react";
import { NavigationItems } from "~/constants";
import theme from "~/theme";
import Image from "next/image";
import Logo from "~/assets/images/logo_full.svg";
import { useRouter } from "next/navigation";
import { UserIcon } from "../..";
import { NavigationContext } from "~/app/_context";

const DESKTOP_NAV_WIDTH = "240px";

const DesktopNav = () => {
  const { selectedPage, setSelectedPage } = useContext(NavigationContext);
  const router = useRouter();

  return (
    <Box
      sx={{
        width: DESKTOP_NAV_WIDTH,
        height: "100vh",
        flexShrink: 0,
        boxSizing: "border-box",
        borderRight: 1,
        borderColor: "divider",
        position: "sticky",
        top: 0,
      }}
    >
      <Box
        height={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
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
                  <ListItemIcon
                    sx={{ color: "black", minWidth: "unset", mr: 1.5 }}
                  >
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
        </Box>
        <Box sx={{ m: 2 }}>
          <UserIcon />
        </Box>
      </Box>
    </Box>
  );
};

export { DesktopNav };
