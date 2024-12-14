import React, { ReactNode } from "react";
import { LuLampCeiling } from "react-icons/lu";
import { SiAffinitydesigner } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { TbSection } from "react-icons/tb";
import { SiSketchup } from "react-icons/si";
import { SiTwinmotion } from "react-icons/si";
import { IoIosContract } from "react-icons/io";

const FeaturedServices = () => {
  return (
    <div className="container mx-auto py-22 mt-[180px]">
      <div className="px-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-[60px] lg:mb-[70px]">
            <h2 className="mb-4 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Architects & Designers Services
            </h2>
            <p className="mb-14 w-full pr-[12vw]">
              At Hafez Design Studio, we&apos;re here to help you shine. Our
              technical expertise allows you to focus on other areas of your
              business, allowing you more time to thrive. We provide a
              comprehensive range of services. Our precise technical drawings
              are designed to minimize contractor reviews and reduce mistakes,
              while our stunning 3D realistic renderings will impress your
              clients and help them make informed decisions about their biggest
              investments. Partner with us to elevate your projects and take
              your design business to the next level while having more control
              over your time.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-4 mb-6 px-6">
        <ServiceCard
          title="As-Built Floor Plans"
          details="Accurate measurements and detailed drawings of existing spaces to serve as a reliable foundation for your design projects."
          icon={<SiAffinitydesigner color="white" size={35} />}
        />
        <ServiceCard
          title="Floor Plans"
          details="Clear and precise layouts that effectively communicate your vision to clients and contractors, while adhering to building codes."
          icon={<MdSpaceDashboard color="white" size={35} />}
        />
        <ServiceCard
          title="Elevations & Sections"
          details="Comprehensive drawings showcasing intricate details and ensuring alignment between design intent and construction."
          icon={<LuLampCeiling color="white" size={35} />}
        />
        <ServiceCard
          title="Millwork Drawing-Set"
          details="Tailored millwork designs and technical specifications to enhance functionality and aesthetic appeal."
          icon={<TbSection color="white" size={35} />}
        />
        <ServiceCard
          title="3D Modeling"
          details="Immersive 3D models that bring your design concepts to life, showcasing every detail."
          icon={<SiSketchup color="white" size={35} />}
        />
        <ServiceCard
          title="Realistic Renderings"
          details="High-quality visuals to wow clients and help them envision the final result with confidence."
          icon={<SiTwinmotion color="white" size={35} />}
        />
        <ServiceCard
          title="Walk-Throughs"
          details="Dynamic, virtual experiences that provide clients with an interactive preview of their spaces."
          icon={<SiTwinmotion color="white" size={35} />}
        />
        <ServiceCard
          title="Subcontracting"
          details="When you need an extra hand, second opinion I am available to assist with your own project."
          icon={<IoIosContract color="white" size={35} />}
        />
      </div>
    </div>
  );
};

export default FeaturedServices;

interface ServiceCardProps {
  icon: ReactNode; // ReactNode will cover any React elements, including SVGs
  title: string;
  details: string;
  details2?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  details,
  details2,
}) => {
  return (
    <div className="w-full px-4">
      <div className="group mb-12">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-black xl:mb-[50px]">
          <span className="absolute left-0 top-0 z-[-1] flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-30 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h4 className="mb-4 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="mb-4 text-black">{details}</p>
        <p className="mb-10 text-black">{details2}</p>
      </div>
    </div>
  );
};
