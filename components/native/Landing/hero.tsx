"use client";

import { GeistSans } from "geist/font/sans";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heebo } from "@/app/fonts/font";
import { HiUserGroup } from "react-icons/hi2";
import { GiSoapExperiment } from "react-icons/gi";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className=" overflow-x-hidden flex flex-col gap-8 items-center min-h-screen">
      <div className="w-fit mb-4 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 animate-gradientX px-4 py-2 rounded-full text-white text-sm shadow-sm shadow-purple-700">
        Highly Accurate results ✨ &rarr;
      </div>

      <motion.p
        className={`${GeistSans.className} px-4 md:px-0 text-center text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold`}
      >
        The AI POWERED VIDEO BACKGROUND{" "}
        <span className="bg-gradient-to-r from-[#764BA2] to-[#667EEA] rounded-md text-center text-white">
          REMOVER
        </span>
      </motion.p>
      <motion.p
        className={`${GeistSans.className}  text-center text-sm sm:text-md text-2xl font-bold text-gray-500 sm:w-3/4 md:w-1/2 px-4 md:px-0`}
        animate={{
          y: [100, 0],
          opacity: [0, 1],
          transition: {
            default: { type: "spring", duration: 1 },
            opacity: { ease: "linear", duration: 1.25 },
          },
        }}
      >
        Your Shortcut to Professional Video Backdrops. Get the foreground of the
        video ready to use in few minutes
      </motion.p>

      <div className="flex flex-col sm:flex-row   gap-8 sm:mt-12 ">
        <Link href={"/generate"} aria-label="generate-navigate">
          <Button className="py-6 px-12 rounded-md ">
            <GiSoapExperiment className="w-12" />
            <p className={`font-bold ${heebo.className}  tracking-wide `}>
              Try Now
            </p>
          </Button>
        </Link>

        <Link href={"/#connect"} aria-label="generate-navigate">
          <Button className="border border-netural-200 py-6 px-12 bg-white text-black shadow-md hover:bg-white rounded-md">
            <HiUserGroup className="h-12" />
            <p className={`font-bold ${heebo.className}  tracking-wide`}>
              Connect
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
