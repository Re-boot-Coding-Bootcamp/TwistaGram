"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "..";

interface PostPreviewCardProps {
  name: string;
  username: string;
  postedTime: string;
  textContent?: string;
  imageUrl?: string;
}

const PostPreviewCard = ({
  name,
  username,
  postedTime,
  textContent,
  imageUrl,
}: PostPreviewCardProps): JSX.Element => {
    // const [first, setfirst] = useState(second)
  const onPostPreviewClick = () => {
    //to do later
  };
  return (
    <Box
      onClick={onPostPreviewClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Avatar size="large" />
      <Box>
        <Box
          display="flex"
          alignItems={textContent ? "center" : "flex-start"}
          gap={1}
        >
          <Typography sx={{ fontWeight: "medium" }}>{name}</Typography>
          <Typography sx={{ fontWeight: "medium" }}>{username}</Typography>
          <Typography sx={{ fontWeight: "medium" }}>{postedTime}</Typography>
        </Box>
        {textContent && (
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {textContent}
          </Typography>
        )}
      </Box>
      <Typography>
        {imageUrl}
      </Typography>
    </Box>
  );
};

export { PostPreviewCard };
