import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hafez Design Studio | Kitchen Renovation",
  description: "Kitchen Renovation",
  keywords: "Kitchen Renovations Sudbury, Ontario Canada",
};

const page = () => {
  return (
    <>
      <section className="w-screen pt-[180px] mb-[200px]">
        <div className="container mx-auto h-[65vh] overflow-hidden mb-12">
          <img
            src="/lobby-design.png"
            alt="Ontario Kitchen Renovation"
            className="object-cover object-bottom w-full h-full"
            width={800}
            height={450}
          />
        </div>
        <div className="container mx-auto">
          <div className="w-full flex flex-row mb-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-black">Corporate &amp; Design</h1>
              <h5 className="text-lg font-base mb-4">
                Sudbury, Ontario Canada
              </h5>
              <p className="mb-2 pr-6">
                This stunning kitchen transformation located in Sudbury ON. The
                outdated 217 sq ft. kitchen with limited storage and counter
                space has been completely revamped to a transitional style
                kitchen that meets our client&apos;s needs and preferences. The
                redesign features white upper cabinets paired with light green
                base cabinets, complemented by gold handles adding a touch of
                elegance.
              </p>
              <p className="mb-2 pr-6">
                The central island, with its white marble countertop and green
                stools, serves as the perfect gathering spot for entertaining
                family and friends. The white herringbone backsplash adds a
                modern flair, while the black range hood and built-in appliances
                offer style and functionality. The overall design creates a
                contemporary, inviting space that seamlessly blends aesthetics
                with practicality. This project demonstrates our commitment to
                delivering exceptional kitchen designs that enhance the living
                experience.
              </p>
            </div>
            <div className="w-1/2">
              <div className="w-full flex flex-col">
                <img
                  src="/office-workstations-layout.png"
                  alt="kitchen-reno-west-view"
                  className="object-cover object-bottom w-full h-[50%]"
                  width={800}
                  height={450}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex flex-row gap-6">
            <div className="w-1/2 h-[800px]">
              <img
                src="/corporate-meeting-room.png"
                alt="kitchen-reno-north-view"
                className="object-cover w-full h-[50%]"
                width={800}
                height={450}
              />
            </div>
            <div className="w-1/2 h-[800px]">
              <img
                src="/office-break-room-design.png"
                alt="kitchen-reno-north-view"
                className="object-cover  w-full h-[50%]"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
