import type { Meta, StoryObj } from "@storybook/react";

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
    email: { control: "text" },
    password: { control: "text" },
    onSubmit: { control: "function" },
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
    email: "",
    password: "",
    onSubmit: (email: string, password: string) => {
      alert(`Email: ${email} and Password: ${password}`);
    },
    onForgotPasswordClick: () => {
      alert("Forgot Password was clicked!");
    },
  },
};

export const Prefilled: Story = {
  args: {
    email: "totalrealemail123@gmail.com",
    password: "Password1234",
    onSubmit: (email: string, password: string) => {
      alert(`Email: ${email} and Password: ${password}`);
    },
    onForgotPasswordClick: () => {
      alert("Forgot Password was clicked!");
    },
  },
};
