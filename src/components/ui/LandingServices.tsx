import React from "react";
import Image from "next/image";

const LandingServices: React.FC = () => {
  return (
    <section>
      <div className="w-screen min-h-screen flex flex-col pt-6 justify-start items-center">
        <h3 className="text-3xl font-black mb-4">
          Elegant interiors that reflect your personality
        </h3>
        <p className="w-[40%] mx-auto text-center text-md mb-8">
          Our goal is to create commercial and residential spaces that are
          functional, timeless and elegant, while maintaining a reflection of
          our clients personality.
        </p>
        <div className="w-full min-h-[600px] flex flex-col lg:flex-row">
          <div className="w-full  flex flex-col justify-start items-center p-2 lg:w-1/2 lg:p-4">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/09025789-494e-4c74-a7d7-ff687ae4345c/Sansa+Interiors+-+Toronto%E2%80%99s+top+interior+design+firm.+Custom+Homes%2C+best+interior+design+in+toronto%2C+mininmal+interior+design.+Kitchen+design+in+toronto.+Artistic+Design+Firm.+Kitchen+Luxury+Home+Design.+Luxury+Home+Living+Interior+Designer?format=1500w"
              alt=""
              className="mb-4"
              width={1200}
              height={1000}
            />
            <h4 className="font-semibold text-4xl mb-4">
              <span className="italic">Residential</span> Interior Design
            </h4>
            <p className="mb-4">
              Creating high-end custom interior design for homes with a holistic
              approach.
            </p>
            <button className="bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black">
              Explore Residential
            </button>
          </div>
          <div className="w-full flex flex-col justify-start items-center p-2 lg:w-1/2 lg:p-4">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5d6d67f2387da800015dc00e/563b3b7e-d8c7-43e0-b749-d6c13e8c610d/Tabule_SansaInteriors_BrunoBelli-1.jpg"
              alt=""
              className="mb-4"
              width={1200}
              height={1000}
            />
            <h4 className="font-semibold text-4xl mb-4">
              <span className="italic">Commercial</span> Interior Design
            </h4>
            <p className="mb-4">
              Creating a welcoming and inviting atmosphere for commercial
              spaces.
            </p>
            <button className="bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:border hover:border-black">
              Explore Commercial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
