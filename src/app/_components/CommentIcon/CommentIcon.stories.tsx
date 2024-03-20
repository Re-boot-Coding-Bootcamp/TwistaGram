import type { Meta, StoryObj } from "@storybook/react";
import { CommentIcon } from "./CommentIcon";

const meta = {
  title: "Common/CommentIcon",
  component: CommentIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommentIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
