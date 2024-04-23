import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function HomePage(){
    return (

        <div className=" w-screen h-screen flex items-center justify-center bg-green-100">
          <div className="flex flex-col gap-10 items-center">
            <SignedOut>
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="w-full h-full items-center flex">
                <UserButton afterSignOutUrl="/"/>
              </div>
            </SignedIn>
          </div>
        </div>
    )
}
