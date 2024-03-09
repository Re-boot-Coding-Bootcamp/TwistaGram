import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

type AvatarSize = "small" | "medium" | "large";
interface AvatarProps extends MuiAvatarProps {
  size: AvatarSize;
  onProfileClick?: () => void;
}

const AvatarSizingMap: Record<AvatarSize, number> = {
  small: 24,
  medium: 40,
  large: 56,
};

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
