"use client";
import { motion } from "framer-motion";
import { roboto } from "@/app/fonts/font";
import { DotBackgroundDemo } from "@/components/ui/dot-background";
import FaqData from "@/data/faq.json";
import {
  Smile,
  CreditCard,
  Cpu,
  Download,
  Ban,
  Video,
  Clock,
  Lock,
  MonitorCog,
  Headset,
} from "lucide-react";

export default function Faq() {
  const iconsArray = [
    Smile,
    Video,
    CreditCard,
    Clock,
    Cpu,
    Lock,
    Download,
    MonitorCog,
    Ban,
    Headset,
  ];
  return (
    <DotBackgroundDemo>
      <motion.div
        className="flex flex-col gap-4 border-gray-100 md:pl-24 md:py-8"
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
          className={`${roboto.className} text-2xl md:text-5xl text-black text-center`}
        >
          Frequently asked questions
        </p>
        <p className="text-center text-sm px-4 text-gray-400">
          These are the most commonly asked questions about Untitled UI
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-12 px-4 md:px-0 ">
          {FaqData.map((e, i) => {
            const Icon = iconsArray[i];
            return (
              <div className="flex gap-4 items-start " key={i}>
                <Icon className="size-12 h-fit text-black bg-violet-200 p-2 rounded-md text-purple-900" />
                <div>
                  <p className="text-xl text-bold text-black">{e.question}</p>
                  <p className="text-sm w-full md:w-3/4 ">{e.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </DotBackgroundDemo>
  );
}
