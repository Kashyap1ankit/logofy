"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { heebo } from "@/app/fonts/font";
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

  return (
    <div
      className={`flex justify-between items-center sticky ${scrolled ? "top-5 w-11/12 md:w-1/2 rounded-lg mx-auto" : "top-0"} w-full p-4 z-50  shadow-sm duration-500 bg-secondary-black border-b border-neutral-700 backdrop-blur-xl `}
    >
      <Link href={"/"} className="flex gap-2 items-center" aria-label="logo">
        <Image
          src={"/greenify.png"}
          width={500}
          height={500}
          className="w-8 rounded-sm"
          alt="logo"
          aria-label="logo"
        />
        <p
          className={`text-3xl font-bold ${heebo.className} text-[#285040] tracking-wide`}
        >
          Greenify
        </p>
      </Link>

      <div className="hidden md:block">
        <NavItems />
      </div>

      <div className="block md:hidden">
        <Dialog>
          <DialogTrigger>
            <Tally3 className="rotate-90" />
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
  );
}
