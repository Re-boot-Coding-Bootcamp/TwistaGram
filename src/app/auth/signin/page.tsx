import { getProviders } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import GoogleSignIn from "../_components/GoogleSignIn";
import EmailSignIn from "../_components/EmailSignIn";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  if (!providers) {
    return <>No providers found</>;
  }

  return (
    <>
      <GoogleSignIn provider={providers.google} />
      <EmailSignIn provider={providers.email} />
    </>
  );
}
