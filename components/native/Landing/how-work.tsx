"use client";
import { motion } from "framer-motion";
import { heebo, lato } from "@/app/fonts/font";
import { User, IndianRupee, Video, Clapperboard } from "lucide-react";
import JsonData from "@/data/how-it-works.json";

interface JsonDataType {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const iconsArray = [User, IndianRupee, Video, Clapperboard];
  return (
    <motion.div
      className=" gap-4 px-4  md:p-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <p
        className={`${heebo.className} text-3xl sm:text-4xl md:text-5xl text-blue-400 font-bold text-center`}
      >
        Redefining Logo Generation
      </p>

      <p className="mt-6 text-sm md:text-md text-center text-gray-400 font-bold">
        Understand our process in simple steps. Learn how to use our platform
        effortlessly to achieve your goals with clear and concise guidance
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-20 md:px-12">
        {JsonData.map((e: JsonDataType, i: number) => {
          const Icon = iconsArray[i];
          return (
            <div
              className="flex flex-col items-center gap-4 shadow-md rounded-xl p-12 w-full max-w-sm bg-[#121212] border border-neutral-700  duration-500 cursor-pointer"
              key={i}
            >
              <Icon className="text-blue-700 size-16" />
              <p className={`${heebo.className} text-xl font-bold text-white`}>
                {e.title}
              </p>
              <p className={`${lato.className} text-gray-400 text-center`}>
                {e.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
