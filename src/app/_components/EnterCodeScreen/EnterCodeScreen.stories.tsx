import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { EnterCodeScreen } from "./EnterCodeScreen";

const meta = {
  title: "Authentication/EnterCodeScreen",
  component: EnterCodeScreen,
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
} satisfies Meta<typeof EnterCodeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};