import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/material";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "small",
    isClickable: false,
  },
};
export const Clickable: Story = {
  args: {
    size: "small",
    isClickable: true,
    onProfileClick: () => {
      alert("Profile has been clicked");
    },
  },
};
