import type { Metadata } from "next";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/native/Navbar/nav-bar";

export const metadata: Metadata = {
  title: "Greenify",
  description: "Get Removed background",
  icons: "/greenify.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AuroraBackground className="py-8 md:py-24">
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
