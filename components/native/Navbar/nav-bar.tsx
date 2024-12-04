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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tally3 } from "lucide-react";

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
      className={`flex justify-between items-center sticky ${scrolled ? "top-5 w-11/12 md:w-1/2 rounded-lg mx-auto" : "top-0"} w-full p-4 z-50 bg-smoke-100  shadow-sm duration-500 backdrop-blur-xl bg-white/50`}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={"/greenify.png"}
          width={500}
          height={500}
          className="w-10 rounded-md"
          alt="logo"
          aria-label="logo"
        />
        <p
          className={`text-3xl font-bold ${heebo.className} text-[#285040] tracking-wide`}
        >
          Greenify
        </p>
      </div>

      <div className="hidden md:block">
        <NavItems />
      </div>

      <div className="block md:hidden">
        <Dialog>
          <DialogTrigger>
            <Tally3 className="rotate-90" />
          </DialogTrigger>
          <DialogContent className="fixed top-24 rounded-md max-w-[300px]">
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
