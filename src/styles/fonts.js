import { Playfair_Display as Font2 } from "next/font/google";
import { Inter as Font1 } from "next/font/google";

const font1 = Font1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});

const font2 = Font2({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});

// const font1 = localFont({
//   src: [
//     {
//       path: "../../public/fonts/StackSansHeadline-Regular.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/StackSansHeadline-Medium.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/StackSansHeadline-SemiBold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/StackSansHeadline-Bold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//   ],
//   variable: "--font-sunsive",
// });

export const FONTS = {
  font1: font1.className,
  font2: font2.className,

  // font1: sunsive.className,
};

// export const FONT_VARIABLES = `${font1.variable} ${sunsive.variable}`;

export default FONTS;
