import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "~/theme";
import { Authenticated, MainLayout } from "./_layouts";
import { getServerAuthSession } from "~/server/auth";

export const metadata = {
  title: "Twistagram",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body id="body-id">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TRPCReactProvider>
              {session ? (
                <Authenticated>
                  <MainLayout>{children}</MainLayout>
                </Authenticated>
              ) : (
                children
              )}
            </TRPCReactProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
