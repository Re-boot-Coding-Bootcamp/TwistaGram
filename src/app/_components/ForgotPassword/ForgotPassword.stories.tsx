import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "@mui/material";
import { ForgotPassword } from "./ForgotPassword";

const meta = {
  title: "Authentication/ForgotPassword",
  component: ForgotPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
