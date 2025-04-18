// import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import {
  Lato as LatoFont,
  Montserrat as MontserratFont,
} from "next/font/google";

import "./globals.css";

// const outfit = OutfitFont({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const ovo = OvoFont({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const montserrat = MontserratFont({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = LatoFont({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Niloy's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Niloy&apos;s Portfolio</title>
      </head>
      {/* <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body> */}
      <body
        className={`${montserrat.className} ${lato.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
