import type { Meta, StoryObj } from "@storybook/react";
import { ForgotPW } from "./ForgotPW";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Authentication/ForgotPW",
  component: ForgotPW,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    email: { control: "text" },
    password: {control : "text"},
    onSubmit: {control: "function"}
  },
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ForgotPW>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    email: "",
    password: "",
    onSubmit: (email: string, password: string) => {
      alert(`Email: ${email} and Password ${password}`);
      alert(`Email: ${email} and Password: ${password}`);
    },
  },
};
export const Prefilled: Story = {
  args: {
    email: "totalrealemail123@gmail.com",
    password: "Password1234",
    onSubmit: (email: string, password: string) => {
      alert(`Email: ${email} and Password ${password}`);
      alert(`Email: ${email} and Password: ${password}`);
    },
  },
};
