import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Feed from "@/components/ui/Feed";

export const metadata: Metadata = {
  title: "Hafez Design Studio | About us",
  description: "Generated by create next app",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="w-screen py-[280px]">
        <div className="container mx-auto flex flex-row-reverse">
          <div className="w-1/2 flex flex-col">
            {/* <h1 className="font-black text-4xl mb-4">
              About Hafez Design Studio
            </h1>
            <p className="text-base mb-4 pr-6 text-justify">
              We are a full-service interior design studio specializing in
              creating timeless, sophisticated, modern interiors. Our expertise
              includes transforming kitchens, bathrooms, and designing and
              finishing basements for rental or personal use. We also excel in
              custom millwork and fit-ins, creating designs that enhance
              functionality, and suit your lifestyle while increasing storage
              and property value. In addition, we offer design services to
              fellow interior designers and general contractors, helping them
              save time, reduce costs, and improve project efficiency
            </p> */}
            <div className="pr-4">
              <Image
                src="/ehab.png"
                alt="Founder of Sansa Interiors in Toronto"
                className="h-[90%] w-full border-0 object-cover"
                width={900}
                height={400}
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            {/* <h2 className="text-2xl font-black mb-2">Meet Your Team</h2> */}
            <h3 className="text-2xl font-black mb-2">
              About Ihab Hafez, Principal Designer
            </h3>
            <p className="pr-6 text-justify mb-4">
              Designs with a passion for creating timeless, modern spaces that
              blend function and style, Ihab Hafez brings a unique global
              perspective to Hafez Design Studio. Ihab&apos;s journey began with
              a bachelor&apos;s degree in interior design in 2006 from Egypt,
              where he mastered the art of manual drafting and traditional
              rendering techniques, laying the foundation for his distinctive,
              detail-oriented approach. After two years in the design industry,
              he transitioned to education, spending nearly a decade teaching
              Art & Design in international schools in Kuwait. He taught and
              developed design curricula, instilling creativity, empathy and
              critical thinking in his students. Driven by a deep passion for
              design, Ihab returned to full-time studies in Canada, balancing
              his roles as a dedicated husband and a father.
            </p>
            <p className="pr-6 text-justify">
              His determination and hard work led to academic and professional
              recognition, including winning the Staples Business Advantage
              Scholarship for Corporate Design. Internships at Connect Resource
              and the City of Mississauga solidified his expertise in space
              planning, feasibility studies, and project management, enriching
              his understanding of both residential and commercial design. At
              Hafez Design Studio, Ihab&apos;s goal is to transform everyday
              spaces into functional works of art, combining travel and modern
              aesthetics with thoughtful, practical design solutions. Whether
              it&apos;s a sleek kitchen renovation, a sophisticated custom
              millwork project, or comprehensive interior. design for
              residential or commercial spaces, Ihab&apos;s work reflects a
              commitment to quality, beauty, and innovation. He partners with
              clients who value creativity, craftsmanship, and a personalized
              touch, ensuring that every project not only meets but exceeds
              expectations.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-[10vh]">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold mb-[5vh]">
              Designer Credentials &amp; Awards
            </h2>
            <Image
              src="/cert.png"
              alt="Founder of Sansa Interiors in Toronto"
              className="object-cover w-[50%] h-[50%] border  shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="container mx-auto mt-[10vh]">
          {/* <div className="container mx-auto"> */}
          <Feed />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
