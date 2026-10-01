import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


import CustomCursor from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Priyansu Singh | Full-Stack Developer & DevOps Enthusiast",
  description: "Portfolio of Priyansu Singh - Full-Stack Developer, DevOps Enthusiast, and Computer Science Engineer crafting elegant digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#090a0f] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden`}
      >
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
