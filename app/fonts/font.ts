import { Heebo, Lato } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "auto",
  weight: "800",
});
