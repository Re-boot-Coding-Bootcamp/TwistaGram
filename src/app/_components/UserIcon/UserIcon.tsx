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
import React, { useMemo, useState } from "react";
import { Avatar, Button } from "..";
import theme from "~/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { api } from "~/trpc/react";

function UserIcon(): JSX.Element {
  const { data: user, isFetching } = api.user.getCurrentUser.useQuery(
    undefined,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const desktopStyling: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    p: 1,
    gap: 1,
    borderRadius: 10,
    "&:hover": {
      bgcolor: theme.palette.grey[300],
    },
    cursor: "pointer",
  };

  const popperPlacement = useMemo(() => {
    switch (true) {
      case isDesktop:
        return "top";
      case isTablet:
        return "right";
      default:
        return "bottom";
    }
  }, [isDesktop, isTablet]);

  if (!user || isFetching) {
    return <></>;
  }

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
            src={user.image ?? undefined}
          />
          {isDesktop && (
            <>
              <Box id="name-username" width="65%">
                <Typography noWrap>{user.name}</Typography>
                <Typography
                  noWrap
                  variant="body2"
                  color={theme.palette.grey[500]}
                >
                  {`@${user.username}`}
                </Typography>
              </Box>
              <MoreHorizIcon fontSize="small" />
            </>
          )}
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={popperPlacement}
            transition
            sx={{ zIndex: "1200" }}
            modifiers={[
              {
                name: "offset",
                options: {
                  offset: [0, 10],
                },
              },
            ]}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  sx={{
                    p: 1,
                    px: 0,
                    minWidth: "130px",
                  }}
                >
                  <Button
                    component={Link}
                    href="/api/auth/signout"
                    startIcon={<LogoutIcon />}
                    variant="text"
                    text="Log Out"
                    color="inherit"
                  />
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
