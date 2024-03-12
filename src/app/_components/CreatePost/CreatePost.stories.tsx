import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CreatePost } from "./CreatePost"
import { Box } from "@mui/material";

const meta = {
  title: "Common/CreatePost",
  component: CreatePost,
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
} satisfies Meta<typeof CreatePost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Click me",
  },
};
