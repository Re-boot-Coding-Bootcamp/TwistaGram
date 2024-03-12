import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { LoginForm } from "./LoginForm";
import { Box } from "@mui/material";

const meta = {
  title: "Authentication/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { control: "function" },
    onForgotPasswordClick: { control: "function" },
  },
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (usernameOrEmail: string, password: string) => {
      alert(`Email: ${usernameOrEmail} and Password: ${password}`);
    },
    onForgotPasswordClick: () => {
      alert("Forgot Password was clicked!");
    },
  },
};
