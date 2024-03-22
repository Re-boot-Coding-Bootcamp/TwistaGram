"use client";

import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

// creating an avatarsize type so only these three options can be used in the size prop
type AvatarSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";
interface AvatarProps extends MuiAvatarProps {
  size: AvatarSize;
  onProfileClick?: () => void;
}
// object mapping for the avatar size
const AvatarSizingMap: Record<AvatarSize, number> = {
  small: 24,
  medium: 40,
  large: 56,
  xlarge: 95,
  xxlarge: 150,
};

function Avatar({
  size,
  onProfileClick,
  ...muiAvatarProps
}: AvatarProps): JSX.Element {
  return (
    <MuiAvatar
      {...muiAvatarProps}
      sx={{
        width: AvatarSizingMap[size],
        height: AvatarSizingMap[size],
        cursor: onProfileClick ? "pointer" : "unset",
      }}
      onClick={onProfileClick}
    />
  );
}

export { Avatar };
