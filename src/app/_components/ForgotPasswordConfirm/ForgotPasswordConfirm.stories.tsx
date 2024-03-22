import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "@mui/material";
import { ForgotPasswordConfirm } from "./ForgotPasswordConfirm";

const meta = {
  title: "Authentication/ForgotPasswordConfirm",
  component: ForgotPasswordConfirm,
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
} satisfies Meta<typeof ForgotPasswordConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
