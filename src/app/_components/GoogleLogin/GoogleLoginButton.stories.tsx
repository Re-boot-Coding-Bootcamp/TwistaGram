import type { Meta, StoryObj } from "@storybook/react";

import { GoogleLoginButton } from "./GoogleLoginButton";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: GoogleLoginButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof GoogleLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    onLogin: () => {
      alert("Google login triggered");
    },
  },
};
