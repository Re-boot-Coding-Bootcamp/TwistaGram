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
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ImageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const IMAGE_URL =
  "https://cdn.motor1.com/images/mgl/40mqEK/s3/porsche-911-gt3-rs-sets-road-america-production-car-record.jpg";

export const Default: Story = {
  args: {
    imageUrl: IMAGE_URL,
    triggerElement: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={IMAGE_URL} alt="sample image" height="100%" width="100%" />
    ),
  },
};

const VERTICAL_IMAGE_URL = "https://wallpapercave.com/wp/wp7206666.jpg";

export const VerticalImage: Story = {
  args: {
    imageUrl: VERTICAL_IMAGE_URL,
    triggerElement: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={VERTICAL_IMAGE_URL}
        alt="sample image"
        height="100%"
        width="100%"
      />
    ),
  },
};
