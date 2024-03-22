"use client";

import React, { useRef, useState } from "react";
import { Box, Backdrop, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface ImageViewerProps {
  imageUrl: string;
  triggerElement?: React.ReactNode;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  imageUrl,
  triggerElement,
}) => {
  const [open, setOpen] = useState(false);
  const backdropRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
        {triggerElement}
      </Box>

      {open && (
        <Backdrop
          open={open}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          onClick={handleClose}
          ref={backdropRef}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              m: 1,
              zIndex: (theme) => theme.zIndex.drawer + 2,
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="image-viewer"
              style={{
                maxHeight: "100vh",
                maxWidth: "100vw",
                aspectRatio: "auto",
                objectFit: "contain",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </Box>
        </Backdrop>
      )}
    </>
  );
};

export { ImageViewer };
