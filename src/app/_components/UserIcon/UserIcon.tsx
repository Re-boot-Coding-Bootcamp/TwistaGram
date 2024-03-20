"use client";

import {
  Box,
  Fade,
  Paper,
  Popper,
  type SxProps,
  Typography,
  useMediaQuery,
  ClickAwayListener,
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

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    toggleDrawer(true);
    setAnchorEl(event.currentTarget);
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
    p: 1,
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
            isDesktop
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
            size={isDesktop ? "medium" : "small"}
            sx={isDesktop ? { mr: 1 } : undefined}
          />
          {isDesktop && (
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
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={isTablet ? "right" : undefined}
            transition
            sx={{ zIndex: "1200" }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      width: "150",
                      fontWeight: "bold",
                    }}
                    onClick={handleLogOut}
                  >
                    {`Log Out ${username}`}
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Box>
      </ClickAwayListener>
    </>
  );
}

export { UserIcon };
