import type { Meta, StoryObj } from "@storybook/react";

import { MobileNav } from "./MobileNav";

const meta = {
  title: "Navigation/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  argTypes: {
    // email: { control: "text" },
  },
  // decorators: [
  //   (Story) => (
  //     <Box width={"350px"}>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </Box>
  //   ),
  // ],
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
