import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Example } from "./Example";

const meta = {
  title: "Components/Example/Example1",
  component: Example,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sign In Form",
    onSubmit: (email: string, password: string) => {
      console.log("Logging in with email:", email, "and password:", password);
    },
  },
};
