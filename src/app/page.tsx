import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import LandingServices from "@/components/ui/LandingServices";
import About from "@/components/ui/About";
//import Partners from "@/components/ui/Partners";
import Testimonials from "@/components/ui/Testimonials";

export const metadata: Metadata = {
  title: "Hafez Design Studio | Home",
  description: "Toronto’s Premier Interior Design Firm",
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        bgColor="bg-slate-950"
        heroTitle="Toronto’s Premier Interior Design Startup"
        heroText="Timeless, Sophisticated, and Modern Interiors"
        heroText2="Full Service Interior Design Serving Toronto and beyond"
        heroButtonText="Work with us"
      />
      <LandingServices />
      {/* <Partners /> */}
      <About />
      <Testimonials />
    </>
  );
};

export default HomePage;
