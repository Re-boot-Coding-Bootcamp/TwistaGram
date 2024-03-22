import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { Box } from "@mui/material";

const meta = {
  title: "Authentication/ForgotPasswordForm",
  component: ForgotPasswordForm,
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
} satisfies Meta<typeof ForgotPasswordForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onResetPassword: (email: string) => {
      alert("Resetting password for " + email);
    },
  },
};
