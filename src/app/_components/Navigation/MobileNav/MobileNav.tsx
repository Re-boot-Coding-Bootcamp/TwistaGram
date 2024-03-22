"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { NavigationItems, Pages } from "~/constants";
import { useRouter } from "next/navigation";
import { UserIcon } from "../..";

const MobileNav = () => {
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);
  const router = useRouter();

  return (
    <>
      <Box display="flex">
        <Box sx={{ p: 1 }}>
          <UserIcon name="tempName" username="@tempUsername" />
        </Box>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          py: 1.5,
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
    </>
  );
};

export { MobileNav };
