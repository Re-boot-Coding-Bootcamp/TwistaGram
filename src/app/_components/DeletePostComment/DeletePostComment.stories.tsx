import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "@mui/material";
import { DeletePostComment } from "./DeletePostComment";

const meta = {
  title: "Authentication/DeletePostComment",
  component: DeletePostComment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof DeletePostComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "Post" },
};
