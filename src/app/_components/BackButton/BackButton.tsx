"use client";

import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";


const BackButton = (): JSX.Element => {
    const router = useRouter();
    return (
    <Typography
      onClick={() => {
        router.back();
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "8px",
        ml: 1,
        mt: 1,
        maxWidth: "24px",
      }}
    >
      <ArrowBackIosIcon fontSize="inherit" /> Back
    </Typography>
  );
};

export { BackButton };
