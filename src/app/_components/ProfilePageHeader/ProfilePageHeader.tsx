import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { contentText } from "./utility";
import { StyledText } from "../StyledText/StyledTextComponent";
import { Avatar } from "../Avatar";

interface ProfilePageHeaderProps {
  name: string;
  username: string;
  bio: string;
  onEditProfile: () => void;
}

const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({
  name,
  username,
  bio,

  onEditProfile,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const scaleRatio = isMobile ? 1.5 : 1;

  const cardMaxWidth = `${23.5 * scaleRatio}rem`;
  const avatarBackgroundSize = `${6 * scaleRatio}rem`;
  const avatarInnerSize = `${5.38 * scaleRatio}rem`;
  const fontSizeBase = `${16 * scaleRatio}px`;
  const fontSizeSmall = `${0.75 * scaleRatio}rem`;
  const buttonHeight = `${1.8 * scaleRatio}rem`;

  const splitTextByLength = (text: string, maxLength: number) => {
    const textLines = [];
    for (let i = 0; i < text.length; i += maxLength) {
      textLines.push(text.substring(i, i + maxLength));
    }
    return textLines;
  };

  const renderBio = (bioText: string) => {
    const maxLengthPerRow = isMobile ? 35 : 30;
    const maxLimitBio = isMobile ? 120 : 80;
    const bioContent = splitTextByLength(
      contentText(bioText, maxLimitBio),
      maxLengthPerRow
    );

    return bioContent.map((lineOfText, index) => (
      <Typography key={index} sx={{ fontSize: fontSizeSmall }}>
        <StyledText text={lineOfText} />
      </Typography>
    ));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.default,
          width: "100%",
          maxWidth: isMobile ? "100%" : cardMaxWidth,
          py: "2rem",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Typography
          sx={{ fontSize: fontSizeBase, fontWeight: "bold", mb: "1.5rem" }}
        >
          {contentText(username, 30)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            mb: "0.6rem",
          }}
        >
          <Box
            sx={{
              width: avatarBackgroundSize,
              height: avatarBackgroundSize,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              mr: "1.5rem",
              mb: "1rem",
            }}
          >
            <Avatar
              size="large"
              sx={{
                width: avatarInnerSize,
                height: avatarInnerSize,
              }}
            />
          </Box>
          <Box>
            <Typography
              noWrap
              sx={{ fontSize: fontSizeSmall, fontWeight: "bold" }}
            >
              {`${contentText(name, 15)} `}
              <Typography
                component="span"
                noWrap
                sx={{
                  fontSize: fontSizeSmall,
                  fontWeight: "bold",
                  color: "rgba(149, 149, 149, 0.9)",
                }}
              >
                @{contentText(username, 12)}
              </Typography>
            </Typography>
            {renderBio(bio)}
          </Box>
        </Box>
        <Button
          variant="outlined"
          onClick={onEditProfile}
          sx={{
            borderColor: theme.palette.common.black,
            color: theme.palette.common.black,
            fontSize: fontSizeSmall,
            borderRadius: "0.4rem",
            width: isMobile ? "100%" : "90%",
            maxWidth: "30rem",
            height: buttonHeight,
          }}
        >
          Edit Profile
        </Button>
      </Card>
    </Box>
  );
};

export { ProfilePageHeader };
