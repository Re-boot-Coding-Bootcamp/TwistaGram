import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Example3 } from "./Example3";

const meta = {
  title: "Components/Example/Example3",
  component: Example3,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Example3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
