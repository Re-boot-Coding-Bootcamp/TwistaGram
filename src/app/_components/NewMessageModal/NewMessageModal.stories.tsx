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
  { id: "11", name: "Jane", username: "JaneMuller" },
  { id: "12", name: "Brown", username: "ChrisBrown" },
  { id: "13", name: "Amy", username: "AmyClaudia" },
  { id: "14", name: "Paul", username: "PaulParker" },
  { id: "15", name: "Iris", username: "IrisAngel" },
  { id: "16", name: "Steven", username: "StevenRogers" },
  { id: "17", name: "Jack", username: "JackWilliam" },
  { id: "18", name: "Robin", username: "RobinHood" },
  { id: "19", name: "Sandra", username: "SandraBullock" },
  { id: "20", name: "Jenn", username: "JennLopez" },
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
    onClose: () => alert("Close clicked"),
    onNext: () => alert("Next clicked"),
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
        }, 2000);
      });
    },
  },
};
