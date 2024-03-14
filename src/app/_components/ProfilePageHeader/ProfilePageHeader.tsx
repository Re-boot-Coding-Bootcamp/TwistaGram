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
          backgroundColor: theme.palette.grey[50],
          width: "100%",
          py: 5,
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Typography
          sx={{
            fontSize: isMobile ? 22 : 16,
            fontWeight: "bold",
            mb: isMobile ? 4 : 2,
          }}
        >
          {contentText(username, 30)}
        </Typography>
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
            <Avatar size={isMobile ? "xlarge" : "large"} />
          </Box>
          <Box>
            <Typography
              noWrap
              sx={{ fontSize: isMobile ? 18 : 14, fontWeight: "bold" }}
            >
              {`${contentText(name, 15)} `}
              <Typography
                component="span"
                noWrap
                sx={{
                  fontSize: isMobile ? 18 : 14,
                  fontWeight: "bold",
                  color: theme.palette.grey[500],
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
      </Card>
    </Box>
  );
};

export { ProfilePageHeader };
