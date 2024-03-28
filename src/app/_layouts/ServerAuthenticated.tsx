import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { CLientAuthenticated } from "./ClientAuthenticated";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  children: React.ReactNode;
}

const ServerAuthenticated = async ({ children }: Props) => {
  noStore();
  const session = await getServerAuthSession();

  return (
    <CLientAuthenticated isAuthenticated={!!session}>
      {children}
    </CLientAuthenticated>
  );
};

export { ServerAuthenticated };
