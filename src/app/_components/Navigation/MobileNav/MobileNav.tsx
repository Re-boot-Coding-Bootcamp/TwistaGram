import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useState } from "react";
import { NavigationItems, Pages } from "~/constants";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);
  const router = useRouter();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        pb: 4,
        pt: "10.25px",
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