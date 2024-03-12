import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "@mui/material";
import { ChangeProfilePhoto } from "./ChangeProfilePhoto";

const meta = {
  title: "Components/ChangeProfilePhoto",
  component: ChangeProfilePhoto,
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
} satisfies Meta<typeof ChangeProfilePhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
