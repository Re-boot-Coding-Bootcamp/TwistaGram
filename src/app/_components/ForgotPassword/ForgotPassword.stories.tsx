import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/material";
import ForgotPassword from "./ForgotPassword";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Authentication/ForgotPassword",
  component: ForgotPassword,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    email: { control: "text" },
  },
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    email: "",
    onSubmit: (email: string) => {
      alert(`Submitting email: ${email} to the server`);
    },
  },
};

export const Prefilled: Story = {
  args: {
    email: "muradil.erkin@re-boot.us",
    onSubmit: (email: string) => {
      alert(`Submitting email: ${email} to the server`);
    },
  },
};
