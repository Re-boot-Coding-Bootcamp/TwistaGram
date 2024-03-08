import { default as MuiAvatar } from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

type size = "small" | "medium" | "large";

interface AvatarProps extends MuiAvatarProps {
  size: size;
  src?: string;
  alt?: string;
}

function Avatar({
  size,
  src,
  alt,
  ...muiAvatarProps
}: AvatarProps): JSX.Element {
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
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={{ width: heightAndWidth, height: heightAndWidth }}
      {...muiAvatarProps}
    ></MuiAvatar>
  );
}

export { Avatar };
