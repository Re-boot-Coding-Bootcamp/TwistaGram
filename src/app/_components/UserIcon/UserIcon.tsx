import {
  Box,
  Popover,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "..";
import theme from "~/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// interface UserIconProps {
// //   name: string;
// //   username: string;
// }

function UserIcon(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null); //   const desktopLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  const desktopLargeScreen = true;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
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
    <Box
      sx={desktopLargeScreen ? desktopStyling : { cursor: "pointer" }}
      onClick={handleClick}
    >
      <Avatar size="medium" sx={{ mr: 1 }} />
      {desktopLargeScreen && (
        <>
          <Box id="name-username" width="65%">
            <Typography noWrap>Muradasdfasdfasdfasdfasdfasdf</Typography>
            <Typography noWrap variant="body2" color={theme.palette.grey[500]}>
              @Muradil_erkin_r
            </Typography>
          </Box>
          <MoreHorizIcon fontSize="small" />
        </>
      )}
      <Popover
        id="menu-items"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Box>
  );
}

export { UserIcon };
