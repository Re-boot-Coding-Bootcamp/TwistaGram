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
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavItems } from "~/constants";
import theme from "~/theme";
import Image from "next/image";
import svgLogo from "~/assets/svgs/logo_font.svg";

const DESKTOP_NAV_WIDTH = "240px";

const DesktopNavItems = [
  {
    text: NavItems.Home,
    icon: <HomeOutlinedIcon />,
    selectedIcon: <HomeIcon />,
  },
  {
    text: NavItems.Search,
    icon: <SearchOutlinedIcon />,
    selectedIcon: (
      <SearchIcon
        style={{
          stroke: "currentcolor",
          strokeWidth: 1,
        }}
      />
    ),
  },
  {
    text: NavItems.Post,
    icon: <AddBoxOutlinedIcon />,
    selectedIcon: <AddBoxIcon />,
  },
  {
    text: NavItems.Notification,
    icon: <NotificationsOutlinedIcon />,
    selectedIcon: <NotificationsIcon />,
  },
  {
    text: NavItems.Profile,
    icon: <AccountCircleOutlinedIcon />,
    selectedIcon: <AccountCircleIcon />,
  },
];

const DesktopNav = () => {
  const [selectedPage, setSelectedPage] = useState<NavItems>(NavItems.Home);

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
        <Image src={svgLogo as string} alt="twistagram-logo" width={230} />
      </Box>
      <List>
        {DesktopNavItems.map(({ text, icon, selectedIcon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              disableRipple
              onClick={() => {
                setSelectedPage(text);
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
    </Drawer>
  );
};

export { DesktopNav };
