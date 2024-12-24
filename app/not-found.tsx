import Link from "next/link";
import { lato } from "./fonts/font";
import Balancer from "react-wrap-balancer";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <Balancer
        className={`${lato.className} px-4 text-4xl md:text-7xl text-red-700 font-bold text-center`}
      >
        404 - Page Not Found
      </Balancer>

      <p className="text-gray-400">You are not supposed to see this page</p>

      <Link
        href={"/"}
        className="w-fit p-2 px-4 rounded-md shadow-md bg-gradient-to-r from-indigo-900 to-indigo-950 text-white mt-6"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
