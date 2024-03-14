import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Authenticated = async ({ children }: Props) => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <>{children}</>;
};

export { Authenticated };
