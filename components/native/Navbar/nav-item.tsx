"use client";
import { getUserCredit } from "@/app/actions/transaction.action";
import { heebo } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { FaCoins } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavItems() {
  const session = useSession();
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await getUserCredit();

        if (res.status !== 200) throw new Error(res.message);

        setCredits(res.credits);
      } catch {
        setCredits(null);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8  ">
      {session.status === "authenticated" ? (
        <>
          <div className="flex gap-2 items-center">
            <FaCoins className="fill-yellow-600" />
            <p>{credits}</p>
          </div>
          {/* <User className="bg-gradient-to-b from-[#764BA2] to-[#667EEA] text-white size-10 p-2 shadow-md  h-fit rounded-full w-full cursor-pointer" /> */}
          <Button
            variant={"default"}
            className=" w-full shadow-md "
            onClick={() => signOut()}
          >
            <p className={`font-bold ${heebo.className}  tracking-wide  `}>
              Logout
            </p>
          </Button>
        </>
      ) : (
        <>
          <Link href={"/signup"} className="w-full">
            <Button
              variant={"default"}
              className=" w-full hover:bg-white bg-white text-black shadow-md border"
            >
              <p className={`font-bold ${heebo.className}  tracking-wide `}>
                Signup
              </p>
            </Button>
          </Link>
          <Link href={"/signin"} className="w-full">
            <Button variant={"default"} className=" w-full shadow-md ">
              <p className={`font-bold ${heebo.className}  tracking-wide  `}>
                Login
              </p>
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
