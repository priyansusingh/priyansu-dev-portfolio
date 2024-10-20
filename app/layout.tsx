import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Poppins } from 'next/font/google'
import CustomCursor from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/react"

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['300', '400', '600'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Priyansu Singh",
  description: "It is Next js Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${poppins.className}`}
      >
        <CustomCursor/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
