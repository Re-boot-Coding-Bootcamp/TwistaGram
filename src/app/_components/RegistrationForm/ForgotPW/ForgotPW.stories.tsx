import type { Meta, StoryObj } from "@storybook/react";
import { ForgotPW } from "./ForgotPW";
import { Box } from "@mui/material";

const meta = {
  title: "Authentication/ForgotPW",
  component: ForgotPW,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    email: { control: "text" },
    password: { control: "text" },
    onSubmit: { control: "function" },
  },
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ForgotPW>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    email: "",
    password: "",
    onSubmit: (email: string, password: string) => {
      alert(`Email: ${email} and Password ${password}`);
    },
  },
};
