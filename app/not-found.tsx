import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Backround from "@/components/backround";
export default function NotFound() {
  return (

    <Backround>
      <div className="relative flex flex-col h-screen items-center justify-center">
            <div className="relative mb-8">
          <Logo />
        </div>
        <h1 className="text-8xl font-normal ">404</h1>
        <p className="text-sm mb-8">Need help? Visit the docs</p>
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/"
          >
           <Button className=" cursor-pointer" size={"lg"}>
             Back to Home
           </Button>
          </Link>
        </div>
      </div>
    </Backround>
  );
}
