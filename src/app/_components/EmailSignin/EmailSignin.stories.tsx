import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { EmailSignin } from "./EmailSignin";
import { Box } from "@mui/material";

const meta = {
  title: "Authentication/EmailSignin",
  component: EmailSignin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof EmailSignin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (email: string) => {
      alert(`Submitting email: ${email} to the server`);
    },
  },
};
