import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

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

  const contentText = (text: string | undefined | null, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const splitTextByLength = (text: string, maxLength: number) => {
    const textLines = [];
    for (let i = 0; i < text.length; i += maxLength) {
      textLines.push(text.substring(i, i + maxLength));
    }
    return textLines;
  };

  const styleTaggedText = (text: string) => {
    const wordsWithTags = text.split(/(\s+)/);

    return (
      <>
        {wordsWithTags.map((word, index) =>
          word.startsWith("@") || word.startsWith("#") ? (
            <span key={index} style={{ color: theme.palette.primary.main }}>
              {word}
            </span>
          ) : (
            word
          )
        )}
      </>
    );
  };

  const renderBio = (bio: string) => {
    const maxLengthPerRow = 30;
    const maxLimitBio = contentText(bio, 80);
    const bioContent = splitTextByLength(maxLimitBio, maxLengthPerRow);

    return bioContent.map((lineOfText, index) => (
      <Typography key={index} sx={{ fontSize: "12px" }}>
        {styleTaggedText(lineOfText)}
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
          width: "375px",
          height: "250px",
          p: "20px",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: "15px" }}>
          {contentText(username, 30)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            mb: "5px",
          }}
        >
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              border: "1px solid rgba(60, 60, 67, 0.2)",
              mr: "10px",
            }}
          >
            <Avatar src={avatarUrl} sx={{ width: 86, height: 86 }} />
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "bold", mb: "8px" }}
            >
              {`${contentText(name, 15)} `}
              <Typography
                component="span"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "rgba(149, 149, 149, 0.9)",
                }}
              >
                @{contentText(username, 12)}
              </Typography>
            </Typography>
            {renderBio(bio)}
          </CardContent>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={onEditProfile}
            sx={{
              borderColor: "rgba(60, 60, 67, 0.2)",
              color: "black",
              fontSize: "13px",
              backgroundColor: "white",
              borderRadius: "6px",
              width: 343,
              height: 29,
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export { ProfilePageHeader };
