import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Niloy's Portfolio - Frontend Developer",
  description: "Modern portfolio showcasing frontend development skills with React, Next.js, and modern web technologies.",
  keywords: ["frontend developer", "react", "next.js", "portfolio", "web development"],
  authors: [{ name: "Niloy" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
