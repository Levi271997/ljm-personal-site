import type { Metadata } from "next";

import "../globals.css";
 //import { SpaceGrotesk } from "../components/fontsconfigure";

// import localFont from "next/font/local";

//  const MainFont = localFont({
//   src:[
//     {
//       path:'../fonts/SpaceGrotesk-Medium.ttf',
//       weight:'500',
//       style:'normal',
//     },
//     {
//       path:'../fonts/SpaceGrotesk-Bold.ttf',
//       weight:'700',
//       style:'normal',
//     },
//   ],
 
//    })
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
