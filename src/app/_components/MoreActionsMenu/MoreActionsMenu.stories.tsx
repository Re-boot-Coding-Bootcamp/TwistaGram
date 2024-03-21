import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Box } from "@mui/material";
import { MoreActionsMenu, type MoreActionsMenuProps } from "./MoreActionsMenu";
import { action } from "@storybook/addon-actions";

const meta: Meta<MoreActionsMenuProps> = {
  title: "Components/MoreActionsMenu",
  component: MoreActionsMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"500px"} bgcolor={"background.paper"} p={2}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<MoreActionsMenuProps>;

export const Default: Story = {
  args: {
    onDelete: action("delete action clicked"),
    onEdit: action("edit action clicked"),
  },
};
