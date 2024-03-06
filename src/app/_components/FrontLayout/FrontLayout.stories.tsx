import type { Meta, StoryObj } from "@storybook/react";

import { FrontLayout } from "./FrontLayout";

const meta = {
  title: "Layout/FrontLayout",
  component: FrontLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FrontLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = { args: {} };
