import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePageHeader } from "./ProfilePageHeader";

const meta: Meta<typeof ProfilePageHeader> = {
  title: "Header/ProfilePageHeader",
  component: ProfilePageHeader,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof ProfilePageHeader> = {
  args: {
    user: {
      name: "John Doe",
      username: "johndoe",
      image: "https://via.placeholder.com/150",
      bio: "This is a bio",
      id: "abc123",
      email: "john.doe@gmail.com",
      emailVerified: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    onEditProfile: () => {
      alert("Edit profile button triggered");
    },
  },
};
