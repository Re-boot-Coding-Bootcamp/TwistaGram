import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { ImageViewer } from "./ImageViewer";
import { Box } from "@mui/material";

const meta = {
  title: "Common/ImageViewer",
  component: ImageViewer,
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
} satisfies Meta<typeof ImageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/150",
  },
};
