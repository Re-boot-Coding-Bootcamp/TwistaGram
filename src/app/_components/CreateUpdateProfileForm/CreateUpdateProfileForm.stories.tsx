import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { CreateUpdateProfileForm } from "./CreateUpdateProfileForm";
import React from "react";

const meta = {
  title: "Authentication/CreateUpdateProfileForm",
  component: CreateUpdateProfileForm,
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
} satisfies Meta<typeof CreateUpdateProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    user: {
      id: "1",
      email: "example@test.com",
      name: "John Doe",
      username: "john-doe",
      bio: "John Doe Bio",
    },
    onCancel: () => {
      alert("Action Canceled");
    },
    onSave: () => {
      alert("Profile Created/Updated");
    },
  },
};
