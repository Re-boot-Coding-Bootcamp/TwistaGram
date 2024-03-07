import type { Meta, StoryObj } from "@storybook/react";

import { RegistrationForm } from "./RegistrationForm";
import { Box } from "@mui/material";

const meta = {
  title: "Authentication/RegistrationForm",
  component: RegistrationForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"350px"}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (email: string) => {
      alert(`Submitting email: ${email} to the server`);
    },
  },
};
