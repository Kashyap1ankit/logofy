import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
