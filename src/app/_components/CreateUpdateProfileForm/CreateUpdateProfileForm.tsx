"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { Alert, Box, InputAdornment, TextField } from "@mui/material";
import { Button } from "../Button";
import type { PartialUser, UpdateUserInput } from "~/types";

interface CreateUpdateProfileFormProps {
  user: PartialUser;
  profilePictureUploaded: boolean;
  setProfilePictureUploaded?: Dispatch<SetStateAction<boolean>>;
  onCancel: () => void;
  onSave: (user: UpdateUserInput) => void;
}

const CreateUpdateProfileForm = ({
  user,
  profilePictureUploaded,
  onCancel,
  onSave,
}: CreateUpdateProfileFormProps): JSX.Element => {
  const [name, setName] = useState(user.name ?? "");
  const [username, setUsername] = useState(user.username ?? "");
  const [bio, setBio] = useState(user.bio ?? "");
  const [errorName, setErrorName] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);

  const handleSave = () => {
    console.log(profilePictureUploaded);

    if (!name || !username || !user.image) {
      if (!name) {
        setErrorName(true);
      }
      if (!username) {
        setErrorUsername(true);
      }
      return;
    }
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
          error={errorName}
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setErrorName(false);
            setName(e.target.value);
          }}
          variant="outlined"
          sx={{
            "& input": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
          required
          helperText={errorName ? "This field is required" : undefined}
        />
        <TextField
          error={errorUsername}
          label="Username"
          InputProps={{
            startAdornment: <InputAdornment position="start">@</InputAdornment>,
          }}
          fullWidth
          value={username}
          onChange={(e) => {
            setErrorUsername(false);
            setUsername(e.target.value);
          }}
          variant="outlined"
          inputProps={{ maxLength: 15 }}
          required
          helperText={errorUsername ? "This field is required" : undefined}
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
      {!user.image && (
        <Alert severity="error">
          Profile Picture is required to save profile.
        </Alert>
      )}
      <Box display="flex" gap={2} mt={2}>
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
          text="Save"
          style={{ color: "white" }}
        />
      </Box>
    </Box>
  );
};

export { CreateUpdateProfileForm };
