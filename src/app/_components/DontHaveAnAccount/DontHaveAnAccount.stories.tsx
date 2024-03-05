import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { DontHaveAnAccount } from "./DontHaveAnAccount";

const meta = {
  title: "Authentication/DontHaveAnAccount",
  component: DontHaveAnAccount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof DontHaveAnAccount>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
