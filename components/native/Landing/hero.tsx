"use client";

import { GeistSans } from "geist/font/sans";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heebo } from "@/app/fonts/font";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className=" overflow-x-hidden flex flex-col gap-8 items-center ">
      <div className="w-fit mb-4 bg-gradient-to-r from-purple-400 to-purple-900 animate-gradient px-4 py-2 rounded-full text-white text-sm shadow-sm shadow-purple-700">
        Highly Accurate results ✨ &rarr;
      </div>

      <Balancer
        className={`${GeistSans.className} text-white px-4 md:px-0 text-center text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold`}
      >
        THE AI POWERED LOGO {""}
        <motion.span
          className="bg-gradient-to-r via-primary-purple from-tertiary-purple to-seconadry-purple px-2 rounded-md text-center text-white"
          initial={{
            backgroundSize: "0%",
          }}
          animate={{
            backgroundSize: "100% ",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 0.4,
          }}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            display: "inline",
          }}
        >
          GENERATOR
        </motion.span>
      </Balancer>
      <motion.p
        className={`${GeistSans.className}  text-center text-sm sm:text-md text-2xl font-bold text-gray-300 sm:w-3/4 md:w-1/2 px-4 md:px-0`}
        animate={{
          y: [100, 0],
          opacity: [0, 1],
          transition: {
            default: { type: "spring", duration: 1 },
            opacity: { ease: "linear", duration: 1.25 },
          },
        }}
      >
        Your Shortcut to Professional Logo Designs. Create Stunning Graphics in
        Just Minutes. Transform Ideas into Stunning Logo Designs Instantly
      </motion.p>

      <Link
        href={"/generate"}
        aria-label="generate-navigate"
        className="sm:mt-8"
      >
        <Button className="p-6 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-950   duration-300 ">
          <p className={`font-bold ${heebo.className}  tracking-wide  `}>
            Try it Now
          </p>
          <ChevronRight />
        </Button>
      </Link>
    </div>
  );
}
