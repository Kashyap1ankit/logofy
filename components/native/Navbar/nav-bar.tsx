"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { heebo, lato } from "@/app/fonts/font";
import Link from "next/link";
import UserProfile from "./user-profile";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useCredits } from "@/lib/hooks/hooks";
import { getUserCredit } from "@/app/actions/transaction.action";
import { FaCoins } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const credits = useCredits((state) => state.credits);
  const setCredits = useCredits((state) => state.setCredits);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await getUserCredit();

        if (res.message === "Unauthorized user") {
          return signOut();
        }
        if (res.status !== 200) throw new Error(res.message);

        setCredits(res.credits);
      } catch {
        setCredits(null);
      }
    };

    fetchBalance();
  }, [setCredits]);

  const session = useSession();

  return (
    <div
      className={`flex justify-between items-center sticky ${scrolled ? "top-5 w-11/12 md:w-1/2 rounded-lg mx-auto" : "top-0"} w-full p-4 z-50  shadow-sm duration-500 border-b border-neutral-800 backdrop-blur-xl `}
    >
      <Link href={"/"} className="flex gap-2 items-center" aria-label="logo">
        <Image
          src={"/logofy.svg"}
          width={500}
          height={500}
          className="w-10 h-10 rounded-full"
          alt="logo"
          aria-label="logo"
        />
        <p
          className={`text-2xl font-bold ${lato.className} bg-gradient-to-l from-primary-purple to-tertiary-purple  bg-clip-text text-transparent  tracking-wide`}
        >
          Logofy
        </p>
      </Link>

      <div className="flex justify-between gap-4 sm:gap-8 md:gap-16 items-center">
        {session.data === null || session.isPending ? (
          <Link href={"/signin"} className="w-full">
            <Button
              variant={"default"}
              className=" w-full shadow-md bg-gradient-to-r from-indigo-900 to-indigo-950 "
            >
              <p className={`font-bold ${heebo.className}  tracking-wide  `}>
                Login
              </p>
            </Button>
          </Link>
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <FaCoins className="fill-yellow-600" />
              <p className="text-white">{credits}</p>
            </div>
            <UserProfile />
            <Button
              variant={"default"}
              className=" w-full shadow-md bg-gradient-to-r from-indigo-900 to-indigo-950 "
              onClick={() => signOut()}
            >
              <p className={`font-bold ${heebo.className}  tracking-wide   `}>
                Logout
              </p>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
