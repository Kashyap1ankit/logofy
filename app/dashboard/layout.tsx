import type { Metadata } from "next";
import Navbar from "@/components/native/Navbar/nav-bar";

export const metadata: Metadata = {
  title: "Greenify",
  description: "Get Removed background",
  icons: "/greenify.png",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-primary-black min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
