import { object, string, treeifyError } from "zod"
 
const signInSchema = object({
  email: string({
    error: "Invalid email address",
  })
    .min(3, "Email must be more than 3 characters")
    .max(125, "Email must be less than 125 characters"),
  password: string("Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})

export function validateSignIn(data: unknown) {
  const { success, data: parsedData, error } = signInSchema.safeParse(data)

  if (success) {
    return { valid: true, data: parsedData }
  } else {
    return { valid: false, errors: treeifyError(error) }
  }
}