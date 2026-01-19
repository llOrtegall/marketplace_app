import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <section>
      <h1>Welcome to My Next.js App</h1>
      {
        session ? (
          <form action={async () => {
            "use server"
            await signOut()
          }}>

            <p>You are logged in as {session?.user?.email}</p>
            <button type="submit">Sign Out</button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
        )
      }
    </section>
  );
}
