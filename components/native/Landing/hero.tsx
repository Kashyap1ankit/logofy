"use client";

import { GeistSans } from "geist/font/sans";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heebo } from "@/app/fonts/font";
import { HiUserGroup } from "react-icons/hi2";
import { GiSoapExperiment } from "react-icons/gi";

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8 items-center min-h-screen">
      <div className="w-fit mb-4 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 animate-gradientX px-4 py-2 rounded-full text-white text-sm shadow-sm shadow-purple-700">
        Highly Accurate results ✨ &rarr;
      </div>

      <motion.p
        className={`${GeistSans.className} text-center text-5xl xl:text-8xl font-bold `}
      >
        The AI POWERED VIDEO BACKGROUND{" "}
        <span className="bg-gradient-to-r from-[#764BA2] to-[#667EEA] p-0 rounded-md text-center text-white">
          REMOVER
        </span>
      </motion.p>
      <motion.p
        className={`${GeistSans.className}  text-center text-2xl font-bold text-gray-500  w-1/2`}
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

      <div className="flex flex-wrap  gap-8 mt-12 ">
        <Button className="py-6 px-12 rounded-md ">
          <GiSoapExperiment className="w-12" />
          <p className={`font-bold ${heebo.className}  tracking-wide `}>
            Try Now
          </p>
        </Button>
        <Button className="border border-netural-200 py-6 px-12 bg-white text-black shadow-md hover:bg-white rounded-md">
          <HiUserGroup className="h-12" />
          <p className={`font-bold ${heebo.className}  tracking-wide`}>
            Examples
          </p>
        </Button>
      </div>
    </div>
  );
}
