import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { CLientAuthenticated } from "./ClientAuthenticated";

interface Props {
  children: React.ReactNode;
}

const ServerAuthenticated = async ({ children }: Props) => {
  const session = await getServerAuthSession();

  return (
    <CLientAuthenticated isAuthenticated={!!session}>
      {children}
    </CLientAuthenticated>
  );
};

export { ServerAuthenticated };
