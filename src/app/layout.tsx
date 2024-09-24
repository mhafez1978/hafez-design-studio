import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { PrismicPreview } from "@prismicio/next";
import { hafez-design-studio } from "@/prismicio";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hafez Design Studio",
  description: "Interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  className={clsx(nunito.variable, nunito_sans.variable)}
    // className={`${nunito.variable}, ${nunito_sans.variable}`}
    <html lang="en">
      <body className={`${nunito.variable} ${nunito_sans.variable}`}>
        {children}
         <PrismicPreview repositoryName={hafez-design-studio} />
      </body>
    </html>
  );
}
