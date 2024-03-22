import type { Meta, StoryObj } from "@storybook/react";

import { TabletNav } from "./TabletNav";

const meta = {
  title: "Navigation/TabletNav",
  component: TabletNav,
  tags: ["autodocs"],
} satisfies Meta<typeof TabletNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
