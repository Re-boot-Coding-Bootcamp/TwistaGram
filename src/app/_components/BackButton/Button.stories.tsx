import type { Meta, StoryObj } from "@storybook/react";

import { BackButton } from "./BackButton";

const meta = {
  title: "Common/BackButton",
  component: BackButton,
  tags: ["autodocs"],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Click me",
  },
};
