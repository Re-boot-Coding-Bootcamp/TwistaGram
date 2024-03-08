import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

interface AvatarProps extends MuiAvatarProps {
  size: "small" | "medium" | "large";
  onProfileClick?: () => void;
}

const avatarSize = [
  { text: "small", value: 24 },
  { text: "medium", value: 40 },
  { text: "large", value: 56 },
];

function Avatar({
  size,
  onProfileClick,
  ...muiAvatarProps
}: AvatarProps): JSX.Element {
  {
    return (
      <>
        {avatarSize.map(({ text, value }) => {
          return (
            text === size && (
              <MuiAvatar
                sx={{
                  width: value,
                  height: value,
                  cursor: onProfileClick !== undefined ? "pointer" : "",
                }}
                onClick={onProfileClick}
                {...muiAvatarProps}
              />
            )
          );
        })}
      </>
    );
  }
}

export { Avatar };
