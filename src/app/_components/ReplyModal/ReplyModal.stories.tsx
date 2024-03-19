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
      <Box width={"350px"}>
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
    open: true,
    name: "Muzappar",
    userName: "SlowGTI",
  },
};
