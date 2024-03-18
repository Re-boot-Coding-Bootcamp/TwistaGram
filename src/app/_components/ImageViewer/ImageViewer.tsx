"use client";

import React, { useState } from "react";
import { Box, Backdrop, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";

interface ImageViewerProps {
  imageUrl: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = () => {
    setOpen(true);
  };

  return (
    <>
      {open && (
        <Backdrop
          open={open}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "red",
          }}
          onClick={handleClose}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={imageUrl}
              alt="Image"
              fill={true}
              objectFit="contain"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Backdrop>
      )}
      <Box>
        <Image
          src={imageUrl}
          alt="Default Image"
          width={250}
          height={150}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
      </Box>
    </>
  );
};

export { ImageViewer };
