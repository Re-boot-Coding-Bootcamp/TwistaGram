"use client";

import React, { useState } from "react";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
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

  return (
    <>
      {open && (
        <Dialog open={open} fullScreen onClose={handleClose}>
          <DialogContent
            sx={{ backgroundColor: "black", padding: "0" }}
            // onClick={handleClose}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 9999,
                color: "white",
              }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
            <Box
              style={{
                width: "100vw",
                height: "100vh",
                overflow: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              // onClick={handleClose}
            >
              <Image
                src={imageUrl}
                alt="Image"
                fill={true}
                objectFit="contain"
                //onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </DialogContent>
        </Dialog>
      )}
      <Box>
        <Image
          src={imageUrl}
          alt="Default Image"
          width={150}
          height={150}
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }}
        />
      </Box>
    </>
  );
};

export { ImageViewer };
