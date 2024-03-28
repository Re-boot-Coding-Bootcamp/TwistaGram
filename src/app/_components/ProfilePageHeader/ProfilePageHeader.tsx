import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { contentText } from "./contentText";
import { StyledText } from "../StyledText/StyledTextComponent";
import { Avatar } from "../Avatar";
import type { User } from "@prisma/client";

interface ProfilePageHeaderProps {
  user: User;
  isCurrentUser?: boolean;
  onEditProfile?: () => void;
}

const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({
  user,
  onEditProfile,
  isCurrentUser = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const maxWidth = isMobile ? 440 : 320;

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
      <Typography key={index} sx={{ fontSize: isMobile ? 16 : 12 }}>
        <StyledText text={lineOfText} />
      </Typography>
    ));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.grey[50],
        width: "100%",

        py: 5,
        borderRadius: 0,
        background: `linear-gradient(to top, #fff, #fff 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main})`,
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth,
          mb: isMobile ? 4 : 2,
        }}
      >
        <Box
          sx={{
            width: isMobile ? 106 : 66,
            height: isMobile ? 106 : 66,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.grey[50],
            mr: isMobile ? 4 : 3,
            mt: isMobile ? 9 : 7,
          }}
        >
          <Avatar
            size={isMobile ? "xlarge" : "large"}
            src={user.image ?? undefined}
          />
        </Box>
        <Box>
          <Typography
            noWrap
            sx={{
              fontSize: isMobile ? 18 : 14,
              fontWeight: "bold",
              mt: isMobile ? 11 : 7,
            }}
          >
            {user.name}
          </Typography>
          <Typography
            component="span"
            noWrap
            sx={{
              fontSize: isMobile ? 18 : 14,
              fontWeight: "bold",
              color: theme.palette.grey[500],
            }}
          >
            {`@${user.username}`}
          </Typography>
          <Box sx={{ width: 95 }}>{renderBio(user.bio ?? "")}</Box>
        </Box>
      </Box>
      {isCurrentUser && (
        <Button
          variant="outlined"
          onClick={onEditProfile}
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            fontSize: isMobile ? 12 : 6,
            width: isMobile ? 95 : 50,
            height: isMobile ? 44 : 30,
          }}
        >
          Edit Profile
        </Button>
      )}
    </Card>
  );
};

export { ProfilePageHeader };
