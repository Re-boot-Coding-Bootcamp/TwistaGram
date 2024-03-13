import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

enum Pages {
  Home = "Home",
  Search = "Search",
  Post = "Post",
  Notification = "Notification",
  Profile = "Profile",
}

const NavigationItems = [
  {
    text: Pages.Home,
    icon: <HomeOutlinedIcon />,
    selectedIcon: <HomeIcon />,
    path: "/",
  },
  {
    text: Pages.Search,
    icon: <SearchOutlinedIcon />,
    selectedIcon: (
      <SearchIcon
        style={{
          stroke: "currentcolor",
          strokeWidth: 1,
        }}
      />
    ),
    path: "/search",
  },
  {
    text: Pages.Post,
    icon: <AddBoxOutlinedIcon />,
    selectedIcon: <AddBoxIcon />,
    path: "/post",
  },
  {
    text: Pages.Notification,
    icon: <NotificationsOutlinedIcon />,
    selectedIcon: <NotificationsIcon />,
    path: "/notification",
  },
  {
    text: Pages.Profile,
    icon: <AccountCircleOutlinedIcon />,
    selectedIcon: <AccountCircleIcon />,
    path: "/profile",
  },
];

export { Pages, NavigationItems };
