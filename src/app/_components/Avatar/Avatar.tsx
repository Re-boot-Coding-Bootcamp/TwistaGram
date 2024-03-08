import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

type size = "small" | "medium" | "large";

interface AvatarProps extends MuiAvatarProps {
  size: size;
  isClickable: boolean;
  onProfileClick?: () => void;
}

function Avatar({
  size,
  isClickable,
  onProfileClick,
  ...muiAvatarProps
}: AvatarProps): JSX.Element {
  const handleProfileClick = () => {
    if (isClickable && onProfileClick) {
      onProfileClick();
    }
  };
  let heightAndWidth = 0;
  switch (size) {
    case "small":
      heightAndWidth = 24;
      break;
    case "medium":
      heightAndWidth = 40;
      break;
    case "large":
      heightAndWidth = 56;
      break;
  }

  if (isClickable) {
    return (
      <MuiAvatar
        sx={{ width: heightAndWidth, height: heightAndWidth, cursor: "pointer" }}
        {...muiAvatarProps}
        onClick={handleProfileClick}
      ></MuiAvatar>
    );
  }
  return (
    <MuiAvatar
      sx={{ width: heightAndWidth, height: heightAndWidth }}
      {...muiAvatarProps}
    ></MuiAvatar>
  );
}

export { Avatar };
