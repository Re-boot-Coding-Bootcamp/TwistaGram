import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  noStore();

  const session = await getServerAuthSession();

  return (
    <div>
      <h3>Twistagram</h3>

      <p>{session && <span>Logged in as {session.user?.name}</span>}</p>

      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
