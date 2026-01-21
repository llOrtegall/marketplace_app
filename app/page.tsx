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
          <>
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button type="submit" className="px-4 py-2 rounded-md border bg-blue-500 text-white cursor-pointer hover:bg-blue-600">Signin with Google</button>
            </form>

            <form
              action={async (formData: FormData) => {
                "use server"
                const email = formData.get("email")?.toString() || ""
                const password = formData.get("password")?.toString() || ""
                await signIn("credentials", { email, password })
              }}
            >
              <input type="email" name="email" placeholder="Email" required className="border p-2 rounded-md mr-2" />
              <input type="password" name="password" placeholder="Password" required className="border p-2 rounded-md mr-2" />
              <button type="submit" className="px-4 py-2 rounded-md border bg-green-500 text-white cursor-pointer hover:bg-green-600">Signin with Credentials</button>
            </form>

          </>
        )
      }
    </section>
  );
}
