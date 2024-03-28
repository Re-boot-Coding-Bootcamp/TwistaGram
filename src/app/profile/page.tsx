import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import { unstable_noStore as noStore } from "next/cache";

const DefaultProfilePage = async () => {
  noStore();
  const session = await getServerAuthSession();

  if (session) {
    redirect(`/profile/${session.user.id}`);
  } else {
    redirect("/api/auth/signin");
  }
};

export default DefaultProfilePage;
