import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorWithTextProps {
  text: string;
  className?: string;
  lineClassName?: string;
  textClassName?: string;
}

export function SeparatorWithText({
  text,
  className,
  lineClassName,
  textClassName,
}: SeparatorWithTextProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn("flex-grow border-t border-gray-300", lineClassName)}
      />
      <span className={cn("px-3 text-gray-500 text-sm", textClassName)}>
        {text}
      </span>
      <div
        className={cn("flex-grow border-t border-gray-300", lineClassName)}
      />
    </div>
  );
}
