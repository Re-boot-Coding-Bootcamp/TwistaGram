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
import React, { useState } from "react";
import { NavigationItems, Pages } from "~/constants";
import theme from "~/theme";
import Image from "next/image";
import Logo from "~/assets/images/logo_small.svg";
import { useRouter } from "next/navigation";

const TABLET_NAV_WIDTH = "180px";

const TabletNav = () => {
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);
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
        <Image src={Logo as string} alt="Your Logo" width={100} height={100} />
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
                }}
              >
                <ListItemIcon sx={{ color: "black", minWidth: "unset", mr: 1.5 }}>
                  {selectedPage === text ? selectedIcon : icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export { TabletNav };
