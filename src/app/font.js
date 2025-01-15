import { Kanit } from "next/font/google";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap", // Use font-display: swap for better performance
});

export default kanit;
