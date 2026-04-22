import type { Metadata } from "next";
import localFont from "next/font/local";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const chandlerMountain = localFont({
  src: [
    {
      path: "../public/fonts/ChandlerMountain-Thin-iF66cbd28d76d6c.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-ThinSlanted-iF66cbd28d85c4f.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-ExtraLight-iF66cbd1d2c1553.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-ExtLtSlant-iF66cbd1d29eeac.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-Light-iF66cbd244a3616.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-LightSlanted-iF66cbd244b8762.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-Regular-iF66cbd28d33c0a.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-Slanted-iF66cbd28d68038.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-Medium-iF66cbd244c9f8f.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-MedSlant-iF66cbd244dde22.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-SemiBold-iF66cbd28d5953d.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-SemBdSlant-iF66cbd28d4a187.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-Bold-iF66cbd18dbcc36.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-BoldSlanted-iF66cbd18dd1f38.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-ExtraBold-iF66cbd1d2b1d20.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-ExtBdSlant-iF66cbd1d28bd66.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/ChandlerMountain-Black-iF66cbd18d98284.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/ChandlerMountain-BlackSlanted-iF66cbd18da884f.ttf",
      weight: "900",
      style: "italic",
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
