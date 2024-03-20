"use client";

import {
  Box,
  Button,
  Fade,
  Paper,
  Popper,
  type SxProps,
  Typography,
  useMediaQuery,
  ClickAwayListener,
  Drawer,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "..";
import theme from "~/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface UserSectionIconProps {
  name: string;
  username: string;
  onLogOut: () => void;
}

function UserIcon({
  name,
  username,
  onLogOut,
}: UserSectionIconProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const isDesktopLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isTabletMediumScreen = useMediaQuery(
    theme.breakpoints.between("sm", "lg")
  );
  const isMobileSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggleDrawer(true);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleLogOut = () => {
    onLogOut();
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const desktopStyling: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    p: 1.5,
    borderRadius: 10,
    "&:hover": {
      bgcolor: theme.palette.grey[300],
    },
    cursor: "pointer",
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setOpen(false);
        }}
      >
        <Box
          sx={
            isDesktopLargeScreen
              ? desktopStyling
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }
          }
          onClick={handleClick}
        >
          <Avatar
            size={isMobileSmallScreen ? "small" : "medium"}
            sx={{ mr: 1 }}
          />
          {isDesktopLargeScreen && (
            <>
              <Box id="name-username" width="65%">
                <Typography noWrap>{name}</Typography>
                <Typography
                  noWrap
                  variant="body2"
                  color={theme.palette.grey[500]}
                >
                  {username}
                </Typography>
              </Box>
              <MoreHorizIcon fontSize="small" />
            </>
          )}
          {(isDesktopLargeScreen || isTabletMediumScreen) && (
            <Popper
              // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
              open={open}
              anchorEl={anchorEl}
              placement={isDesktopLargeScreen ? "top" : "right"}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Button
                      variant="text"
                      sx={{
                        p: 2,
                        cursor: "pointer",
                        width: "150",
                        fontWeight: "bold",
                      }}
                      onClick={handleLogOut}
                    >
                      {`Log Out ${username}`}
                    </Button>
                  </Paper>
                </Fade>
              )}
            </Popper>
          )}
        </Box>
      </ClickAwayListener>
      {/* placed the drawer outsize of the click away listener because it was causing issues with how drawer was closing */}
      {isMobileSmallScreen && (
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{ width: "200px", maxWidth: "200px" }}
        >
          <Box
            id="user-icon-header"
            display="flex"
            flexDirection="column"
            px={1}
            my={1}
          >
            <Avatar size="medium" />
            <Typography noWrap fontWeight="bold">
              {name}
            </Typography>
            <Typography noWrap variant="body2" color={theme.palette.grey[500]}>
              {username}
            </Typography>
          </Box>
          <Divider />
          <Button
            variant="text"
            sx={{ cursor: "pointer", px: 1, mt: 1, fontWeight: "bold" }}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Drawer>
      )}
    </>
  );
}

export { UserIcon };
