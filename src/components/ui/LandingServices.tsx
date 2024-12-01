import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingServices: React.FC = () => {
  return (
    <section>
      <div className="w-screen min-h-screen flex flex-col pt-6 justify-start items-center">
        <div className="w-full flex flex-col items-center py-20">
          <h3 className="text-4xl font-black mb-4 italic">Design Approach</h3>
          {/* <h5 className="text-xl font-semibold mb-4">
          {" "}
          Interior Designers &amp; General Contractors
        </h5> */}
          <p className="w-[40%] mx-auto text-center text-lg mb-8">
            Blending global experience and design expertise,{" "}
            <span className="font-black">Hafez</span> creates timeless,
            sophisticated spaces that reflect your unique modern style.
          </p>
        </div>
        <div className="w-full min-h-[600px] flex flex-col lg:flex-row">
          <div className="w-full  flex flex-col justify-start items-center p-2 lg:w-1/2 lg:p-4">
            <Image
              // src="https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/09025789-494e-4c74-a7d7-ff687ae4345c/Sansa+Interiors+-+Toronto%E2%80%99s+top+interior+design+firm.+Custom+Homes%2C+best+interior+design+in+toronto%2C+mininmal+interior+design.+Kitchen+design+in+toronto.+Artistic+Design+Firm.+Kitchen+Luxury+Home+Design.+Luxury+Home+Living+Interior+Designer?format=1500w"
              src="/residential-01.jpg"
              alt=""
              className="mb-4 h-full w-full"
              width={1500}
              height={1000}
            />
            <h4 className="font-semibold text-4xl mb-4">
              <span className="italic">Residential &amp; Commercial </span>
            </h4>
            <p className="mb-4">
              Full service interior design and renovations services.
            </p>
            <Link
              href="residential/services"
              className="bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Explore Services
            </Link>
          </div>
          <div className="w-full flex flex-col justify-start items-center p-2 lg:w-1/2 lg:p-4">
            <Image
              // src="https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/563b3b7e-d8c7-43e0-b749-d6c13e8c610d/Tabule_SansaInteriors_BrunoBelli-1.jpg"
              src="/3d-modeling-realistic-render.jpg"
              alt=""
              className="mb-4"
              width={1200}
              height={1000}
            />
            <h4 className="font-semibold text-4xl mb-4">
              <span className="italic">Designers &amp; Contractors</span>
            </h4>
            <p className="mb-4">
              Drafting and rendering services for felow interior designers and
              contractors.
            </p>
            <Link
              href="designers/services"
              className="bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
