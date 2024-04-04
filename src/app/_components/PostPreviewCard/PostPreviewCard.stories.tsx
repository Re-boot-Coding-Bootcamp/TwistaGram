import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PostPreviewCard } from "./PostPreviewCard";
import { Box } from "@mui/material";

const meta: Meta<typeof PostPreviewCard> = {
  title: "Authentication/PostPreviewCard",
  component: PostPreviewCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Box width={"500px"}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      content: "This is a post content",
      image: "https://via.placeholder.com/150",
      id: "1",
      createdAt: new Date(),
      createdBy: {
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        id: "1",
        username: "john_doe",
      },
    },
  },
};
