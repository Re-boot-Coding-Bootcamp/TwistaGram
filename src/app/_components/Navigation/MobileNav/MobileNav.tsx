"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useContext } from "react";
import { NavigationItems, type Pages } from "~/constants";
import { useRouter } from "next/navigation";
import theme from "~/theme";
import { NavigationContext } from "~/app/_context";

const MobileNav = () => {
  const { selectedPage, setSelectedPage } = useContext(NavigationContext);
  const router = useRouter();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        py: 1.5,
        zIndex: theme.zIndex.drawer,
      }}
      elevation={3}
    >
      <BottomNavigation
        value={selectedPage}
        onChange={(_event, newValue) => {
          setSelectedPage(newValue as Pages);
        }}
        sx={{
          height: "auto",
          "& .MuiBottomNavigationAction-root": {
            minWidth: "auto",
          },
          "& .MuiBottomNavigationAction-root.Mui-selected": {
            color: "unset",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "1.7rem",
          },
        }}
      >
        {NavigationItems.map(({ text, icon, selectedIcon, path }) => (
          <BottomNavigationAction
            key={text}
            value={text}
            disableRipple
            icon={selectedPage === text ? selectedIcon : icon}
            onClick={() => router.push(path)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export { MobileNav };
