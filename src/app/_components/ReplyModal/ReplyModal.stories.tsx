import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { ReplyModal } from "./ReplyModal";
import React from "react";

const meta = {
  title: "Authentication/ReplyModal",
  component: ReplyModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Box>
        {}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ReplyModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    handleReply: async (content: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(content);
          resolve();
        }, 1000);
      });
    },
  },
};
