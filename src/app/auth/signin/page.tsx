import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { SignInPage } from "~/app/_components";

export default async function SignIn() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/");
  }

  return <SignInPage />;
}
