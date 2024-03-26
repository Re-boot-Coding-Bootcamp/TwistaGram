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
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
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
            border: `1px solid ${theme.palette.grey[400]}`,
            mr: isMobile ? 4 : 3,
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
            sx={{ fontSize: isMobile ? 18 : 14, fontWeight: "bold" }}
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
          {renderBio(user.bio ?? "")}
        </Box>
      </Box>
      {isCurrentUser && (
        <Button
          variant="outlined"
          onClick={onEditProfile}
          sx={{
            borderColor: theme.palette.grey[900],
            color: theme.palette.grey[900],
            fontSize: isMobile ? 16 : 12,
            maxWidth: isMobile ? 440 : 320,
            height: isMobile ? 44 : 30,
            backgroundColor: "#fff",
          }}
        >
          Edit Profile
        </Button>
      )}
    </Card>
  );
};

export { ProfilePageHeader };
