"use client";
import { motion } from "framer-motion";
import { heebo, roboto } from "@/app/fonts/font";
import FaqData from "@/data/faq.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <motion.div
      className="flex flex-col gap-4 border-gray-100  mt-12 mx-auto "
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
        className={`${roboto.className} text-3xl sm:text-4xl md:text-5xl text-blue-400 text-center font-bold`}
      >
        Frequently asked questions
      </p>
      <p className=" mt-2 text-sm md:text-md text-center text-gray-400 font-bold">
        These are the most commonly asked questions about Untitled UI
      </p>

      <Accordion
        type="single"
        collapsible
        className=" flex flex-col gap-4 items-center mt-8"
      >
        {FaqData.map((e, i) => {
          return (
            <AccordionItem
              value={i.toString()}
              key={i}
              className="bg-[#121212] px-4 py-2  w-11/12 md:w-3/4 rounded-md border-none hover:underline-0"
            >
              <AccordionTrigger
                className={`${heebo.className} text-white font-bold  text-md `}
              >
                {e.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {e.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </motion.div>
  );
}
