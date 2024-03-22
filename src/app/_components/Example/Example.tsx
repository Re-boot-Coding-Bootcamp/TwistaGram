"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface ExampleProps {
  title: string;
  onSubmit: (email: string, password: string) => void;
}

function Example({ title, onSubmit }: ExampleProps): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    onSubmit(email, password);
  };

  return (
    <Box display="flex">
      <Stack id="example-container" gap={2} width="300px">
        <Typography id="title" variant="h6">
          {title}
        </Typography>
        <TextField
          label="Email"
          name="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          name="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Login
        </Button>
      </Stack>

      <Stack id="example-inspect-container" gap={2} width="300px" pl={2}>
        <Box>
          <Typography>Email Value:</Typography>
          {email}
        </Box>
        <Box>
          <Typography>Password Value:</Typography>
          {password}
        </Box>
      </Stack>
    </Box>
  );
}

export { Example };
