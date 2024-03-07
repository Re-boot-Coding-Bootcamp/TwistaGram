import type { Meta, StoryObj } from "@storybook/react";

import { FrontLayout } from "./FrontLayout";

const meta = {
  title: "Layout/FrontLayout",
  component: FrontLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FrontLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = { args: {} };
