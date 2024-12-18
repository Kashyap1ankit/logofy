import React from "react";

export function DotBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full bg-black  bg-dot-white/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        {children}
      </div>
    </div>
  );
}
