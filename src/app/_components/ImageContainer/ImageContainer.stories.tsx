import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ImageContainer } from "./ImageContainer";
import { Box } from "@mui/material";

const meta = {
  title: "Common/ImageContainer",
  component: ImageContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box
        width="500px"
        sx={{ border: "1px solid black" }}
        id="image-container-container"
      >
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ImageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl:
      "https://i.pinimg.com/originals/b4/60/26/b46026f6d91a71cacac0e00dbdf6acd4.png",
    onCloseImage: () => {
      alert("Close has been clicked");
    },
  },
};
