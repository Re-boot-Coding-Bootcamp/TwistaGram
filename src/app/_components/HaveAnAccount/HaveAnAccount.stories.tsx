import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { HaveAnAccount } from "./HaveAnAccount";
import React from "react";

const meta: Meta = {
  title: "Authentication/HaveAnAccount",
  component: HaveAnAccount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof HaveAnAccount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
