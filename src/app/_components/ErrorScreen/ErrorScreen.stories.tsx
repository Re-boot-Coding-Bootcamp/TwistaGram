import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorScreen } from "./ErrorScreen";

const meta = {
  title: "Components/ErrorScreen",
  component: ErrorScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ErrorScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
