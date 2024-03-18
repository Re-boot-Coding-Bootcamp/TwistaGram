import type { Meta, StoryObj } from "@storybook/react";
<<<<<<< HEAD
=======

>>>>>>> origin/dev
import React from "react";
import { Box } from "@mui/material";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unclickable: Story = {
  args: {
    size: "small",
    onProfileClick: undefined,
  },
};
export const Clickable: Story = {
  args: {
    size: "small",
    onProfileClick: () => {
      alert("Avatar has been clicked");
    },
  },
};
