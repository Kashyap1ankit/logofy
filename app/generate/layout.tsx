import type { Metadata } from "next";
import Navbar from "@/components/native/Navbar/nav-bar";

export const metadata: Metadata = {
  title: "Greenify",
  description: "Get Removed background",
  icons: "/greenify.png",
};

export default function GenerateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
