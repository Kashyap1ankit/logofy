"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Sparkles,
  Wand2,
  Zap,
  LayoutTemplate,
  Layers,
  Palette,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { heebo, lato } from "@/app/fonts/font";
import Image from "next/image";

export default function NewLandingContent() {
  return (
    <div className="flex flex-col w-full relative z-10 pt-20 pb-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 md:px-20 mt-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-200">
            The Next Generation of Design is Here
          </span>
        </motion.div>

        <motion.h1
          className={`${GeistSans.className} text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 tracking-tight leading-tight max-w-5xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Design Logos at the <br className="hidden md:block" /> Speed of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Thought.
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the absolute pinnacle of AI-driven design. Generate
          stunning, professional-grade logos in mere seconds. No design skills
          required.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/generate">
            <Button className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] group">
              <span className="font-semibold">Start Generating</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-20 py-24 relative mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${GeistSans.className} text-3xl md:text-5xl font-bold text-white mb-4`}
            >
              Unmatched Capabilities
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to create the perfect brand identity, right at
              your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Get results in milliseconds. Our optimized AI models run faster than ever.",
              },
              {
                icon: Layers,
                title: "Infinite Variations",
                desc: "Don't like the first result? Generate infinite variations until it's perfect.",
              },
              {
                icon: Palette,
                title: "Pixel Perfect",
                desc: "High-resolution, scalable vector outputs ready for print or web.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all backdrop-blur-md group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3
                  className={`${heebo.className} text-2xl font-semibold text-white mb-3 relative z-10`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Steps */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className={`${GeistSans.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}
              >
                From Idea to Identity in 3 Steps
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Our streamlined workflow makes it incredibly easy to get exactly
                what you want, when you want it.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Describe Your Vision",
                    desc: "Tell our AI what your brand is about. Be as vague or as specific as you like.",
                  },
                  {
                    title: "Generate Concepts",
                    desc: "Watch as Logofy crafts unique, tailor-made logos in real-time.",
                  },
                  {
                    title: "Export & Dominate",
                    desc: "Download high-res assets and start building your empire instantly.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-purple-500/20 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {step.title}
                      </h4>
                      <p className="text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] bg-black/40 backdrop-blur-xl flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />

              {/* Mock Interface */}
              <div className="w-full h-full bg-white/5 rounded-2xl border border-white/10 flex flex-col overflow-hidden relative">
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-full h-8 bg-white/5 rounded-md" />
                  <div className="w-3/4 h-4 bg-white/5 rounded-md" />

                  <div className="flex-1 flex items-center justify-center mt-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <ImageIcon className="w-24 h-24 text-white/20" />
                    </motion.div>
                  </div>

                  <div className="mt-auto flex justify-end">
                    <div className="w-24 h-8 bg-purple-500/40 rounded-md" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Mock) */}
      <section className="py-24 relative overflow-hidden mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-20 text-center">
          <h2
            className={`${GeistSans.className} text-3xl md:text-5xl font-bold text-white mb-16`}
          >
            Built for the Future
          </h2>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.1)] bg-black/50 backdrop-blur-xl flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <LayoutTemplate className="w-32 h-32 text-white/20" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-8 py-4 bg-black/40 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
                <span className="text-white font-medium tracking-widest text-sm uppercase">
                  Interactive Studio Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <footer className="mt-32 border-t border-white/10 pt-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-2xl font-bold ${lato.className} text-white tracking-wide`}
            >
              Logofy
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Logofy Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
