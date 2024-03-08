import type { Meta, StoryObj } from "@storybook/react";

import { DesktopNav } from "./DesktopNav";

const meta = {
  title: "Navigation/DesktopNav",
  component: DesktopNav,
  tags: ["autodocs"],
} satisfies Meta<typeof DesktopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
