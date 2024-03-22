import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Example2 } from "./Example2";

const meta = {
  title: "Components/Example/Example2",
  component: Example2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Example2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
