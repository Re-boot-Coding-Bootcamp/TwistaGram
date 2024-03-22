"use client";

import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "../Button";
import type { PartialUser, UpdateUserInput } from "~/types";

interface CreateUpdateProfileFormProps {
  user: PartialUser;
  onCancel: () => void;
  onSave: (user: UpdateUserInput) => void;
}

const CreateUpdateProfileForm = ({
  user,
  onCancel,
  onSave,
}: CreateUpdateProfileFormProps): JSX.Element => {
  const [name, setName] = useState(user.name ?? "");
  const [username, setUsername] = useState(user.username ?? "");
  const [bio, setBio] = useState(user.bio ?? "");

  const handleSave = () => {
    const updatedUser: UpdateUserInput = {
      name: name,
      username: username,
      bio: bio,
    };
    onSave(updatedUser);
  };

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
          required
        />
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          inputProps={{ maxLength: 15 }}
          required
        />
        <TextField
          label="Email"
          fullWidth
          value={user.email}
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
          onClick={handleSave}
          text="Done"
          style={{ color: "white" }}
        />
      </Box>
    </Box>
  );
};

export { CreateUpdateProfileForm };
