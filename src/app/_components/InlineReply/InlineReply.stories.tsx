import React from "react";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { InlineReply } from "./InlineReply";

const meta: Meta<typeof InlineReply> = {
  title: "Components/InlineReply",
  component: InlineReply,
  decorators: [
    (Story) => (
      <Box width={"500px"}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type InlineReplyStory = StoryObj<typeof InlineReply>;

export const Default: InlineReplyStory = {
  args: {},
};
