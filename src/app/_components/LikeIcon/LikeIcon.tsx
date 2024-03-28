"use client";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";

interface Props {
  onLike: () => void;
  number: number;
}

const LikeIcon = ({ onLike, number }: Props): JSX.Element => {
  const [liked, setLiked] = useState(false);
  const handelLike = () => {
    setLiked((prev) => !prev);
    onLike;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Tooltip title={liked ? "Unlike" : "Like"} placement="bottom" arrow>
        <IconButton color="error" aria-label="delete" onClick={handelLike}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Tooltip>
      <Typography color="error">{number}</Typography>
    </Box>
  );
};

export { LikeIcon };
