import { signOut } from "@/auth"
import { Button } from "@radix-ui/themes"

export default function SignOut() {
  
  return (
    <form action={async () => {
      "use server"
      await signOut()
    }}>
      <Button type="submit" variant="surface">Sign Out</Button>
    </form>
  )
}