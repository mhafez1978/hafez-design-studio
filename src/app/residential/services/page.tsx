import React from "react";
import type { Metadata } from "next";
import FeaturedServices from "@/components/ui/FeaturedServices";

export const metadata: Metadata = {
  title: "Residential Services",
  description: "Generated by create next app",
};

const ResidentialServices: React.FC = () => {
  return (
    <>
      {/*  */}
      <FeaturedServices />
    </>
  );
};

export default ResidentialServices;
