import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/ui/Header2";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Theme from "@/components/util/Theme";

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

export const metadata: Metadata = {
  title: "Hafez Design Studio",
  description: "Generated by create next app",
  keywords:
    "Interior Design, Toronto, GTA, Kitchen Renovations, Basement Renovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased smooth-scroll`}
      >
        <Header />
        <Theme>{children}</Theme>
        <Footer />
      </body>
    </html>
  );
}
