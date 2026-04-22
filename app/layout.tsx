import type { Metadata } from "next";
import localFont from "next/font/local";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const chandlerMountain = localFont({
  src: [
    {
      path: "../public/fonts/ChandlerMountain-Regular-iF66cbd28d33c0a.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-Bold-iF66cbd18dbcc36.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'Home | AllPlay Romania',
    template: '%s | AllPlay Romania'
  },
  description: "All the Forms Available for AllPlay Romania FiveM Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", chakraPetch.variable, chandlerMountain.variable)}
    >
      <body className="min-h-full flex flex-col pt-14">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
