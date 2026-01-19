import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import { validateSignIn } from "./lib/zod"
import NextAuth from "next-auth"
import { prisma } from "@/lib/prisma"
import { ZodError } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const parsed = validateSignIn(credentials)

          console.log(parsed);

          if (!parsed.valid) {
            return null
          }

          const email = parsed.data?.email
          const password = parsed.data?.password

          if (!email || !password) {
            return null
          }
          
          // if (email !== "test@gmail.com" || password !== "password123") {
          //   return null
          // } 

          const user = { id: "1", name: "Test User", email: "test@gmail.com" }

          return user
        } catch (error) {
          if (error instanceof ZodError) {
            console.log(error)
          }
          return null
        }
      },
    })
  ],
})