"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "..";
import { type ChangeEvent, useEffect, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// TODO: use a modal to render preview and confirm upload
const ChangeProfilePhoto = () => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);

    if (e.target.files) {
      const firstFile = e.target.files[0];
      setFile(firstFile);
    }
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
      <Avatar size="xlarge" src={previewUrl} />
      <Button
        component="label"
        role={undefined}
        variant="text"
        tabIndex={-1}
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        Change Profile Photo
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
    </Box>
  );
};

export { ChangeProfilePhoto };
