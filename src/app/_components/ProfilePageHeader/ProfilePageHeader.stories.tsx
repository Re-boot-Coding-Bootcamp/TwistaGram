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
    onEditProfile: () => {
      alert("Edit profile button triggered");
    },
  },
};
