import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PostPreviewCard } from "./PostPreviewCard";
import { Box } from "@mui/material";

const meta: Meta<typeof PostPreviewCard> = {
    title: "Authentication/PostPreviewCard",
    component: PostPreviewCard,
    parameters: {
      layout: "centered",
    },
    decorators: [
      (Story) => (
        <Box width={"500px"}>
          <Story />
        </Box>
      ),
    ],
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {
    args: {
      name: "Ayy",
      username: "abc",
      postedTime: "1hr ago",
      // textContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique culpa, praesentium distinctio explicabo ratione vel sed magnam, debitis, iusto sapiente quam dignissimos minima odio nisi perspiciatis sit itaque? Earum."
      imageUrl: "hello.jpg"
      },
    };
  
  