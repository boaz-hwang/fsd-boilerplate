import { LOGIN_PATHNAME } from "@/src/shared/config/pathname";
import { Button } from "@/src/shared/ui";
import { createClient } from "@/src/shared/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect(LOGIN_PATHNAME);
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.email}
      <form>
        <Button formAction={signOut} variant="outline">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Button asChild variant="outline">
      <Link href={LOGIN_PATHNAME}>Login</Link>
    </Button>
  );
}
