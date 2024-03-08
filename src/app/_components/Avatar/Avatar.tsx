import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

type ArraySize = "small" | "medium" | "large";
interface AvatarProps extends MuiAvatarProps {
  size: ArraySize;
  onProfileClick?: () => void;
}

const AvatarSizingMap = { small: 24, medium: 40, large: 56 };

function Avatar({
  size,
  onProfileClick,
  ...muiAvatarProps
}: AvatarProps): JSX.Element {
  {
    return (
      <MuiAvatar
        sx={{
          width: AvatarSizingMap[size],
          height: AvatarSizingMap[size],
          cursor: onProfileClick ? "pointer" : "unset",
        }}
        onClick={onProfileClick}
        {...muiAvatarProps}
      />
    );
  }
}

export { Avatar };
