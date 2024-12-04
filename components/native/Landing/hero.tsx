"use client";

import { GeistSans } from "geist/font/sans";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlaskConical, TestTube } from "lucide-react";
import { heebo } from "@/app/fonts/font";
import { useEffect, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroSection() {
  const vd1Ref = useRef<null | HTMLVideoElement>(null);
  const vd2Ref = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (vd1Ref.current && vd2Ref.current) {
      vd1Ref.current.play();
      vd2Ref.current.play();
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center">
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
        className={`${GeistSans.className} mt-4 text-center text-2xl font-bold text-gray-700`}
        animate={{
          y: [100, 0],
          opacity: [0, 1],
          transition: {
            default: { type: "spring", duration: 1 },
            opacity: { ease: "linear", duration: 1.25 },
          },
        }}
      >
        Your Shortcut to Professional Video Backdrops.
      </motion.p>

      <div className="flex flex-wrap  gap-8  ">
        <Button className="py-6 px-8 bg-white text-black shadow-xl border-t-2 border-l-2 hover:bg-white">
          <TestTube />
          <p className={`font-bold ${heebo.className}  tracking-wide`}>
            Examples
          </p>
        </Button>
        <Button className="py-6 px-8 ">
          <FlaskConical />
          <p className={`font-bold ${heebo.className}  tracking-wide`}>
            Try Now
          </p>
        </Button>
      </div>

      <ContainerScroll titleComponent="DEMO VIDEO">
        <>
          <video
            width="620"
            height="240"
            loop
            muted
            className="rounded-t-md"
            ref={vd1Ref}
          >
            <source src="/greenify-demo-before-1.mp4" type="video/mp4" />
          </video>
          <video
            width="620"
            height="240"
            loop
            muted
            className="rounded-b-md"
            ref={vd2Ref}
          >
            <source src="/greenify-demo-after.mp4" type="video/mp4" />
          </video>
        </>
      </ContainerScroll>

      {/* <div>Hello owlrd</div> */}
    </div>
  );
}
