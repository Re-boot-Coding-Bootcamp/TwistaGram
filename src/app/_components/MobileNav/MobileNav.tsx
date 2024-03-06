import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
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

enum NavItems {
  Home = "home",
  Search = "search",
  Post = "post",
  Notification = "notification",
  Account = "account",
}

const MobileNav = () => {
  const [selectedPage, setSelectedPage] = useState<NavItems>(NavItems.Home);

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
          setSelectedPage(newValue as NavItems);
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
        <BottomNavigationAction
          value={NavItems.Home}
          disableRipple
          icon={
            selectedPage === NavItems.Home ? <HomeIcon /> : <HomeOutlinedIcon />
          }
        />
        <BottomNavigationAction
          value={NavItems.Search}
          disableRipple
          icon={
            selectedPage === NavItems.Search ? (
              <SearchIcon
                style={{
                  strokeWidth: 1,
                  stroke: "currentColor",
                }}
              />
            ) : (
              <SearchOutlinedIcon />
            )
          }
        />
        <BottomNavigationAction
          value={NavItems.Post}
          disableRipple
          icon={
            selectedPage === NavItems.Post ? (
              <AddBoxIcon />
            ) : (
              <AddBoxOutlinedIcon />
            )
          }
        />
        <BottomNavigationAction
          value={NavItems.Notification}
          disableRipple
          icon={
            selectedPage === NavItems.Notification ? (
              <NotificationsIcon />
            ) : (
              <NotificationsOutlinedIcon />
            )
          }
        />
        <BottomNavigationAction
          value={NavItems.Account}
          disableRipple
          icon={
            selectedPage === NavItems.Account ? (
              <AccountCircleIcon />
            ) : (
              <AccountCircleOutlinedIcon />
            )
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export { MobileNav };
