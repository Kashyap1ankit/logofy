"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { lato } from "@/app/fonts/font";
import NavItems from "./nav-item";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tally3 } from "lucide-react";
import Link from "next/link";
import UserProfile from "./user-profile";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const session = useSession();

  return (
    <div
      className={`flex justify-between items-center sticky ${scrolled ? "top-5 w-11/12 md:w-1/2 rounded-lg mx-auto" : "top-0"} w-full p-4 z-50  shadow-sm duration-500 border-b border-neutral-800 backdrop-blur-xl bg-[#121212] `}
    >
      <Link href={"/"} className="flex gap-2 items-center" aria-label="logo">
        <Image
          src={"/logofy.png"}
          width={500}
          height={500}
          className="w-10 h-10 rounded-full"
          alt="logo"
          aria-label="logo"
        />
        <p
          className={`text-2xl font-bold ${lato.className} text-white tracking-wide`}
        >
          Logofy
        </p>
      </Link>

      <div className="flex justify-between gap-16 items-center">
        {session.status !== "authenticated" ? null : <UserProfile />}

        <div className="hidden md:block">
          <NavItems />
        </div>

        <div className="block md:hidden">
          <Dialog>
            <DialogTrigger>
              <Tally3 className="rotate-90 invert" />
            </DialogTrigger>
            <DialogContent className="fixed top-24 rounded-md max-w-[300px] md:hidden ">
              <DialogTitle></DialogTitle>
              <DialogHeader className="mt-4">
                <DialogDescription>
                  <NavItems />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
