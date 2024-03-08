import * as React from "react";

interface MagicLinkEmailProps {
  url: string;
  host: string;
}

export const MagicLinkEmail: React.FC<Readonly<MagicLinkEmailProps>> = ({
  url,
  host,
}) => {
  return (
    <div>
      <p>Log in to {host}</p>
      <a href={url}>Click here to log in</a>
    </div>
  );
};
