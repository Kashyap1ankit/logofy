import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/lib/providers";

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
      <body className=" max-w-screen">
        <Providers>
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
