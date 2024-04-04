import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NotificationCard } from "./NotificationCard";
import { Box } from "@mui/material";

const meta: Meta<typeof NotificationCard> = {
  title: "Authentication/NotificationCard",
  component: NotificationCard,
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
    notification: {
      id: "1",
      type: "like",
      read: false,
      createdAt: new Date(),
      forUserId: "1",
      fromUserId: "2",
      postId: "3",
      post: {
        content: "This is a post content",
        image: "https://via.placeholder.com/150",
        id: "3",
      },
      fromUser: {
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        id: "2",
      },
    },
  },
};
