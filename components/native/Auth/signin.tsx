"use client";
import { heebo, roboto } from "@/app/fonts/font";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";

export default function SignInComp() {
  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen  bg-[#121212] backdrop-blur-xl">
      <div className="bg-[#121212]  w-11/12 mt-4  md:max-w-md md:min-w-[520px] h-fit border border-neutral-700 rounded-xl shadow-xl ">
        <div className="flex flex-col gap-8 bg-black p-8 rounded-xl">
          <div>
            <h1
              className={`${heebo.className} text-2xl font-bold  text-center text-white `}
            >
              Sign in to Greenify
            </h1>
            <p className="text-center text-gray-400 text-sm mt-2">
              Welcome back! Please sign in to continue
            </p>
          </div>

          <div
            className="py-2 px-4 flex items-center gap-2 border-2 rounded-lg justify-center bg-white shadow-sm cursor-pointer"
            onClick={() =>
              signIn.social({ provider: "google", callbackURL: "/" })
            }
          >
            <FcGoogle className="size-6" />
            <p className={`${roboto.className} font-bold`}>Google</p>
          </div>
        </div>

        {/* login part  */}

        <div className="flex gap-2 items-center  justify-center py-4 px-8">
          <p className={`${roboto.className} text-sm text-gray-500`}>
            Go Back to
          </p>
          <Link
            href={"/"}
            aria-label="signin-redirect"
            className={`${roboto.className} text-sm text-[#9175fd] font-bold`}
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
