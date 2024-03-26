"use client";

import { Avatar, Box } from "@mui/material";
import React from "react";

interface PostPreviewCardProps {
    name: string;
    username: string;
  postedTime: string;
  onProfile: () => void;
}

const PostPreviewCard: React.FC<PostPreviewCardProps> = ({
  name,
  username,
  postedTime,
}) => {
  const theme = useTheme();

};

return (
    <Box display="flex" flexDirection="column">
        
    </Box>
  );
};

       



export { PostPreviewCard };
