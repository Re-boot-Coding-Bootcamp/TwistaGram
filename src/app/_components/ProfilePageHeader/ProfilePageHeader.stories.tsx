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
    name: "Jake Sully",
    username: "amNa'aviNow",
    bio: "My skin is Blue #PandoraLife",
    avatarUrl:
      "https://hips.hearstapps.com/hmg-prod/images/index-avatar3-1672251913.jpg?crop=0.502xw:1.00xh;0.210xw,0&resize=1200:*",
    onEditProfile: () => {
      alert("Edit profile button triggered");
    },
  },
};
