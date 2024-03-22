import type { Meta, StoryObj } from "@storybook/react";

import { GoogleLoginButton } from "./GoogleLoginButton";
import { Box } from "@mui/material";
import React from "react";

const meta = {
  title: "Authentication/GoogleLoginButton",
  component: GoogleLoginButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof GoogleLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLogin: () => {
      alert("Google login triggered");
    },
  },
};
