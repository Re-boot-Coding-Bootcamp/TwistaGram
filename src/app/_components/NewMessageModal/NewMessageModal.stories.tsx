import React from "react";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { NewMessageModal } from "./NewMessageModal";

const mockUsers = [
  { id: "1", name: "John", username: "JohnWick" },
  { id: "2", name: "Wick", username: "WickJohn" },
  { id: "3", name: "Doe", username: "DoeJohn" },
  { id: "4", name: "James", username: "JamesBond" },
  { id: "5", name: "Bond", username: "BondJames" },
  { id: "6", name: "Bob", username: "BobSponge" },
  { id: "7", name: "David", username: "DavidPark" },
  { id: "8", name: "Susan", username: "SusanKim" },
  { id: "9", name: "Charles", username: "CharlesDavis" },
  { id: "10", name: "Sam", username: "Sam" },
  { id: "11", name: "John 2", username: "JohnWick22" },
  { id: "12", name: "Wick 2", username: "WickJohn22" },
  { id: "13", name: "Doe 2", username: "DoeJohn22" },
  { id: "14", name: "James 2", username: "JamesBond22" },
  { id: "15", name: "Bond 2", username: "BondJames22" },
  { id: "16", name: "Bob 2", username: "BobSponge22" },
  { id: "17", name: "David 2", username: "DavidPark22" },
  { id: "18", name: "Susan 2", username: "SusanKim22" },
  { id: "19", name: "Charles 2", username: "CharlesDavis22" },
  { id: "20", name: "Sam 2", username: "Sam22" },
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
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredUsers = mockUsers.filter(
            (user) =>
              user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.username.toLowerCase().includes(searchTerm.toLowerCase())
          );
          const firstFiveFilteredUsers = filteredUsers.slice(0, 5);
          resolve(firstFiveFilteredUsers);
        }, 3000);
      });
    },
  },
};
