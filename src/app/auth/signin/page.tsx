import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { SignInPage } from "~/app/_components";
import { unstable_noStore as noStore } from "next/cache";

export default async function SignIn() {
  noStore();
  const session = await getServerAuthSession();

  if (session) {
    redirect("/");
  }

  return <SignInPage />;
}
