import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/lib/providers";

export const metadata: Metadata = {
  title: "Logofy",
  description: "Generate logos for free",
  icons: "/logofy.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" max-w-screen ">
        <Providers>
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
