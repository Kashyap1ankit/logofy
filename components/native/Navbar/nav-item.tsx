"use client";
import { getUserCredit } from "@/app/actions/transaction.action";
import { heebo } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { FaCoins } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { useCredits } from "@/lib/hooks/hooks";

export default function NavItems() {
  const session = useSession();
  const credits = useCredits((state) => state.credits);
  const setCredits = useCredits((state) => state.setCredits);

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
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8  ">
      {session.status === "authenticated" ? (
        <>
          <div className="flex gap-2 items-center">
            <FaCoins className="fill-yellow-600" />
            <p className="text-white">{credits}</p>
          </div>

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
            <Button
              variant={"default"}
              className=" w-full shadow-md bg-gradient-to-r from-indigo-900 to-indigo-950 "
            >
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
