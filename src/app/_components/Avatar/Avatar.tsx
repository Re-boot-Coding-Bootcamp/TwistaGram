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
  // this function will be called if the component is set to clickable
  const handleProfileClick = () => {
    // this is used to handle undefined issue with onProfileClick since it will not be defined if isClickable is not true
    if (isClickable && onProfileClick) {
      onProfileClick();
    }
  };
  // this will handle the sizing based on the size provided in the props
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

  //component that is clickable
  if (isClickable) {
    return (
      <MuiAvatar
        sx={{
          width: heightAndWidth,
          height: heightAndWidth,
          cursor: "pointer",
        }}
        {...muiAvatarProps}
        onClick={handleProfileClick}
      ></MuiAvatar>
    );
  }
  // component that is not clickable
  return (
    <MuiAvatar
      sx={{ width: heightAndWidth, height: heightAndWidth }}
      {...muiAvatarProps}
    ></MuiAvatar>
  );
}

export { Avatar };
