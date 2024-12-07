import { heebo } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export default function NavItems() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4  ">
      <Link href={"/signup"}>
        <Button
          variant={"default"}
          className=" w-full hover:bg-white bg-white text-black shadow-md border"
        >
          <p className={`font-bold ${heebo.className}  tracking-wide `}>
            Signup
          </p>
        </Button>
      </Link>
      <Link href={"/signin"}>
        <Button variant={"default"} className=" w-full">
          <p className={`font-bold ${heebo.className}  tracking-wide `}>
            Login
          </p>
        </Button>
      </Link>

      <User className="bg-gradient-to-b from-[#764BA2] to-[#667EEA] text-white size-10 p-2 shadow-md  h-fit rounded-full cursor-pointer" />
    </div>
  );
}
