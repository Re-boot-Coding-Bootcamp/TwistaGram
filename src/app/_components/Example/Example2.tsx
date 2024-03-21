"use client";

import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "..";

function Example2(): JSX.Element {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran", count, secondCount);
  }, [count, secondCount]);

  return (
    <Stack id="Example2-container" gap={2} width="300px">
      <Typography id="title" variant="h6">
        Counter
      </Typography>
      <Button text="Click me 1" onClick={() => setCount(count + 1)} />
      <Typography>{`The button 1 has been clicked on for ${count} times`}</Typography>
      <Button
        text="Click me 2"
        onClick={() => setSecondCount(secondCount + 1)}
      />
      <Typography>{`The button 2 has been clicked on for ${secondCount} times`}</Typography>
    </Stack>
  );
}

export { Example2 };
