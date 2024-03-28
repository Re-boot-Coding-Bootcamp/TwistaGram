import type { Meta, StoryObj } from "@storybook/react";
import { LikeIcon } from "./LikeIcon";

const meta = {
  title: "Components/LikeIcon",
  component: LikeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LikeIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 100
  },
};
