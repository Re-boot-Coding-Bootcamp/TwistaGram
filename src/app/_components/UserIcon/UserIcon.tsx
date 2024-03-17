import { Box, SxProps, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Avatar } from "..";
import theme from "~/theme";

// interface UserIconProps {
// //   name: string;
// //   username: string;
// }

function UserIcon(): JSX.Element {
  const desktopLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const desktopStyling: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    bgcolor: "gray",
    p: 1,
  };

  return (
    <Box sx={desktopLargeScreen ? desktopStyling : undefined}>
      <Avatar size="medium" sx={{ mr: 1 }} />
      {desktopLargeScreen && (
        <>
          <Box id="name-username" width="65%">
            <Typography noWrap>
              Muradd'flkas'pokposdkfpoqkwdpofkpokjhkjljhklhjlhkjlh;
            </Typography>
            <Typography noWrap>@Muradil_erkin_r</Typography>
          </Box>
          <Typography ml="1" color="white" fontWeight="700">
            ...
          </Typography>
        </>
      )}
    </Box>
  );
}

export { UserIcon };
