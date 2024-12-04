import { Heebo, Lato, Roboto } from "next/font/google";

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

export const roboto = Roboto({
  subsets: ["latin"],
  display: "auto",
  weight: "500",
});
