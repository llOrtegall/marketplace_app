import { signIn } from "@/auth"
import { Avatar, Box, Button, Card, Flex, Slot, Text, TextField } from "@radix-ui/themes"

export default function SignIn() {
  return (
    <>
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
        }}
      >
        <Box maxWidth="240px">
          <Card>
            <Flex gap="3" align="center">
              <Box>
                <Text as="label">
                  Email
                  <TextField.Root name="email" type="email" />
                </Text>
                <Text as="label">
                  Password
                  <TextField.Root name="password" type="password" />
                </Text>
              </Box>
            </Flex>
            <Button type="submit" variant="surface">Sign In</Button>
          </Card>
        </Box>

      </form>

      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button type="submit" variant="surface">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="inline h-5 w-5 mr-2 align-middle"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20c11.03 0 20-8.954 20-20 0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 16.108 19.6 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.843 0-14.455 4.522-17.694 10.691z"
            />
            <path

              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-4.305 0-8.001-2.726-9.334-6.641l-6.522 5.025C11.202 39.556 17.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303c-1.101 3.108-3.457 5.654-6.303 7.021l.001-.001 6.19 5.238C36.971 36.727 44 30.523 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Signin with Google
        </Button>
      </form>
    </>
  )
} 