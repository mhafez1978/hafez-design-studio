import React, { ReactNode } from "react";
//import { FaCompassDrafting } from "react-icons/fa6";
//import { IoBusiness } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
//import { BsBuildingDown } from "react-icons/bs";
import { FiTable } from "react-icons/fi";
//import { RiFolderReceivedFill } from "react-icons/ri";
//import { MdOutlineManageHistory } from "react-icons/md";
//import { FaTruckFront } from "react-icons/fa6";
import { TbBathFilled } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";

const FeaturedServices = ({
  serviceTitle,
  serviceName,
  serviceDescription,
  serviceDescription2,
}: {
  serviceTitle: string;
  serviceName: string;
  serviceDescription: string;
  serviceDescription2: string;
}) => {
  return (
    <div className="container mx-auto py-22 mb-[25px]">
      <div className="px-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-[60px] lg:mb-[50px]">
            <span className="mb-2 block text-lg font-semibold text-black">
              {serviceTitle}
            </span>
            <h2 className="text-3xl font-bold leading-[1.2] text-dark mb-4 dark:text-white sm:text-4xl md:text-[40px]">
              {serviceName}
            </h2>
            <p className="mb-4 w-full pr-[12vw]">{serviceDescription}</p>
            <p className="w-full pr-[12vw]">{serviceDescription2}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-3 px-6">
        <ServiceCard
          title="Office Design"
          details="We create functional and inspiring office spaces that foster productivity and align with your company's brand and culture. From open-plan layouts to private workspaces, we focus on design solutions that enhance employee well-being and workflow."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<MdHomeWork color="white" size={35} />}
        />
        <ServiceCard
          title="Restaurant Design"
          details="We design restaurants that offer both an exceptional dining experience and a strong brand identity. Our focus is on creating inviting spaces with thoughtful layouts, ambiance, and design details that enhance customer satisfaction and operational efficiency."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<MdKitchen color="white" size={35} />}
        />
        <ServiceCard
          title="Concept & Brand Image"
          details="We develop unique design concepts that reflect your brand’s identity and values. From the visual aesthetic to the atmosphere, we ensure every detail aligns with your brand's story, creating a cohesive and memorable experience for your customers."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<TbBrandAirtable color="white" size={35} />}
        />
        <ServiceCard
          title="Feasibility Study"
          details="We conduct comprehensive feasibility studies to assess the viability of your project. This includes evaluating site conditions, budget constraints, and design potential to ensure your vision is practical and financially achievable."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<FiTable color="white" size={35} />}
        />
        <ServiceCard
          title="Millwork & Fit in"
          details="We provide custom millwork and fit-in solutions that enhance your commercial space's functionality and style. From cabinetry to bespoke fixtures, our designs integrate seamlessly with your overall concept, adding both practicality and aesthetic value."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<TbBathFilled color="white" size={35} />}
        />
        <ServiceCard
          title=" Project Management"
          details="We manage every aspect of your commercial project, ensuring that it stays on track, on budget, and on time. Our team coordinates with contractors, vendors, and suppliers to deliver a seamless experience and efficiently bring your vision to life."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<FaProjectDiagram color="white" size={35} />}
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4">
      <div className="group mb-12">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-black xl:mb-[50px]">
          <span className="absolute left-0 top-0 z-[-1] flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-30 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="mb-9 text-black">{details}</p>
      </div>
    </div>
  );
};
