import type { Meta, StoryObj } from "@storybook/react";

import { CheckYourEmailPage } from "./CheckYourEmailPage";

const meta = {
  title: "Layout/CheckYourEmailPage",
  component: CheckYourEmailPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CheckYourEmailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = { args: {} };
