import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
//import Image from "next/image";
//import Contact from "@/components/ui/Contact";
import LandingServices from "@/components/ui/LandingServices";
import About from "@/components/ui/About";
import Partners from "@/components/ui/Partners";

export const metadata: Metadata = {
  title: "Hafez Design Studio | Home",
  description: "Toronto’s Premier Interior Design Firm",
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        bgColor="bg-slate-950"
        heroTitle="Toronto’s Premier Interior Design Firm"
        heroText="we transform spaces into sophisticated, functional and timeless interiors."
        heroButtonText="Let's Work Together"
      />
      <LandingServices />
      {/* <section className="relative">
        <div className="container mx-auto h-screen flex pt-[100px]">
          <Image
            src="/minimalist-kitchen-interior-design.jpg"
            alt="hero image"
            // layout="responsive"
            width={800}
            height={400}
            className="align-right"
          />
        </div>
        <div className="w-[50%] absolute z-30">
          <h2 className="text-black text-6xl">about</h2>
        </div>
      </section> */}
      <About />
      <Partners />
    </>
  );
};

export default HomePage;
