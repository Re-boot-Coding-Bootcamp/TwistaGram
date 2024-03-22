import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "@mui/material";
import { UserIcon } from "./UserIcon";

const meta = {
  title: "Components/UserIcon",
  component: UserIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"250px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof UserIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Jack",
    username: "@TemporaryUsernameJack",
  },
};
