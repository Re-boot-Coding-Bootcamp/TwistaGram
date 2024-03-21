import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Box } from "@mui/material";
import { ViewPost } from "./ViewPost";

const meta: Meta<typeof ViewPost> = {
  title: "Components/ViewPost",
  component: ViewPost,
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
    name: "John Doe",
    username: "johndoe",
    currentUserId: "johndoe",
    postedTime: "1hr",
    textContent:
      "Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected in 42 tankōbon volumes by its publisher Shueisha.",
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Dragon-Ball-Z-Cover-Wallpaper-Cast.jpg",

    onMore: () => alert("More clicked"),
    onProfile: () => alert("Profile clicked"),
    onImage: () => alert("Image clicked"),
    onDelete: () => alert("Delete clicked"),
  },
};

export const VerticalImage: Story = {
  args: {
    name: "John Doe",
    username: "johndoe",
    currentUserId: "johndoe",
    postedTime: "1hr ago",
    textContent:
      "Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected in 42 tankōbon volumes by its publisher Shueisha.",
    imageUrl:
      "https://64.media.tumblr.com/b691f976f0687fe787f2a5fdc9b0c42e/db9974b154294c93-a3/s1280x1920/5ae0c6bf0ec3b2e0533f7d1339cd30a2e4ad689d.jpg",

    onMore: () => alert("More clicked"),
    onProfile: () => alert("Profile clicked"),
    onImage: () => alert("Image clicked"),
    onDelete: () => alert("Delete clicked"),
  },
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    imageUrl: "",
  },
};

export const NotCurrentUser: Story = {
  args: {
    ...Default.args,

    currentUserId: "12345",
  },
};