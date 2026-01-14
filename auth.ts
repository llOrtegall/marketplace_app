import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { signInSchema } from "@/lib/zod"
import NextAuth from "next-auth"
import { ZodError } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },

      authorize: async (credentials) => {
        try {
          let user = null

          const { email, password } = await signInSchema.parseAsync(credentials)

          const pwHash = saltAndHashPassword(password)

          user = await getUserFromDb(email, pwHash)
          
          if (!user) {
            throw new Error("Invalid credentials.")
          }

          return user
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
        }
      },
    })
  ],
})