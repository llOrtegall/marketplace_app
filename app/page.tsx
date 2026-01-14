import SignOut from "@/app/components/sig-out";
import SignIn from "@/app/components/sig-in";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()

  return (
    <section>
      <h1 className="text-red-600">Hello, Next.js!</h1>

      {
        session ? (
          <>
            <p>Welcome back, {JSON.stringify(session.user)}!</p>
            <SignOut />
          </>
        ) : (
          <>
            <p>Please sign in to continue.</p>
            <SignIn />
          </>
        )
      }
    </section>
  );
}



