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
      user: {
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        id: "1",
        username: "john_doe",
      },
      id: "1",
      type: "LIKE",
      referenceId: "1",
      read: false,
      createdAt: new Date(),
      userId: "1",
    },
  },
};
