import React from "react";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
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

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.grey[100],
        borderRadius: 0,
        p: 2,
      }}
      elevation={0}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar size={"xlarge"} src={user.image ?? undefined} />
        <Box flexGrow={1} width="100%">
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
            }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.grey[700],
            }}
          >
            {`@${user.username}`}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {user.bio}
          </Typography>
        </Box>
      </Box>
      {isCurrentUser && (
        <Box display="flex" gap={1} mt={1}>
          <Button color="primary" variant="outlined" onClick={onEditProfile}>
            Edit Profile
          </Button>
          <Button color="error" variant="outlined" onClick={onEditProfile}>
            Log Out
          </Button>
        </Box>
      )}
    </Card>
  );
};

export { ProfilePageHeader };
