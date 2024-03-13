import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { contentText } from "./utility";
import { StyledText } from "../StyledText/StyledTextComponent";

interface ProfilePageHeaderProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string; // for demonstration purpose only
  onEditProfile: () => void;
}

const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({
  name,
  username,
  bio,
  avatarUrl,
  onEditProfile,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const scaleRatio = isMobile ? 1.5 : 1;

  const cardMaxWidth = `${23.5 * scaleRatio}rem`;
  const avatarSize = `${6 * scaleRatio}rem`;
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
          backgroundColor: "#FAFAFA",
          width: "100%",
          maxWidth: isMobile ? "100%" : cardMaxWidth,
          py: "2rem",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Typography
          sx={{ fontSize: fontSizeBase, fontWeight: "bold", mb: "15px" }}
        >
          {contentText(username, 30)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            mb: "0.63rem",
          }}
        >
          <Box
            sx={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              border: "1px solid rgba(60, 60, 67, 0.2)",
              mr: "1.5rem",
            }}
          >
            <Avatar
              src={avatarUrl}
              sx={{ width: avatarInnerSize, height: avatarInnerSize }}
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
            borderColor: "rgba(60, 60, 67, 0.2)",
            color: "black",
            fontSize: fontSizeSmall,
            backgroundColor: "white",
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
