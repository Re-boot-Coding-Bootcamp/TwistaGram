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
    imageUrl:
      // "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png",
      "https://cdn.motor1.com/images/mgl/40mqEK/s3/porsche-911-gt3-rs-sets-road-america-production-car-record.jpg",
    // "https://e7.pngegg.com/pngimages/363/657/png-clipart-computer-icons-chromatography-50x50-chromatogram-miscellaneous-text-thumbnail.png",
  },
};
