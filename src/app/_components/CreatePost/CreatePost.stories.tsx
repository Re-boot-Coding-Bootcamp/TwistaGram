import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CreatePost, type PostContent } from "./CreatePost";
import { Box } from "@mui/material";

const meta = {
  title: "Common/CreatePost",
  component: CreatePost,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box width={"500px"}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CreatePost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPostSubmit: (postContent: PostContent) => {
      console.log("Submitting post", postContent);

      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Post submitted");
          resolve();
        }, 3000);
      });
    },
  },
};
