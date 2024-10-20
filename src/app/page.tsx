import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
//import Image from "next/image";
//import Contact from "@/components/ui/Contact";
import LandingServices from "@/components/ui/LandingServices";
import About from "@/components/ui/About";
import Partners from "@/components/ui/Partners";
import Testimonials from "@/components/ui/Testimonials";
import BlogRoll from "@/components/ui/BlogRoll";
import FeaturedServices from "@/components/ui/FeaturedServices";

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
        heroText="holistic approach to create inclusive, inspiring environments tailored to you."
        heroText2="We blend unique materials, textures, and colors to create timeless spaces."
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
      <FeaturedServices />
      <Testimonials />
      <BlogRoll />
    </>
  );
};

export default HomePage;
