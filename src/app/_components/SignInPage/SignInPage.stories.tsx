import type { Meta, StoryObj } from "@storybook/react";

import { SignInPage } from "./SignInPage";

const meta = {
  title: "Layout/SignInPage",
  component: SignInPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SignInPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = { args: {} };
