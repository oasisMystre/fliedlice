import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const chinese = localFont({
  src: "./chinese.ttf",
});

export const inter = Inter({
  subsets: ["latin"],
});
