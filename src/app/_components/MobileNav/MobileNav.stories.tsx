import type { Meta, StoryObj } from "@storybook/react";

import { MobileNav } from "./MobileNav";

const meta = {
  title: "Navigation/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
