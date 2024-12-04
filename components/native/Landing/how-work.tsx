"use client";
import { motion } from "framer-motion";
import { heebo, lato, roboto } from "@/app/fonts/font";
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
      className="bg-slate-100 border-t-2 border-gray-100 p-12 mx-auto flex flex-col md:flex-row justify-between gap-4"
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
      <div className="flex flex-col gap-4 justify-center items-center  w-1/2">
        <p className={`${roboto.className} text-5xl text-blue-700 font-bold`}>
          How it works ?
        </p>
        <p className="w-1/2 text-center text-gray-400 font-bold">
          Understand our process in simple steps. Learn how to use our platform
          effortlessly to achieve your goals with clear and concise guidance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-1/2">
        {JsonData.map((e: JsonDataType, i: number) => {
          const Icon = iconsArray[i];
          return (
            <div
              className="flex flex-col gap-4 shadow-md rounded-xl p-4 max-w-xl bg-white hover:bg-slate-200 duration-500 cursor-pointer"
              key={i}
            >
              <Icon className="text-blue-700" />
              <p className={`${heebo.className} text-xl font-bold`}>
                {e.title}
              </p>
              <p className={`${lato.className} text-gray-400`}>
                {e.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
