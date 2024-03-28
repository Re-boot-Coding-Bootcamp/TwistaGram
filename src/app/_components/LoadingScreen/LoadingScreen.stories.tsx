import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from "./LoadingScreen";

const meta = {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
