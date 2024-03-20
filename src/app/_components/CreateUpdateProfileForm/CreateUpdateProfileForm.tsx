"use client";

import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "../Button";

interface CreateUpdateProfileFormProps {
  onCancel: () => void;
  onSave: () => void;
}

const CreateUpdateProfileForm = ({
  onCancel,
  onSave,
}: CreateUpdateProfileFormProps): JSX.Element => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  return (
    <Box id="create-update-profile-form-container">
      <Box display={"flex"} flexDirection={"column"} marginBottom={2} gap={2}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          sx={{
            "& input": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
        />
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value.slice(0, 15))}
          variant="outlined"
          inputProps={{ maxLength: 15 }}
        />
        <TextField
          label="Email"
          fullWidth
          value="muzappar.erkin0122@gmail.com"
          disabled
          variant="outlined"
          required
        />
        <TextField
          label="Bio"
          fullWidth
          multiline
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box display="flex" gap={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onCancel}
          text="Cancel"
          style={{ backgroundColor: "white" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={onSave}
          text="Done"
          style={{ color: "white" }}
        />
      </Box>
    </Box>
  );
};

export { CreateUpdateProfileForm };
