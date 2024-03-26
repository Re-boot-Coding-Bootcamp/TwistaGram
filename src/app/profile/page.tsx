import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

const DefaultProfilePage = async () => {
  const session = await getServerAuthSession();

  if (session) {
    redirect(`/profile/${session.user.id}`);
  } else {
    redirect("/api/auth/signin");
  }
};

export default DefaultProfilePage;
