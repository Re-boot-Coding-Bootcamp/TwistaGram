import React from "react";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { NewMessageModal } from "./NewMessageModal";

// Mock users data
const mockUsers = [
  { id: "1", name: "John", username: "John" },
  { id: "2", name: "Wick", username: "Wick" },
  { id: "3", name: "Doe", username: "Doe" },
  { id: "4", name: "James", username: "James" },
  { id: "5", name: "Bond", username: "Bond" },
];

const meta: Meta<typeof NewMessageModal> = {
  title: "Components/NewMessageModal",
  component: NewMessageModal,
  decorators: [
    (Story) => (
      <Box width={"500px"}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type NewMessageModalStory = StoryObj<typeof NewMessageModal>;

export const Default: NewMessageModalStory = {
  args: {
    onSearch: (searchTerm: string) => {
      const filteredUsers = mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return Promise.resolve(filteredUsers);
    },
  },
};
