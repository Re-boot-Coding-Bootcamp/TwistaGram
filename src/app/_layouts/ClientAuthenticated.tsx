"use client";

import { usePathname, redirect } from "next/navigation";
import React from "react";
import { NavigationItems } from "~/constants";

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const CLientAuthenticated = async ({ isAuthenticated, children }: Props) => {
  const pathname = usePathname();

  const isProtectedRoute = NavigationItems.some(
    (item) => pathname === item.path
  );

  // is we're on a protected route and not authenticated, redirect to signin
  if (isProtectedRoute && !isAuthenticated) {
    redirect("/api/auth/signin");
  }

  return <>{children}</>;
};

export { CLientAuthenticated };
