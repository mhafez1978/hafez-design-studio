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
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl font-black">Corporate &amp; Design</h1>
              <h5 className="text-lg font-base mb-4">
                Sudbury, Ontario Canada
              </h5>
              <p className="mb-2 pr-6 text-justify">
                Corporate Office Design Honored to have won the Staples Business
                Advantage Scholarship for our Corporate Design. In this project,
                we used the main three principles of design maintained in Zaha
                Hadid’s work throughout her career. “Movement” to bring in
                dynamics that contrast the workfrom- home environment, “Variety”
                in shape and form representing the diversity in our community,
                and “Unity” to connect and unify everything together creating an
                inclusive work environment.
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
