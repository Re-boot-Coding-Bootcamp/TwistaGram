import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ProfilePreviewCard } from "./ProfilePreviewCard";
import { Box } from "@mui/material";

const meta: Meta<typeof ProfilePreviewCard> = {
  title: "Authentication/ProfilePreviewCard",
  component: ProfilePreviewCard,
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
    user: {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      id: "1",
      username: "john_doe",
    },
  },
};
